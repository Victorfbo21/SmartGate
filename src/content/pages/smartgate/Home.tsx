import {
    Box,
    Card,
    Typography,
    Container,
    Divider,
    Button,
    FormControl,
    TextField,
    CircularProgress
  } from '@mui/material';
  import { Helmet } from 'react-helmet-async';
  import { styled } from '@mui/material/styles';
  import { useContext, useEffect, useState } from 'react';
  import { useLocation, useNavigate } from "react-router-dom";
  import { AuthContext } from "src/contexts/Auth/AuthContext";
  import { toast } from 'react-toastify';
  
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
   
    const gateHandler = (action: String) => {
        fetch('http://portao.c2atec.com:30147/handler?pass=Ca15ar80@@&action='+action)
        .then(()=>{
            toast.success('Portão acionado com sucesso')
        })
        .catch(()=>{
            toast.error('Erro ao acionar o portão')
        })
    }
  

  
    return (
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <MainContent>
          <Container maxWidth="md">
            <Container maxWidth="sm">
              <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
                <Box textAlign="center" >
                  <img alt="logo" width={200} src="/static/images/logo/c2a.svg" />
                  <Typography
                    variant="h4"
                    color="text.secondary"
                    fontWeight="normal"
                    sx={{ my: 2, mb: 4 }}
                  >
                    Bem vindo! Para abrir ou fechar o portão clique nos botoes abaixo
                  </Typography>
                  <Button
                    onClick={()=>{gateHandler('open')}}
                    sx={{ m: 1 }}
                    variant="contained">
                    Abrir
                  </Button>
                  <Button
                    
                    sx={{ m: 1 }}
                    variant="contained">
                    Fechar
                  </Button>
                  <Button
                    
                    sx={{ m: 1 }}
                    variant="contained">
                    Abrir e Fechar 
                  </Button>
                </Box>


                
                
  
  
                
              </Card>
            </Container>
          </Container>
        </MainContent>
  
      </>
    );
  }
  
  export default SGHome;