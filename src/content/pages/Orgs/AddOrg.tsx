

import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';

import {
    Box,
    Card,
    Container,
    Button,
    TextField,
    Grid,
    Typography
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import PageHeader from 'src/components/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { useReducer } from 'react';
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask';

import { CreateOneorgsInput, Mutation, orgs, Query, useMutation, useQuery } from 'src/gqless';
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

let fieldsValues = {} as orgs;

const AddOrg = () => {
    const params = useParams();
    const navigate = useNavigate();
    let acao = "Novo"
    const query: Query = useQuery({
        suspense: true,
        staleWhileRevalidate: true,
        onError(error) { },
    });
    if (params?.id) {
        acao = "Editar"
        fieldsValues = { ...query.orgById({ _id: params.id }) };
    }

    const [save, { isLoading, data, error }] = useMutation(
        (mutation: Mutation, args: CreateOneorgsInput) => {
            args.isDeleted = false;
            const response = params?.id ? mutation.orgUpdateOne({ filter: { _id: params.id }, record: args }) : mutation.orgCreateOne({ record: args });
            const id = response.record._id;
            const err = { ...response.error }
            if (id && !err?.message) {
                toast.success('Orgão salvo com successo!');
                navigate('/orgs')


            }
            return response.record;
        },
        {
            onCompleted(data) {

            },
            onError(error) {
                console.log(error);
                toast.error('Erro ao salvar: ' + error?.message);
            },
            refetchQueries: [query.orgMany],
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
        toast.error('Erro ao salvar Orgão: ' + error?.message);
    }
    return (
        <>
            <Helmet>
                <title>Orgão</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader title={`${acao} Orgão`} msg="adicione um novo orgão."
                    element={(
                        <>
                            <Button
                                sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                variant="outlined"
                                component={RouterLink}
                                to="/orgs"
                            >
                                Voltar
                            </Button>
                            <Button
                                sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                variant="contained"
                                startIcon={<AddTwoToneIcon fontSize="small" />}
                                onClick={handleSubmit}
                            >
                                Salvar
                            </Button>
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
                            <form onSubmit={handleSubmit}>

                                <TextField
                                    sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                    variant="standard"
                                    required
                                    id={`org-required`}
                                    label={"Org"}
                                    helperText=""
                                    size='medium'
                                    name="org"
                                    value={formData['org'] || ""}
                                    onChange={setFormData}
                                />

                                <InputMask
                                    mask={"99.999.999/9999-99"}
                                    required
                                    value={formData['cnpj'] || ''}
                                    name="cnpj"
                                    onChange={setFormData}
                                >{() => <TextField
                                    label="CNPJ"
                                    variant="standard"
                                    size='medium'
                                    name="cnpj"
                                    value={formData['cnpj'] || ''}

                                    sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}

                                />}
                                </InputMask>

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
                                    variant="standard"
                                    size='medium'
                                    name="cpf"
                                    value={formData['cpf'] || ''}

                                    sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}

                                />}
                                </InputMask>

                                <InputMask
                                    mask={"(99) 99999-9999"}
                                    value={formData['telefone'] || ''}
                                    name="telefone"
                                    onChange={setFormData}
                                >{() => <TextField
                                    name="telefone"

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
                                    id={`cidade-required`}
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
                                    id={`estado-required`}
                                    label={"UF"}
                                    helperText=""
                                    size='medium'
                                    value={formData['uf'] || ''}
                                    name="uf"
                                    onChange={setFormData}
                                />

                            </form>
                            <Box p={2}>
                                <Button
                                    sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                    variant="outlined"
                                    component={RouterLink}
                                    to="/orgs"
                                >
                                    Voltar
                                </Button>
                                <Button
                                    sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                    variant="contained"
                                    startIcon={<AddTwoToneIcon fontSize="small" />}
                                    onClick={handleSubmit}
                                >
                                    Salvar
                                </Button>
                            </Box>
                        </Card>
                    </Grid>

                </Grid>


            </Container>
        </>
    )
}

export default AddOrg;