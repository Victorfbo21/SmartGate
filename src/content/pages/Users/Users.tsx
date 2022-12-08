import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
    Card,
    Button,
    Container,
    Grid,
    CircularProgress
} from '@mui/material';
import Footer from 'src/components/Footer';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

import UserTable from './components/UserTable';
import { Suspense } from 'react';


const Users = ({ setAcao, refresh }) => {

    return (
        <>
            <Helmet>
                <title>Usuários</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader title="Usuários" msg="Esta é a lista de Usuários"
                    element={(<Button
                        sx={{ mt: { xs: 2, md: 0 } }}
                        variant="contained"
                        startIcon={<AddTwoToneIcon fontSize="small" />}
                        onClick={() => {
                            //navigate('/users/add');
                            setAcao({ acao: 1, editPassword: false, refresh: false });
                        }} >
                        Usuário
                    </Button>)} />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}>
                    <Grid item xs={12}>
                        <Card >
                            <Suspense fallback={<CircularProgress size={64} disableShrink thickness={3} />} >
                                <UserTable setAcao={setAcao} refresh={refresh} />
                            </Suspense>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default Users;