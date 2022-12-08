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
import { Link as RouterLink } from 'react-router-dom';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

import OrgTable from './components/OrgTable';
import { Suspense } from 'react';


function Orgs() {



    return (
        <>
            <Helmet>
                <title>Orgãos</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader title="Orgãos" msg="Esta é a lista de Orgãos"
                    element={(<Button
                        sx={{ mt: { xs: 2, md: 0 } }}
                        variant="contained"
                        startIcon={<AddTwoToneIcon fontSize="small" />}
                        component={RouterLink}
                        to="add"
                    >
                        Orgão
                    </Button>)} />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <Card >
                            <Suspense fallback={<CircularProgress size={64} disableShrink thickness={3} />} >
                                <OrgTable />
                            </Suspense>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default Orgs;