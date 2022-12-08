import {
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
} from '@mui/material';
import ReactSpeedometer, { Transition } from "react-d3-speedometer"
import {
  parseISO,
  format
} from 'date-fns';



function LastSensors(props) {


  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h2">Medições Recentes</Typography>

      </Box>
      <Grid container spacing={2}>
        {props.medicoes ? props.medicoes.map((medicao) => {
          return medicao.sensores.map((sensor) => {
            // console.log("Recebeu", props.blinkData[sensor.param.paramCode], sensor.param.nome, sensor.param.paramCode);

            const dateN = sensor?.param?.date || new Date().toISOString();
            const parsedDate = format(parseISO(dateN), 'dd/MM/yyyy HH:mm:ss');
            return (
              <Grid xs={12} sm={8} md={4} item key={sensor?.device || ""}>
                <Card
                  sx={{
                    px: 1,
                    backgroundColor: props?.blinkData[sensor.param.paramCode]?.cor || ""
                  }}
                >
                  <CardContent >
                    <Box
                      sx={{
                        display: 'flex-center',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Box
                        sx={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',

                        }}>
                        <Typography variant="h2" noWrap>
                          {sensor?.param?.nome ? sensor.param.nome.replace("Humidade", "Umidade") : ""}
                        </Typography>
                        <Typography variant="subtitle1" noWrap>
                          {sensor?.sensor || ""}
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" >
                      <Box>
                        <ReactSpeedometer
                          needleHeightRatio={0.7}
                          value={sensor?.param?.valor || 0}
                          startColor={"lightgreen"}
                          endColor={"#b71b1baa"}
                          maxSegmentLabels={2}
                          minValue={sensor?.param?.min || 0}
                          maxValue={sensor?.param?.max || 0}
                          segments={20}
                          needleTransitionDuration={3333}
                          needleTransition={Transition.easeElastic}
                          textColor={"transparent"}
                          width={200}
                          valueTextFontSize="0px"
                          labelFontSize="0px"
                          ringWidth={28}
                          height={100}
                        />
                      </Box>
                      <Box sx={{
                        paddingTop: "40px",
                        textAlign: 'center',

                      }}>
                        <Typography variant="h1" gutterBottom noWrap>
                          {sensor?.param?.valor || ""}{sensor?.param?.unidadeMedida || ""}
                        </Typography>
                        <Typography variant="body1" noWrap>
                          {parsedDate}
                        </Typography>
                      </Box>

                    </Box>
                    <Box>
                      <Typography variant="subtitle1" noWrap>
                        Reator: <b>{medicao?.digest || ""}</b>
                      </Typography>
                      <Typography variant="subtitle2" noWrap>
                        Controle: <b>{medicao?.controlador || ""}</b>
                      </Typography>
                      <Typography variant="subtitle1" noWrap>
                        Projeto: <b>{medicao?.projeto || ""}</b>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        }) : ''}
      </Grid>
    </>
  );
}

export default LastSensors;
