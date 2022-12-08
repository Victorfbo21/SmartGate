import { Helmet } from 'react-helmet-async';
import { Button, Container, Grid, Typography } from '@mui/material';
import Footer from 'src/components/Footer';
import LastSensors from './LastOrders';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import { EnumequipmentsType, SortFindManydata_sensorsInput, useQuery, useRefetch } from 'src/gqless';
import { LoadingButton } from '@mui/lab';
import { useEffect, useReducer, useState } from 'react';

let timeout = 400;
const blinkReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}
function HomeDashboard() {
  const refetch = useRefetch();
  const query = useQuery();
  const [digestores, setDigestores] = useState({});
  const blinkParams = {};
  const [blinkData, SetBlink] = useReducer(blinkReducer, blinkParams);
  const getDigestores = () => {
    const d: any = query.equipmentMany({ filter: { type: EnumequipmentsType.DIGEST } }).map(digestor => {
      if (digestor && digestor.controlador && digestor.project) {
        const projeto = query.projectById({ _id: digestor.project }).projeto;
        if (projeto) {
          const controlador = query.equipmentById({ _id: digestor.controlador }).code;
          const sensors = [];
          let flag = false;
          query.equipmentMany({ filter: { controlador: digestor.controlador, type: EnumequipmentsType.SENSOR } }).map(sensor => {
            sensor.parametros.map(parameter => {
              const { order, unidadeMedida, min, max, nome } = { ...parameter };
              const param = query.dataSensorsMany({ limit: 1, filter: { paramCode: Number(parameter.paramCode) }, sort: SortFindManydata_sensorsInput.CREATED_AT_DESC });
              if (param[0].value) {
                flag = true;
                console.log("blinkParams", blinkParams)
                if (blinkParams[param[0].paramCode] && blinkParams[param[0].paramCode].lastValue != param[0].value) {
                  SetBlink({ name: param[0].paramCode, value: { cor: "#ccc", value: param[0].value } })
                  setTimeout(() => {
                    SetBlink({ name: param[0].paramCode, value: { cor: "#fff", value: param[0].value } });
                  }, 2000);
                } else {
                  blinkParams[param[0].paramCode] = { cor: "#ffffff", lastValue: param[0].value };
                }
                sensors.push({
                  sensor: sensor.code,
                  order,
                  param: {
                    unidadeMedida,
                    valor: param[0].value,
                    nome,
                    date: param[0].createdAt,
                    paramCode: param[0].paramCode,
                    order,
                    min,
                    max
                  }
                })
              }
            })
          })
          if (flag) {
            const resp = {
              digest: digestor.code,
              controlador,
              sensores: sensors.sort((a: any, b: any) => a.order > b.order ? 1 : -1),
              projeto
            }
            console.log("resp", resp);
            return resp
          } else {
            return null;
          }
        } else {
          return null;
        }
      } else {
        return null;
      }
    });


    if (d && d[0] && d[0].controlador) {

      timeout = 5000;
      setDigestores(d);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      refetch(getDigestores);
    }, timeout);
    return () => clearTimeout(timer);

  }, [digestores]);

  if (!digestores || !digestores[0] || !digestores[0].controlador) {
    getDigestores();
    return (
      <PageTitleWrapper>
        <Typography variant="h3">
          Aguarde: Carregando...
        </Typography>
      </PageTitleWrapper>
    )
  }
  console.log("iniciou", blinkData);


  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item lg={12} xs={12}>
            <LastSensors medicoes={digestores} blinkData={blinkData} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default HomeDashboard;
