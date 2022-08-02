import { withStyles } from "@mui/styles";
import { styleSheet } from "../Income/styles";
import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logo from "../../../../assets/img/logo.png";
import { Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar, PieChart, Pie } from "recharts";

const daily = [
    { name: "General", Packges: 8500 },
    { name: "Luxury", Packges: 12500 },
    { name: "Premium", Packges: 4000 },
];
const mounthly = [
    { name: "General", Packges: 20000 },
    { name: "Luxury", Packges: 15000 },
    { name: "Premium", Packges: 100000 },
];

function createData(id, email, firstName, lastName, licenNo,a,b,c) {
    return { id, email, firstName, lastName, licenNo,a,b,c };
}

const rows = [
    createData('V00-001', 213,133,343,434,3434,2423,756),
    createData('V00-002', 23,1231,433,564,76,878,879),
    createData('V00-003', 667,8678,6458,6786,3245,899,86564),
    createData('V00-001', 213,133,343,434,3434,2423,756),
    createData('V00-002', 23,1231,433,564,76,878,879),
    createData('V00-003', 667,8678,6458,6786,3245,899,86564),
];


class Income extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <Grid className={classes.bookingPanel}>
                        <img src={logo} alt="" style={{ width: '150px', marginTop: '-10px' }} />
                        <Typography variant="h5" style={{ marginLeft: '30px', color: '#000d6b' }}>
                            BOOK A CAR / SUMMERY OF INCOME
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.subContainer}>
                    <Grid className={classes.chart}>
                        <Grid className={classes.chart1}>
                            <TableContainer component={Paper} style={{ height: '39vh',marginLeft:'5px', width: '82vw', backgroundColor: '#eeeff1' }}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Vehicle</TableCell>
                                            <TableCell align="left">Jan</TableCell>
                                            <TableCell align="left">Feb</TableCell>
                                            <TableCell align="left">Mar</TableCell>
                                            <TableCell align="left">Apr</TableCell>
                                            <TableCell align="left">May</TableCell>
                                            <TableCell align="left">Jun</TableCell>
                                            <TableCell align="left">Jul</TableCell>
                                            <TableCell align="left">Aug</TableCell>
                                            <TableCell align="left">Sep</TableCell>
                                            <TableCell align="left">Oct</TableCell>
                                            <TableCell align="left">Nov</TableCell>
                                            <TableCell align="left">Dec</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left">{row.id}</TableCell>
                                                <TableCell align="left">{row.email}</TableCell>
                                                <TableCell align="left">{row.firstName}</TableCell>
                                                <TableCell align="left">{row.lastName}</TableCell>
                                                <TableCell align="left">{row.licenNo}</TableCell>
                                                <TableCell align="left">{row.contact}</TableCell>
                                                <TableCell align="left">{row.nic}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid className={classes.chart1}>
                            <TableContainer component={Paper} style={{ height: '39vh', marginLeft:'5px',width: '82vw', backgroundColor: '#eeeff1' }}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Vehicle</TableCell>
                                            <TableCell align="left">Sun</TableCell>
                                            <TableCell align="left">Mon</TableCell>
                                            <TableCell align="left">Tue</TableCell>
                                            <TableCell align="left">Wed</TableCell>
                                            <TableCell align="left">The</TableCell>
                                            <TableCell align="left">Fri</TableCell>
                                            <TableCell align="left">Sat</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left">{row.id}</TableCell>
                                                <TableCell align="left">{row.email}</TableCell>
                                                <TableCell align="left">{row.firstName}</TableCell>
                                                <TableCell align="left">{row.lastName}</TableCell>
                                                <TableCell align="left">{row.licenNo}</TableCell>
                                                <TableCell align="left">{row.c}</TableCell>
                                                <TableCell align="left">{row.a}</TableCell>
                                                <TableCell align="left">{row.b}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid className={classes.incomes}>
                        <Grid className={classes.chart2}>
                            <Typography variant="h6" gutterBottom component="div" style={{ textAlign: 'center', marginTop: '-10px', color: '#7f8c8d' }}>Summary Of Mounthly</Typography>
                            <BarChart
                                style={{ textAlign: 'center', marginBottom: '180px' }}
                                width={600}
                                height={300}
                                data={mounthly}

                                barSize={20}
                            >
                                <XAxis
                                    dataKey="name"
                                    scale="point"
                                    padding={{ left: 10, right: 10 }}
                                />

                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="Packges" fill="#f39c12" background={{ fill: "#eee" }} />
                            </BarChart>
                        </Grid>
                        <Grid className={classes.chart3}>
                            <Typography variant="h6" gutterBottom component="div" style={{ textAlign: 'center', marginBottom: '10px', color: '#7f8c8d' }}>Summary Of Daily</Typography>
                            <BarChart
                                width={600}
                                height={300}
                                data={daily}

                                barSize={20}
                            >
                                <XAxis
                                    dataKey="name"
                                    scale="point"
                                    padding={{ left: 10, right: 10 }}
                                />

                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="Packges" fill="#8884d8" background={{ fill: "#eee" }} />
                            </BarChart>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Income)