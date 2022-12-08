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
import { toast } from 'react-toastify'

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

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (auth && auth.user) {
    navigate('/dashboard')
  }

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)


    if (!email || !password) {
      toast.error('Preencha todos os campos!')
      return
    }

    const isLogged: any = await auth.signIn(email, password);
    if (isLogged) {
      navigate('dashboard');

    } else {
      toast.error('Email ou senha incorretos!')
    }
    setLoading(false)

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
                <img alt="logo" width={400} src="/static/images/logo/biomethane.jpeg" />
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ my: 2, mb: 4 }}
                >
                  Bem vindo! Para começar insira seu e-mail e senha, por favor.
                </Typography>
              </Box>
              <FormControl variant="outlined"
                fullWidth
                sx={{
                  '& .MuiTextField-root': { m: 1 }
                }}>

                <TextField
                  type="email"
                  placeholder="Email"
                  label="Email"
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  type="password"
                  placeholder="Senha"
                  label="Senha"
                  onChange={e => setPassword(e.target.value)}

                />

              </FormControl>

              <Divider sx={{ my: 2 }}></Divider>


              {loading ?
                <CircularProgress size={64} disableShrink thickness={3} />
                :
                <>
                  <Button variant="outlined" sx={{ m: 1 }}>
                    Esqueci a Senha
                  </Button>
                  <Button
                    onClick={handleLogin}
                    sx={{ m: 1 }}
                    variant="contained">
                    Acessar
                  </Button>
                </>
              }
            </Card>
          </Container>
        </Container>
      </MainContent>

    </>
  );
}

export default Login;