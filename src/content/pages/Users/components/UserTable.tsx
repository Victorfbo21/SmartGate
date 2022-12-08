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
    TableRow,
    TableContainer,
    Typography,
    useTheme
} from '@mui/material';
import HiveTwoToneIcon from '@mui/icons-material/HiveTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SecurityIcon from '@mui/icons-material/Security';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Mutation, Query, useMutation, useQuery, useRefetch } from 'src/gqless';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import ConfirmDialog from 'src/components/Dialog/ConfirmDialog';



const UserTable = ({ setAcao, refresh }) => {
    const theme = useTheme();
    const refetch = useRefetch();
    const query: Query = useQuery({
        suspense: true,
        staleWhileRevalidate: true
    });

    const [userDelete, setIdUserMenuDelete] = useState({ id: null, openDialogDelete: false })

    const handleClickMenuDelete = (userId) => {
        setIdUserMenuDelete({ id: userId, openDialogDelete: true })
    }

    const handleCloseDialogDelete = () => {
        setIdUserMenuDelete({ id: null, openDialogDelete: false })
    }
    let getRows = () => {
        return query.userMany({ limit: 10 }).map((rows, index) => {
            return {
                index,
                _id: rows._id,
                nome: rows.nome,
                email: rows.email,
                telefone: rows.telefone,
                cpf: rows.cpf,
                cep: rows.cep,
            }
        })
    }

    const [softDelete, { isLoading, data, error }] = useMutation(
        (mutation: Mutation, args: any) => {
            const response = mutation.userDelete({ _id: args.id });

            const id = response.record._id;
            if (id) {
                toast.success('Usuário excluído com successo!');
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

    async function handleDelete(userToDelete) {
        try {
            if (userToDelete?.id === '') {
                toast.error('Houve algum erro, tente novamente!')
            }
            try {
                softDelete({ args: { id: userToDelete.id } })
            } catch (err) {
                console.error(err)
            }
        } catch (error) {
            toast.error('Houve algum erro, tente novamente!')
        }
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
                                />
                            </TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Telefone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>CPF</TableCell>
                            <TableCell>CEP</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getRows().map(rows => (
                            <TableRow
                                key={"row" + rows.index}
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
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                    >
                                        {rows.cpf}
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
                                        {rows.cep}
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
                                            to={`/projects/user/${rows._id}`}
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
                                            onClick={() => {
                                                setAcao({ acao: 2, editPassword: false, id: rows._id, refresh: true });
                                            }}
                                        >
                                            <EditTwoToneIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Alterar Senha" arrow >
                                        <IconButton
                                            sx={{
                                                '&:hover': {
                                                    background: theme.colors.primary.lighter
                                                },
                                                color: theme.palette.primary.main
                                            }}
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setAcao({ acao: 1, editPassword: true, refresh: false, id: rows._id });
                                            }}
                                        >
                                            <SecurityIcon fontSize="small" />
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

            </Box>
            <ConfirmDialog
                open={userDelete.openDialogDelete}
                onClose={(value) => {
                    if (value)
                        handleDelete(userDelete);
                    handleCloseDialogDelete();
                }}
                title="Excluir Usuário"
                text="Deseja realmente excluir esse usuário?"
            />


        </Card>
    )
}

export default UserTable;