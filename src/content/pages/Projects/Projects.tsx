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

import ProjectTable from './components/ProjectTable';
import { Suspense } from 'react';


const Projects = ({ setAcao, refresh }) => {

    return (
        <>
            <Helmet>
                <title>Projetos</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader title="Projetos" msg="Esta é a lista de Projetos"
                    element={(<Button
                        sx={{ mt: { xs: 2, md: 0 } }}
                        variant="contained"
                        startIcon={<AddTwoToneIcon fontSize="small" />}
                        onClick={() => {
                            setAcao({ acao: 1, edit: false, refresh: false });
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
                                <ProjectTable setAcao={setAcao} refresh={refresh} edit={false} equipments={false} charts={false} />
                            </Suspense>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default Projects;