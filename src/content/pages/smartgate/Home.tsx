import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  TextField,
  CircularProgress,
  Grid
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "src/contexts/Auth/AuthContext";
import { toast } from 'react-toastify';
import LockOpenOutlined from '@mui/icons-material/LockOpenOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';

const MainContent = styled(Box)(
  ({ theme }) => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
);
export const SGHome = () => {
  const [isOpen, setOpen] = useState(false);
  const searchParams = new URLSearchParams(document.location.search);
  const gatePass = searchParams.get("pass");
  const gateHandler = (action: String) => {


    // setTimeout(() => controller.abort(), 1000);
    fetch('http://localhost:30147/handler',
      {
        method: "POST",
        body: JSON.stringify({
          pass: gatePass,
          action
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success('Portão acionado com sucesso')
          if (action == "open") {
            setOpen(true);
          }
          if (action == "close") {
            setOpen(false);
          }
          if (action == "timed") {
            setOpen(true);
            setTimeout(() => {
              setOpen(false);
            }, 30000)
          }
        } else {
          toast.error('Erro ao acionar o portão')
        }
      })
      .catch(() => {
        toast.error('Erro ao acionar o portão')
      })
  }
  return (
    <>
      <Helmet>
        <title>SmartGate</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="sm">
          <Container maxWidth="sm">
            <Card sx={{ textAlign: 'center', m: 3, p: 4 }}>
              <Box textAlign="center" >
                <img alt="logo" width={100} src={process.env.PUBLIC_URL + "/static/images/logo/c2a.svg"} />
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="bold"
                  sx={{ my: 1, mb: 1 }}
                >
                  Bem vindo!
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ my: 1, mb: 1 }}
                >
                  Para acionar o portão clique nos botões abaixo
                </Typography>
              </Box>
            </Card>
          </Container>
        </Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid lg={4} xs={6}>
            <Card sx={{ textAlign: 'center', m: 3, p: 2 }} >
              <Box textAlign="center">
                <div>
                  <LockOutlined sx={{ fontSize: "150px", display: isOpen ? "none" : "" }} />
                  <LockOpenOutlined sx={{ fontSize: "150px", display: isOpen ? "" : "none" }} />
                </div>
              </Box>
              <Box textAlign="center">

                <Button
                  onClick={() => { gateHandler('open') }}
                  sx={{ m: 1 }}
                  variant="contained">
                  Abrir Portão
                </Button>
                <Button
                  onClick={() => { gateHandler('close') }}
                  sx={{ m: 1 }}
                  variant="contained">
                  Fechar Portão
                </Button>
                <Button
                  onClick={() => { gateHandler('timed') }}
                  sx={{ m: 1 }}
                  variant="contained">
                  Abrir e Fechar
                </Button>
              </Box>
            </Card>
          </Grid>


        </Grid>
      </MainContent>

    </>
  );
}

export default SGHome;