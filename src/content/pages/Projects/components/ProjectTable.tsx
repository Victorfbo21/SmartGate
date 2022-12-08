import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
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
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import { Mutation, Query, useMutation, useQuery, useRefetch, projects } from 'src/gqless';
import ConfirmDialog from 'src/components/Dialog/ConfirmDialog';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'

const ProjectTable = ({ edit, equipments, charts, setAcao, refresh }) => {
    const navigate = useNavigate();

    const theme = useTheme();
    const refetch = useRefetch();
    const query: Query = useQuery({
        suspense: true,
        staleWhileRevalidate: true,
        onError(error) { },
    });

    const [projectDelete, setIdProjectMenuDelete] = useState({ id: null, openDialogDelete: false })

    const handleClickMenuDelete = (projectId) => {
        setIdProjectMenuDelete({ id: projectId, openDialogDelete: true })
    }

    const handleCloseDialogDelete = () => {
        setIdProjectMenuDelete({ id: null, openDialogDelete: false })
    }

    let getRows = () => {
        return query.projectMany({ limit: 10 }).map((rows, index) => {
            return {
                index,
                _id: rows._id,
                projeto: rows.projeto,
                org: rows.org,
                cidade: rows.cidade,
                nome: rows.nome,
                telefone: rows.telefone,
                email: rows.email,
            }
        })
    }

    const [softDelete, { isLoading, data, error }] = useMutation(
        (mutation: Mutation, args: any) => {
            const response = mutation.userDelete({ _id: args.id });

            const id = response.record._id;
            if (id) {
                toast.success('Projeto excluído com successo!');
            }
        },
        {
            onCompleted() {
                console.log('Completed');
                refetch(() => getRows());
            },
            onError(error) {
                console.log('Error');
                refetch(() => getRows());
                toast.error('Erro ao excluir: ' + error?.message);
            },
            refetchQueries: [getRows()],
            awaitRefetchQueries: true,
            suspense: false,
        }
    );

    async function handleDelete(projectToDelete) {
        try {
            if (projectToDelete?.id === '') {
                toast.error('Houve algum erro, tente novamente!')
            }
            try {
                softDelete({ args: { id: projectToDelete.id } })
            } catch (err) {
                console.error(err)
            }
        } catch (error) {
            toast.error('Houve algum erro, tente novamente!')
        }
    }



    const params = useParams();
    const filter = {}
    if (params.orgId) {
        filter["org"] = params.orgId;
    }

    useEffect(() => {
        if (refresh) {
            refetch(getRows);
        }
    }, [refresh]);
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
                            <TableCell>Projeto</TableCell>
                            <TableCell>Orgão</TableCell>
                            <TableCell>Cidade</TableCell>
                            <TableCell>Nome Contato</TableCell>
                            <TableCell>Telefone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {query.projectMany({ limit: 10, filter }).map((rows: projects, index) => {
                            return (
                                <TableRow
                                    key={"row" + index}
                                    onClick={() => {
                                        navigate(`/projects/${rows._id}`);
                                    }}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    hover
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
                                            {rows.projeto}
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
                                            {
                                                rows.org ?
                                                    query.orgById({ _id: rows.org }).org
                                                    : ""
                                            }
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
                                        <Tooltip title="Gráficos" arrow >
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        background: theme.colors.primary.lighter
                                                    },
                                                    color: theme.palette.primary.main
                                                }}
                                                color="inherit"
                                                size="small"
                                                //component={RouterLink}
                                                //to={`/projects/charts/${rows._id}`}
                                                onClick={() => {
                                                    setAcao({ acao: 1, charts: true, equipments: false, edit: false, id: rows._id, refresh: true });
                                                }}
                                            >
                                                <BarChartTwoToneIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Lista de Reatores" arrow >
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        background: theme.colors.primary.lighter
                                                    },
                                                    color: theme.palette.primary.main
                                                }}
                                                color="inherit"
                                                size="small"
                                                //component={RouterLink}
                                                // to={`/equipments/project/${rows._id}`}
                                                onClick={() => {
                                                    setAcao({ acao: 2, charts: false, equipments: true, edit: false, id: rows._id, refresh: true });
                                                }}
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
                                                //component={RouterLink}
                                                // to={`/projects/${rows._id}`}
                                                onClick={() => {
                                                    setAcao({ acao: 3, charts: false, equipments: false, edit: true, id: rows._id, refresh: true });
                                                }}
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
                                                onClick={(e) => handleClickMenuDelete(rows._id)}
                                            >
                                                <DeleteTwoToneIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>

                            )
                        })}
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

            <ConfirmDialog
                open={projectDelete.openDialogDelete}
                onClose={(value) => {
                    if (value)
                        handleDelete(projectDelete);
                    handleCloseDialogDelete();
                }}
                title="Excluir Projeto"
                text="Deseja realmente excluir esse projeto?"
            />

        </Card>
    )
}

export default ProjectTable;