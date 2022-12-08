import {
    Box,
    Card,
    Container,
    Divider,
    Button,
    TextField,
    Grid,
    CardContent,
    MenuItem
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import PageHeader from 'src/components/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import HistoricalChart from "src/components/Chart/HistoricalChart";
import { EnumequipmentsType, equipments, SortFindManydata_sensorsInput, useQuery } from "src/gqless";
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';

const Charts = ({ setAcao, refresh }) => {
    const params = useParams();
    const query = useQuery();
    const equipments = query.equipmentMany({ filter: { project: params.id } }).map(equipment => { return { ...equipment } });

    const controladores = equipments.filter((v) => v.type === EnumequipmentsType.CONTROLLER);


    controladores.forEach((controller) => {
        const sensores = query.equipmentMany({ filter: { controlador: controller._id, type: EnumequipmentsType.SENSOR } }).map(equipment => {
            const params = equipment.parametros.map(param => { return { ...param } });
            return { ...equipment, parametros: params };
        });
        sensores.forEach(sensor => {
            const parametros = sensor.parametros.map(param => {
                const data = query.dataSensorsMany({ filter: { device: sensor.code, paramCode: Number(param.paramCode) }, limit: 25, sort: SortFindManydata_sensorsInput.CREATED_AT_DESC }).map(sensor => { return { ...sensor } });
                param["data"] = data;
                return param;
            });
            sensor.parametros = parametros;
        });
        controller["sensores"] = sensores;
    });

    var colorArray = ['#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',];

    return (<>
        <Helmet>
            <title>Projeto</title>
        </Helmet>
        <PageTitleWrapper>
            <PageHeader title={"Gráficos"} msg="Gráfico dos Sensores"
                element={(
                    <>
                        <Button
                            sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                            variant="outlined"
                            component={RouterLink}
                            to="/projects"
                        >
                            Voltar
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
                spacing={4}
            >

                <Grid item lg={12} xs={12} >
                    <Grid container spacing={2}>
                        {controladores.map(controller => {
                            return controller["sensores"].sort((a, b) => a.parametros[0].order < b.parametros[0].order ? -1 : 1).map(sensor => {
                                const indexColor = sensor.parametros[0].order % 10;
                                console.log(colorArray[indexColor]);
                                return sensor.parametros.map(param => {
                                    const serie = {
                                        name: param.nome + " " + param.unidadeMedida,
                                        data: param.data.map(d => d.value)
                                    };
                                    return (<>
                                        <Grid xs={12} sm={8} md={6} item key={sensor?.device || ""}>
                                            <Card
                                                sx={{
                                                    px: 1
                                                }}
                                            >
                                                <CardContent>
                                                    <HistoricalChart
                                                        title={sensor.code}
                                                        subtitle={param.nome + " " + param.unidadeMedida}
                                                        labels={param["data"].map(d => d.createdAt)}
                                                        series={[serie]}
                                                        device={sensor.code}
                                                        code={param.paramCode}
                                                        color={colorArray[indexColor]}
                                                    />
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </>
                                    )
                                })
                            });
                        })}

                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </>)

}

export default Charts;