import { useRef, useState } from 'react';
import {
    Button,
    Box,
    Menu,
    alpha,
    MenuItem,
    Typography,
    styled,
    useTheme
} from '@mui/material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Chart from 'react-apexcharts';
import { useSubscription } from '../../gqless';

export interface IChartProps {
    series: {
        name: string;
        data: number[];
    }[];
    labels: string[];
    title: string;
    subtitle?: String;
    device: string;
    code: number;
    color?: string;
}



const DotPrimary = styled('span')(
    ({ theme }) => `
    border-radius: 22px;
    background: ${theme.palette.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);
const periods = [
    {
        value: 'today',
        text: 'Hoje'
    },
    {
        value: 'yesterday',
        text: 'Ontem'
    },
    {
        value: 'last_month',
        text: '30 Dias'
    },
    {
        value: 'last_year',
        text: '90 Dias'
    }
];
const tipos = [
    {
        value: 'bar',
        text: 'Barras'
    },
    {
        value: 'area',
        text: 'Area'
    }
];

const cores = [
    {
        value: 'success',
        text: 'Ligth'
    },
    {
        value: 'secondary',
        text: 'Dark'
    },
    {
        value: 'primary',
        text: 'Blue'
    },
    {
        value: 'warning',
        text: 'Orange'
    }
    ,
    {
        value: 'info',
        text: 'Navy'
    },
    {
        value: 'error',
        text: 'Red'
    },
];
const realtimeData: {
    name: string;
    data: number[];
}[] = [];

function HistoricalChart(props: IChartProps) {
    const theme = useTheme();
    const actionRef1 = useRef(null);
    const actionRef2 = useRef(null);
    const actionRef3 = useRef(null);
    const [openPeriod, setOpenMenuPeriod] = useState(false);
    const [openCores, setOpenMenuCores] = useState(false);
    const [openTipos, setOpenMenuTipos] = useState(false);
    const [period, setPeriod] = useState(periods[3].text);
    const [cor, setCor] = useState();
    const [tipo, setTipo] = useState(tipos[0].text);
    const [realTime, setRealtime] = useState(false);
    const setedColor = cor ? cores.filter(x => x.text === cor)[0].value : props.color;
    const setedTipo = tipos.filter(x => x.text === tipo)[0].value;
    let realtimeData = [];
    if (props?.series[0].data[0] !== undefined && realtimeData.length <= 0) {
        realtimeData.push(...props.series);
    }
    const { DataSensorCreated } = useSubscription();
    const newValue = DataSensorCreated({ device: props.device, code: Number(props.code), limit: 25 });

    if (newValue && realTime) {

        if (newValue.data.length && newValue.data[0].value) {
            console.log(newValue.data[0].value, newValue.data[0].createdAt, "====", newValue.data[24].createdAt, newValue.data[24].value)
            realtimeData = [{
                name: props.subtitle,
                data: newValue.data.map(x => x.value)
            }];
        }
    }

    const chartOptions = {
        chart: {
            background: 'transparent',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                columnWidth: '45%'
            }
        },
        colors: [cor ? theme.palette[setedColor].main : props.color],
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1
        },
        theme: {
            mode: theme.palette.mode
        },
        stroke: {
            show: true,
            width: 3,
            colors: ['transparent']
        },
        legend: {
            show: false
        },
        //labels: props.lables,
        grid: {
            strokeDashArray: 5,
            borderColor: theme.palette.divider
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: theme.palette.text.secondary
                }
            }
        },
        yaxis: {
            tickAmount: 6,
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: theme.palette.text.secondary
                }
            }
        },
        tooltip: {
            x: {
                show: false
            },
            marker: {
                show: false
            },
            y: {
                formatter: function (val) {
                    return val;
                }
            },
            theme: 'dark'
        }

    };
    const chartData = realtimeData;

    const changeTime = () => {
        setRealtime(!realTime);
    }

    return (
        <Box>
            <Box
                mb={2}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant="h4">{props.title}</Typography>
                <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    ref={actionRef1}
                    onClick={() => setOpenMenuPeriod(true)}
                    endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
                >
                    {period}
                </Button>
                <Menu

                    anchorEl={actionRef1.current}
                    onClose={() => setOpenMenuPeriod(false)}
                    open={openPeriod}

                    // anchorOrigin={{
                    //     vertical: 'bottom',
                    //     horizontal: 'right'
                    // }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    {periods.map((_period) => (
                        <MenuItem
                            key={_period.value}
                            onClick={() => {
                                setPeriod(_period.text);
                                setOpenMenuPeriod(false);
                            }}
                        >
                            {_period.text}
                        </MenuItem>
                    ))}
                </Menu>
                <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    ref={actionRef2}
                    onClick={() => setOpenMenuCores(true)}
                    endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
                >
                    {cor}
                </Button>
                <Menu
                    anchorEl={actionRef2.current}
                    onClose={() => setOpenMenuCores(false)}
                    open={openCores}

                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    {cores.map((corr: any) => (
                        <MenuItem
                            key={corr.value}
                            onClick={() => {
                                setCor(corr?.text);
                                setOpenMenuCores(false);
                            }}
                        >
                            {corr.text}
                        </MenuItem>
                    ))}
                </Menu>
                <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    ref={actionRef3}
                    onClick={() => setOpenMenuTipos(true)}
                    endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
                >
                    {tipo}
                </Button>
                <Menu
                    anchorEl={actionRef3.current}
                    onClose={() => setOpenMenuTipos(false)}
                    open={openTipos}

                    // anchorOrigin={{
                    //     vertical: 'bottom',
                    //     horizontal: 'right'
                    // }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    {tipos.map((tipo) => (
                        <MenuItem
                            key={tipo.value}
                            onClick={() => {
                                setTipo(tipo.text);
                                setOpenMenuTipos(false);
                            }}
                        >
                            {tipo.text}
                        </MenuItem>
                    ))}
                </Menu>
                {realTime ?
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={changeTime}
                    >
                        Últimas 25 Leituras
                    </Button> :
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={changeTime}
                    >
                        Tempo Real
                    </Button>
                }
            </Box>
            <Box display="flex" alignItems="center" pb={2}>
                {
                    chartData.map((data) => {
                        return (
                            <>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mr: 2
                                    }}
                                >
                                    <DotPrimary />
                                    {data.name}
                                </Typography>
                            </>
                        )
                    })
                }
            </Box>
            {setedTipo === "bar" ?
                <Chart
                    options={chartOptions}
                    series={chartData}
                    type="bar"
                    height={270}
                /> : <Chart
                    options={chartOptions}
                    series={chartData}
                    type="area"
                    height={270}
                />}
        </Box>
    );
}

export default HistoricalChart;