import { Component } from "react";
import { styleSheet } from "../Request/styles";
import { withStyles } from "@mui/styles";
import { Grid, Typography } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import logo from "../../../../assets/img/logo.png";

class Request extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;

        function createData(id, email, firstName, lastName, licenNo, contact, nic, address) {
            return { id, email, firstName, lastName, licenNo, contact, nic, address };
        }

        const rows = [
            createData('R00-001', 'rasintha@gmail.com', 'Nimal', 'Perera', 2423452, '071-3123342', '42345124', 'Galle'),
            createData('R00-002', 'rasintha@gmail.com', 'Kamal', 'Gamage', 2373453, '071-3123342', '42345124', 'Colombo'),
            createData('R00-003', 'rasintha@gmail.com', 'Amal', 'Soisa', 2624567, '071-3123342', '42345124', 'Panadura'),
            createData('R00-004', 'rasintha@gmail.com', 'Nadun', 'Hettiarachci', 3053434, '071-3123342', '42345124', 'Matara'),
            createData('R00-005', 'rasintha@gmail.com', 'Wimal', 'Gamage', 3562432, '071-3123342', '42345124', 'Galle'),
            createData('R00-006', 'rasintha@gmail.com', 'Rasintha', 'Perera', 1596756, '071-3123342', '42345124', 'Matara'),
            createData('R00-007', 'rasintha@gmail.com', 'Yasiru', 'Soisa', 237876, '071-3123342', '42345124', 'Panadura'),
            createData('R00-008', 'rasintha@gmail.com', 'Minura', 'Hettiarachci', 2627564, '071-3123342', '42345124', 'Matara'),
            createData('R00-009', 'rasintha@gmail.com', 'Yasidu', 'Soisa', 3055632, '071-3123342', '42345124', 'Colombo'),
            createData('R00-0010', 'rasintha@gmail.com', 'Upali', 'de Silva', 3561233, '071-3123342', '42345124', 'Panadura'),
            createData('R00-0011', 'rasintha@gmail.com', 'Sunil', 'Hettiarachci', 1593546, '071-3123342', '42345124', 'Colombo'),
            createData('R00-0012', 'rasintha@gmail.com', 'Supun', 'Perera', 237978, '071-3123342', '42345124', 'Matara'),
            createData('R00-0013', 'rasintha@gmail.com', 'Kanthi', 'Gamage', 2622345, '071-3123342', '42345124', 'Colombo'),
            createData('R00-0014', 'rasintha@gmail.com', 'Iresha', 'Hettiarachci', 305578, '071-3123342', '42345124', 'Galle'),
            createData('R00-0015', 'rasintha@gmail.com', 'Naduni', 'Perera', 3565673, '071-3123342', '42345124', 'Matara'),
        ];

        return (
            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <img src={logo} alt="" style={{ width: '150px', marginTop: '-10px', marginLeft: '220px' }} />
                    <Typography variant="h5" style={{ marginRight: '250px', color: '#000d6b' }}>
                        BOOK A CAR / MANAGE BOOKING REQUEST
                    </Typography>
                </Grid>
                <Grid className={classes.customerContainer}>
                    <Grid className={classes.table2}>
                        <Typography variant="h5" style={{ marginLeft: '30px', color: '#95a5a6', marginTop: '10px' }}>
                            VIEW ALL BOOKING REQUEST
                        </Typography>
                        <TableContainer component={Paper} style={{ height: '77vh', width: '80vw', backgroundColor: '#eeeff1', marginTop: '-20px' }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Rental Id</TableCell>
                                        <TableCell align="left">Pick-Up-Date</TableCell>
                                        <TableCell align="left">Pick-Up-Time</TableCell>
                                        <TableCell align="left">Return Date</TableCell>
                                        <TableCell align="left">Driver Requesting Type</TableCell>
                                        <TableCell align="left">Driver Id</TableCell>
                                        <TableCell align="left">Driver Name</TableCell>
                                        <TableCell align="left">Customer Id</TableCell>
                                        <TableCell align="left">Customer Name</TableCell>
                                        <TableCell align="left">Driver Id</TableCell>
                                        <TableCell align="left">Customer License No</TableCell>
                                        <TableCell align="left">Customer Address</TableCell>
                                        <TableCell align="left">Customer Contact No</TableCell>
                                        <TableCell align="left">Customer E-mail</TableCell>
                                        <TableCell align="left">Action</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        rows.map((row) => (
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
                                                <TableCell align="left">{row.address}</TableCell>
                                                <TableCell align="left">
                                                    <Tooltip title="Accept">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.updateCustomer(row);
                                                            }}
                                                        >
                                                            <CheckIcon color="primary" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.deleteCustomer(row.id)
                                                            }}
                                                        >
                                                            <DeleteIcon color="error" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Request)