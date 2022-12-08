import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import {
    Box,
    Card,
    Container,
    Divider,
    Button,
    TextField,
    Grid,
    CardContent,
    MenuItem,
    Typography
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import PageHeader from 'src/components/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { useReducer, useState } from 'react';
import { toast } from 'react-toastify'
import { CreateOneorgsInput, CreateOneorgsPayload, Mutation, orgs, Query, UpdateOneorgsPayload, useMutation, useQuery, query, CreateOneprojectsInput, useRefetch } from 'src/gqless';
import EquipmentTable from '../Equipments/components/EquipmentTable';
import AddressMap from '../Components/Map/AddressMap';
import validator from 'validator'
import InputMask from 'react-input-mask';

enum modes {
    newer,
    editor,
    viewer
}
const formReducer = (state, event) => {
    if (!event["target"]) {
        return { ...event }
    }
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

let fieldsValues = {};

const AddProject = ({ equipments, charts, edit, setAcao, projectId, refresh }) => {
    const params = useParams();
    const navigate = useNavigate();
    let acao = "Novo";
    const query: Query = useQuery({
        suspense: true,
        staleWhileRevalidate: true,
        onError(error) { },
    });
    const user = query.getUserContext;
    const userRole = user ? user["role"] : null;
    if (params?.id) {
        acao = "Editar";
        fieldsValues = { ...query.projectById({ _id: params.id }) };
    }
    const orgs = query.orgMany({ limit: 10 }).map(org => { return { id: org._id, nome: org.org } });
    const [save, { isLoading, data, error }] = useMutation(
        (mutation: Mutation, args: CreateOneprojectsInput) => {
            args.isDeleted = false;
            delete args["undefined"]
            const response = params?.id ? mutation.projectUpdateOne({ filter: { _id: params.id }, record: args }) : mutation.projectCreateOne({ record: args });
            const id = response.record._id;
            const err = { ...response.error }
            if (id && !err?.message) {
                toast.success('Projeto salvo com successo!');
                setAcao({ acao: 0, refresh: true });
                //navigate('/projects')
            }
            return response.record;
        },
        {
            onCompleted(data) {
            },
            onError(error) {
                console.log(error);
                toast.error('Erro ao salvar projeto: ' + error?.message);
            },
            refetchQueries: [query.projectMany],
            awaitRefetchQueries: true,
            suspense: false,
        }
    );

    const [formData, setFormData] = useReducer(formReducer, params.id ? fieldsValues : {});

    if (!formData._id && fieldsValues["_id"] && params.id) {
        setTimeout(() => {
            setFormData(fieldsValues);
        }, 100);
    }
    const handleSubmit = async event => {
        delete formData.__typename;
        delete formData._id;
        event.preventDefault();
        save({ args: formData })
    }
    if (error) {
        toast.error('Erro ao salvar projeto: ' + error?.message);
    }

    const getCep = async event => {
        const cep = formData["cep"];
        const address: any = await fetch("https://cdn.apicep.com/file/apicep/" + cep + ".json")
            .then(res => res.json())
        console.log(address)
        if (address?.address) {
            formData["rua"] = address.address
            formData["bairro"] = address.district
            formData["cidade"] = address.city
            formData["uf"] = address.state
        }
    }

    return (
        <>
            <Helmet>
                <title>Projeto</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader title={`${acao} Projeto`} msg="adicione um novo projeto."
                    element={(
                        <>
                            <Button
                                sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                variant="outlined"
                                onClick={() => {
                                    setAcao({ acao: 0, refresh: true });
                                }}
                                // component={RouterLink}
                                // to="/projects"
                            >
                                Voltar
                            </Button>
                            {userRole == "user" || userRole == "admin" ?
                                <Button
                                    sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                    variant="contained"
                                    startIcon={<AddTwoToneIcon fontSize="small" />}
                                    onClick={handleSubmit}
                                >
                                    Salvar
                                </Button> : ""}
                        </>
                    )} />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}>
                    <Grid item xs={12}>
                        <Card
                            sx={{
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                justifyItems: "center",
                                textAlign: 'center',
                                m: 2
                            }}
                        >
                            <Typography variant="h4" p={2}
                                noWrap
                                sx={{
                                    textAlign: "left"
                                }}>
                                {params.id ? "Editar dados " : "Preencher"}
                            </Typography>
                            <Box p={2} display="flex" >
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        id="org"
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        select
                                        label="Orgão"
                                        value={formData["org"] || ""}
                                        onChange={setFormData}
                                        placeholder="Selecione o orgão"
                                        name="org"
                                    >
                                        {orgs.map((option) => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.nome}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        id={`projeto-required`}
                                        label={"Projeto"}
                                        helperText=""
                                        size='medium'
                                        name="projeto"
                                        value={formData['projeto'] || ""}
                                        onChange={setFormData}
                                    />

                                    <TextField
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        id={`nome-required`}
                                        label={"Nome"}
                                        helperText=""
                                        size='medium'
                                        name="nome"
                                        value={formData['nome'] || ""}
                                        onChange={setFormData}
                                    />

                                    <TextField
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        label={"Email"}
                                        size='medium'
                                        value={formData['email'] || ''}
                                        name="email"
                                        onChange={setFormData}
                                    />

                                    <InputMask
                                        mask={"999.999.999-99"}
                                        required
                                        value={formData['cpf'] || ''}
                                        name="cpf"
                                        onChange={setFormData}
                                    >{() => <TextField
                                        label="CPF"
                                        required
                                        variant="standard"
                                        size='medium'
                                        name="cpf"
                                        value={formData['cpf'] || ''}

                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}

                                    />}
                                    </InputMask>

                                    <InputMask
                                        mask={"99.999.999/9999-99"}
                                        required
                                        value={formData['cnpj'] || ''}
                                        name="cnpj"
                                        onChange={setFormData}
                                    >{() => <TextField
                                        label="CNPJ"
                                        required
                                        variant="standard"
                                        size='medium'
                                        name="cnpj"
                                        value={formData['cnpj'] || ''}

                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}

                                    />}
                                    </InputMask>

                                    <InputMask
                                        mask={"(99) 99999-9999"}
                                        value={formData['telefone'] || ''}
                                        name="telefone"
                                        required
                                        onChange={setFormData}
                                    >{() => <TextField
                                        name="telefone"
                                        required
                                        label="Telefone"
                                        variant="standard"
                                        size='medium'
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}

                                    />}
                                    </InputMask>

                                    <TextField
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        label={"Rua"}
                                        helperText=""
                                        size='medium'
                                        value={formData['rua'] || ''}
                                        name="rua"
                                        onChange={setFormData}
                                    />

                                    <TextField
                                        type="number"
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        label={"Número"}
                                        helperText=""
                                        size='medium'
                                        value={formData['numero'] || ''}
                                        name="numero"
                                        onChange={setFormData}
                                    />

                                    <TextField
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        id={`complement-required`}
                                        label={"Complemento"}
                                        helperText=""
                                        size='medium'
                                        value={formData['complemento'] || ''}
                                        name="complemento"
                                        onChange={setFormData}
                                    />

                                    <TextField
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        id={`district-required`}
                                        label={"Bairro"}
                                        helperText=""
                                        size='medium'
                                        value={formData['bairro'] || ''}
                                        name="bairro"
                                        onChange={setFormData}
                                    />

                                    <InputMask
                                        mask={"99999-999"}
                                        value={formData['cep'] || ''}
                                        name="cep"
                                        required
                                        onKeyUp={getCep}
                                        onChange={setFormData}
                                    >{() => <TextField
                                        name="cep"
                                        required
                                        label="CEP"
                                        variant="standard"
                                        size='medium'
                                        onKeyUp={getCep}
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}

                                    />}
                                    </InputMask>

                                    <TextField
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        id={`city-required`}
                                        label={"Cidade"}
                                        helperText=""
                                        size='medium'
                                        value={formData['cidade'] || ''}
                                        name="cidade"
                                        onChange={setFormData}
                                    />

                                    <TextField
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        id={`state-required`}
                                        label={"UF"}
                                        helperText=""
                                        size='medium'
                                        value={formData['uf'] || ''}
                                        name="uf"
                                        onChange={setFormData}
                                    />

                                    <TextField
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        id={`latitude-required`}
                                        label={"Latitude"}
                                        helperText=""
                                        size='medium'
                                        value={formData['latitude'] || ''}
                                        name="latitude"
                                        onChange={setFormData}
                                    />

                                    <TextField
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        variant="standard"
                                        required
                                        id={`longitude-required`}
                                        label={"Longitude"}
                                        helperText=""
                                        size='medium'
                                        value={formData['longitude'] || ''}
                                        name="longitude"
                                        onChange={setFormData}
                                    />

                                </form>
                            </Box>
                        </Card>
                        {params.id ? <>
                            <Card sx={{
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                justifyItems: "center",
                                textAlign: 'center',
                                m: 2
                            }}>
                                <Box p={2}>
                                    <AddressMap />
                                </Box>
                            </Card>
                            <Card sx={{ m: 2 }}>

                                <Typography variant="h3" p={2} noWrap>
                                    Equipamentos no Projeto
                                </Typography>
                                <Box p={2}>
                                    <EquipmentTable projectId={params?.id} />
                                </Box>
                            </Card></> : ""}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AddProject;