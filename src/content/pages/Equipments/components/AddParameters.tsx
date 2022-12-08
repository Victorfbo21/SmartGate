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
    useTheme,
    List,
    Grid,
    Container,
    Button

} from '@mui/material';
import HiveTwoToneIcon from '@mui/icons-material/HiveTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import moment from 'moment';
import { useQuery, Query, projects, equipments } from 'src/gqless';
import 'moment/locale/pt-br'
import { useParams } from 'react-router';
import AutoField, { IAutoFieldParams } from 'src/components/Forms/AutoField';
import { useReducer, useState } from 'react';

const fieldsName: (IAutoFieldParams | string)[] = [
    "nome",
    { field: "paramCode", label: "Código", width: 100 },
    { field: "unidadeMedida", label: "Medida", width: 100 },
    { field: "max", label: "Máx", width: 100 },
    { field: "min", label: "Mín", width: 100 },
    { field: "order", label: "Ordem", width: 100 }
]
const formReducer = (state, event) => {
    if (!event["target"]) {
        return { ...event }
    }
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const AddParameters = ({ equipmentId }) => {
    const [items, setItems] = useState([])
    const query = useQuery();
    const theme = useTheme();
    const [formData, setFormData] = useReducer(formReducer, {});

    const addItems = () => {
        const newRow = fieldsName.map((field) => {
            const fieldKey: any = typeof field === "string" ? field : field.field;
            return <AutoField key={fieldKey} field={field} onChange={setFormData} value={formData[fieldKey]} />
        })
        const newItems = [...items]
        newItems.push(
            <Box key={"box-" + items.length}>
                <Box sx={{
                    display: "flex",
                    p: 1
                }}>
                    {newRow}
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
                        >
                            <DeleteTwoToneIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Box>

            </Box>
        )
        setItems(newItems);

    }


    return (

        <>{items}
            <Box
                display="grid"
            >
                <Tooltip title="Novo Parametro" arrow sx={{ display: 'flex-end' }} >
                    <Button
                        variant="contained"
                        sx={{
                            m: 2,
                            '&:hover': {
                                background: theme.colors.primary.lighter
                            },
                            color: theme.palette.primary.dark
                        }}
                        color="inherit"
                        size="small"
                        onClick={addItems}
                    >
                        + Adicionar
                    </Button>
                </Tooltip>
            </Box>
        </>
    )
}

export default AddParameters;