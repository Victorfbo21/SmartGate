

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
import { useReducer } from 'react';
import { toast } from 'react-toastify'
import moment from 'moment';
import { Mutation, Query, useMutation, useQuery, CreateOneequipmentsInput, FilterFindManyequipmentsInput, EnumequipmentsType, equipments } from 'src/gqless';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const formReducer = (state, event) => {
    if (!event["target"]) {
        return { ...event }
    }
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const AddEquipment = () => {
    const params = useParams();
    const navigate = useNavigate();

    let acao = "Novo"
    let fieldsValues: equipments = {} as equipments;
    const query: Query = useQuery({
        suspense: true,
        staleWhileRevalidate: true,
        onError(error) { },
    });
    if (params?.id) {
        acao = "Editar"
        fieldsValues = { ...query.equipmentById({ _id: params.id }) };
    }
    const projects = query.projectMany({ limit: 10 }).map(value => { return { id: value._id, nome: value.projeto } });
    const controllers = query.equipmentMany({ limit: 10, filter: { type: EnumequipmentsType.CONTROLLER } }).map(value => { return { id: value._id, nome: value.code } });

    let [save, { isLoading, data, error }] = useMutation(
        (mutation: Mutation, args: CreateOneequipmentsInput) => {
            args.isDeleted = false;
            args.iniciadoEm = moment(args.iniciadoEm).utc();
            args.volume = Number(args.volume);
            delete args["undefined"]
            const response = params?.id ? mutation.equipmentUpdateOne({ filter: { _id: params.id }, record: args }) : mutation.equipmentCreateOne({ record: args });
            const id = response.record._id;
            const err = { ...response.error }
            if (id && !err?.message) {
                toast.success('Equipamento salvo com successo!');
                navigate('/equipments')
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
            refetchQueries: [query.equipmentMany],
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
    return (
        <>
            <Helmet>
                <title>Equipamento</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader title={`${acao} Equipamento`} msg="adicione um novo Equipamento."
                    element={(
                        <>
                            <Button
                                sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                variant="outlined"
                                component={RouterLink}
                                to="/equipments"
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
                                textAlign: 'center'
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
                                    id="project"
                                    sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                    variant="standard"
                                    required
                                    select
                                    label="Projeto"
                                    value={formData["project"] || ''}
                                    onChange={setFormData}
                                    placeholder="Selecione o projeto"
                                    name="project"
                                >
                                    {projects.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.nome}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="controlador"
                                    sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                    variant="standard"
                                    required
                                    select
                                    label="Controlador"
                                    value={formData["controlador"] || ''}
                                    onChange={setFormData}
                                    placeholder="Selecione o controlador"
                                    name="controlador"
                                >
                                    {controllers.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.nome}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="type"
                                    sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                    variant="standard"
                                    required
                                    select
                                    label="Tipo de Equipamento"
                                    value={formData["type"] || ''}
                                    onChange={setFormData}
                                    placeholder="Selecione o tipo"
                                    name="type"
                                >
                                    <MenuItem key={EnumequipmentsType.DIGEST} value={EnumequipmentsType.DIGEST}>
                                        Reator
                                    </MenuItem>
                                    <MenuItem key={EnumequipmentsType.CONTROLLER} value={EnumequipmentsType.CONTROLLER}>
                                        Controlador
                                    </MenuItem>
                                    <MenuItem key={EnumequipmentsType.SENSOR} value={EnumequipmentsType.SENSOR}>
                                        Sensor
                                    </MenuItem>

                                </TextField>

                                <TextField
                                    sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                    variant="standard"
                                    required
                                    id={`descricao-required`}
                                    label={"Descrição"}
                                    helperText=""
                                    size='medium'
                                    value={formData['descricao'] || ''}
                                    name="descricao"
                                    onChange={setFormData}
                                />

                                <TextField
                                    sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                    variant="standard"
                                    required
                                    id={`code-required`}
                                    label={"Code"}
                                    helperText=""
                                    size='medium'
                                    value={formData['code'] || ''}
                                    name="code"
                                    onChange={setFormData}
                                />

                                <TextField
                                    sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                    variant="standard"
                                    required
                                    id={`modelo-required`}
                                    label={"Modelo"}
                                    helperText=""
                                    size='medium'
                                    value={formData['modelo'] || ''}
                                    name="modelo"
                                    onChange={setFormData}
                                />

                                <TextField
                                    sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                    variant="standard"
                                    required
                                    id={`volume-required`}
                                    label={"Volume"}
                                    helperText=""
                                    size='medium'
                                    value={formData['volume'] || ''}
                                    name="volume"
                                    onChange={setFormData}
                                />

                                <DesktopDatePicker
                                    inputFormat="dd/MM/yyyy"
                                    label="Iniciado"
                                    value={formData['iniciadoEm'] || ''}
                                    onChange={(val,) => {
                                        setFormData({ target: { name: 'iniciadoEm', value: val } });
                                    }}
                                    renderInput={(params) => <TextField {...params}
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '40%', fontSize: 20 }}
                                        size='medium'
                                        variant="standard"
                                        name='iniciadoEm' />}
                                />

                            </form>
                            <Box p={2}>
                                <Button
                                    sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                    variant="outlined"
                                    component={RouterLink}
                                    to="/equipments"
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

export default AddEquipment;