import { Link as RouterLink } from 'react-router-dom';
import {
    Tooltip,
    Divider,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    IconButton,
    Typography,
    useTheme

} from '@mui/material';
import HiveTwoToneIcon from '@mui/icons-material/HiveTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import moment from 'moment';
import { useQuery, Query, projects, equipments } from 'src/gqless';
import 'moment/locale/pt-br'
import { useParams } from 'react-router';
import SimpleDialog from 'src/components/Dialog/simpleDialog';
import AddParameters from './AddParameters';
import { useState } from 'react';


const EquipmentTable = (props) => {

    const theme = useTheme();
    const params = useParams();
    const filter = {};
    const [openParamsModal, setOpenParamsModal] = useState(false);
    if (params.projectId || props.projectId) {
        filter["project"] = params.projectId || props.projectId;
    }
    const query: Query = useQuery({
        suspense: true,
        staleWhileRevalidate: true,
        onError(error) { },
    });
    return (
        <>
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
                                <TableCell>Tipo</TableCell>
                                <TableCell>Codigo</TableCell>
                                <TableCell>Controlador</TableCell>
                                <TableCell>Iniciado Em</TableCell>
                                <TableCell>Modelo</TableCell>
                                <TableCell>Volume</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {query.equipmentMany({ limit: 10, filter }).map((rows: equipments, index) => {
                                return (
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
                                                {
                                                    rows.project ?
                                                        query.projectById({ _id: rows.project }).projeto
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
                                                {
                                                    (rows.type ? rows.type : "").toString().replace("CONTROLLER", "CONTROLADOR").replace("DIGEST", "REATOR")
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
                                                {rows.code}
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
                                                {rows.controlador ?
                                                    query.equipmentById({ _id: rows.controlador }).code
                                                    : ""}
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
                                                {rows.iniciadoEm ? moment(new Date(rows.iniciadoEm)).locale("pt-br").format("DD/MM/YYYY") : ""}
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
                                                {rows.modelo}
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
                                                {rows.volume}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Tooltip title="Parametros" arrow >
                                                <IconButton
                                                    sx={{
                                                        '&:hover': {
                                                            background: theme.colors.primary.lighter
                                                        },
                                                        color: theme.palette.primary.main
                                                    }}
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => setOpenParamsModal(true)}
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
                                                    to={`/equipments/${rows._id}`}
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
                                                    to={`/equipments/delete/${rows._id}`}
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
            </Card>
            <SimpleDialog component={<AddParameters equipmentId={1} />}
                open={openParamsModal}
                title={'Editar Parametros'}
                onClose={() => setOpenParamsModal(false)}
            />
        </>
    )
}

export default EquipmentTable;