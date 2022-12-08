


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
import { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify'
import validator from 'validator'
import InputMask from 'react-input-mask';
import { Mutation, Query, useMutation, useQuery, CreateOneusersInput, users, useRefetch } from 'src/gqless';

const formReducer = (state, event) => {
    if (!event["target"]) {
        return { ...event }
    }
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}


let fieldsValues = {} as users;

const AddUser = ({ editPassword, setAcao, userId, refresh }) => {
    const [formData, setFormData] = useReducer(formReducer, userId ? fieldsValues : {});

    let acao = "Novo"
    let mensagem = "Adicione um novo"
    const refetch = useRefetch();
    const query: Query = useQuery({
        suspense: true,
        staleWhileRevalidate: true,
        onError(error) { },
    });

    if (userId) {
        acao = "Editar";
        mensagem = "Editar o";
    }
    if (editPassword) {
        acao = "Alterar a Senha do";
        mensagem = "alterar a senha do";
    }
    const [save, { isLoading, data, error }] = useMutation(
        (mutation: Mutation, args: CreateOneusersInput) => {
            args.isDeleted = false;
            if (editPassword) {
                if (formData["password"] !== formData["confirm"]) {
                    toast.error('Senhas não são idênticas, Tente novamente!');
                    return false;
                }
            }
            delete args["confirm"]
            const response = userId ? mutation.userUpdateOne({ filter: { _id: userId }, record: args }) : mutation.userCreateOne({ record: args });
            const id = response.record._id;
            const err = { ...response.error };
            if (id && !err?.message) {
                toast.success('Usuário salvo com successo!');
                setAcao({ acao: 0, refresh: true });

            }
            return response.record;
        },
        {
            onCompleted(data) {
            },
            onError(error) {
                toast.error('Erro ao criar: ' + error?.message);
            },
            refetchQueries: [query.userMany],
            awaitRefetchQueries: true,
            suspense: false,
        }
    );


    if (!formData._id && fieldsValues["_id"] && userId && !editPassword) {
        setTimeout(() => {
            setFormData(fieldsValues);
        }, 100);
    }
    const handleSubmit = async event => {
        delete formData.__typename;
        delete formData._id;
        event.preventDefault();
        if ((!formData["email"] || !validator.isEmail(formData["email"])) && !editPassword) {
            toast.error('Email inválido, preencha corretamente!')
            return
        }
        console.log(formData);
        save({ args: { ...formData } })
    }
    if (error) {
        toast.error('Erro ao salvar Usuário: ' + error?.message);
    }
    fieldsValues = { ...query.userById({ _id: userId }) };

    useEffect(() => {
        refetch(() => {
            fieldsValues = { ...query.userById({ _id: userId }) };
        });
    }, [refresh]);

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
                <title>Usuários</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader title={`${acao} Usuário`} msg={`${mensagem} usuário`}
                    element={(
                        <>
                            <Button
                                sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                variant="outlined"
                                onClick={() => {
                                    setAcao({ acao: 0, refresh: true });
                                }}
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
                                {userId && editPassword ? "Alterar senha" : "Preencher "}
                                {userId && !editPassword ? "dados" : ""}
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                {editPassword ?

                                    <>
                                        <TextField
                                            sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                            variant="standard"
                                            type="password"
                                            required
                                            id={`password-required`}
                                            label={"Senha"}
                                            helperText=""
                                            size='medium'
                                            name="password"
                                            onChange={setFormData}
                                        />

                                        <TextField
                                            sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                            variant="standard"
                                            type="password"
                                            required
                                            id={`confirm-required`}
                                            label={"Confirme a Senha"}
                                            helperText=""
                                            size='medium'
                                            name="confirm"
                                            onChange={setFormData}
                                        />


                                    </>
                                    :
                                    <>
                                        <TextField
                                            sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                            variant="standard"
                                            required
                                            id="nume"
                                            label={"Nome"}
                                            size='medium'
                                            value={formData['nome'] || ''}
                                            name="nome"
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
                                            onKeyUp={getCep}
                                            onChange={setFormData}
                                        >{() => <TextField
                                            name="cep"

                                            label="CEP"
                                            variant="standard"
                                            size='medium'
                                            sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                            onKeyUp={getCep}
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
                                    </>
                                }
                            </form>

                            <Box p={2}>
                                <Button
                                    sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                    variant="outlined"
                                    onClick={() => {
                                        setAcao({ acao: 0, refresh: true });
                                    }}
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

export default AddUser;