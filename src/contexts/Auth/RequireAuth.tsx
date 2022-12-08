import { useContext } from "react";
import { toast } from "react-toastify";
import { useQuery, resolved } from "src/gqless";
import { Login } from "../../content/pages/Login";
import { AuthContext } from "./AuthContext";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import PageTitleWrapper from "src/components/PageTitleWrapper";

export function RequireAuth({ children, role }: { children: JSX.Element, role?: string }) {
    const query = useQuery();
    const auth = useContext(AuthContext);
    if (!auth?.user?.email) {
        auth.signOut();
        return <Login />;
    }
    if (role) {
        const user = query.getUserContext;
        const userRole = user ? user["role"] : null;
        if (userRole == role || userRole == "admin") {
            return children;
        } else {

            return (
                <>
                    <PageTitleWrapper>
                        <Typography variant="h3">
                            Acesso Inválido, procure o administrador do sistema!
                        </Typography>
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
                                    <Box p={3}>
                                        <Button
                                            sx={{ mt: { xs: 2, md: 0 }, m: 1 }}
                                            variant="outlined"
                                            component={RouterLink}
                                            to="../"
                                        >
                                            Voltar
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            )
        }
    }
    return children;

}
