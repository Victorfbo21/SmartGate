import { Link as RouterLink } from 'react-router-dom';
import {
    Tooltip,
    Divider,
    Box,
    Card,
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableContainer,

    Typography,

    Button,
    useTheme,

} from '@mui/material';

import HiveTwoToneIcon from '@mui/icons-material/HiveTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useQuery, Query, projects } from 'src/gqless';




const OrgTable = () => {
    const theme = useTheme();
    const query: Query = useQuery({
        suspense: true,
        staleWhileRevalidate: true,
        onError(error) { },
    });
    return (
        <Card>
            <Divider />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                // checked={ }
                                // indeterminate={ }
                                // onChange={ }
                                />
                            </TableCell>
                            <TableCell>Cidade</TableCell>
                            <TableCell>Orgão</TableCell>
                            <TableCell>Nome Contato</TableCell>
                            <TableCell>Telefone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {query.orgMany({ limit: 10 }).map((rows, index) => (
                            <TableRow
                                key={"row" + index}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                    >
                                        {rows.cidade}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                    >
                                        {rows.org}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                    >
                                        {rows.nome}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                    >
                                        {rows.telefone}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                    >
                                        {rows.email}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Tooltip title="Lista de Projetos" arrow >
                                        <IconButton
                                            sx={{
                                                '&:hover': {
                                                    background: theme.colors.primary.lighter
                                                },
                                                color: theme.palette.primary.main
                                            }}
                                            color="inherit"
                                            size="small"
                                            component={RouterLink}
                                            to={`/projects/org/${rows._id}`}
                                        >
                                            <HiveTwoToneIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="Editar" arrow >
                                        <IconButton
                                            sx={{
                                                '&:hover': {
                                                    background: theme.colors.primary.lighter
                                                },
                                                color: theme.palette.primary.main
                                            }}
                                            color="inherit"
                                            size="small"
                                            component={RouterLink}
                                            to={`/orgs/${rows._id}`}
                                        >
                                            <EditTwoToneIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Excluir" arrow >
                                        <IconButton
                                            sx={{
                                                '&:hover': {
                                                    background: theme.colors.primary.lighter
                                                },
                                                color: theme.palette.primary.main
                                            }}
                                            color="inherit"
                                            size="small"
                                            component={RouterLink}
                                            to={`delete/${rows._id}`}
                                        >
                                            <DeleteTwoToneIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box p={2}>
                {/* <TablePagination
                                        component="div"
                                        count={}
                                        onPageChange={}
                                        onRowsPerPageChange={}
                                        page={}
                                        rowsPerPage={}
                                        rowsPerPageOptions={[5, 10]}
                                    /> */}
            </Box>
            <Box p={2}>
                <Button variant="contained">
                    Novo
                </Button>
            </Box>


        </Card>
    )
}

export default OrgTable;