import { withStyles } from "@mui/styles";
import { styleSheet } from "../DriverShedule/styles";
import { Component } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logo from "../../../../assets/img/logo.png";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DatePicker from '../../../../common/DatePicker/index'

function createData(id, email, firstName, lastName, licenNo, contact, nic, address) {
    return { id, email, firstName, lastName, licenNo, contact, nic, address };
}

const rows = [
    createData('DR00-001', 'YES', 'Nimal', 'Perera', 2423452, '071-3123342', '42345124', 'Galle'),
    createData('DR00-002', 'NO', 'Kamal', 'Gamage', 2373453, '071-3123342', '42345124', 'Colombo'),
    createData('DR00-003', 'NO', 'Amal', 'Soisa', 2624567, '071-3123342', '42345124', 'Panadura'),
    createData('DR00-004', 'YES', 'Nadun', 'Hettiarachci', 3053434, '071-3123342', '42345124', 'Matara'),
    createData('DR00-005', 'YES', 'Wimal', 'Gamage', 3562432, '071-3123342', '42345124', 'Galle'),
    createData('DR00-006', 'NO', 'Amal', 'Soisa', 2624567, '071-3123342', '42345124', 'Panadura'),
    createData('DR00-007', 'YES', 'Nadun', 'Hettiarachci', 3053434, '071-3123342', '42345124', 'Matara'),
    createData('DR00-008', 'YES', 'Wimal', 'Gamage', 3562432, '071-3123342', '42345124', 'Galle'),
];

class DriverShedule extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid className={classes.container}>
                    <Grid className={classes.searchBar}>
                        <Grid className={classes.bookingPanel}>
                            <img src={logo} alt="" style={{ width: '150px', marginTop: '-10px' }} />
                            <Typography variant="h5" style={{ marginLeft: '30px', color: '#000d6b' }}>
                                BOOK A CAR / DRIVER MANAGE
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.details}>
                        <Grid className={classes.textsDetails} >
                            <Grid className={classes.texts}>
                                <TextField id="outlined-basic" label="Driver Id" variant="outlined" style={{ margin: '10px', width: '250px' }} />
                                <TextField id="outlined-basic" label="Driver Name" variant="outlined" style={{ margin: '10px', width: '250px' }} />
                                <TextField id="outlined-basic" label="Vehicle Id" variant="outlined" style={{ margin: '10px', width: '250px' }} />
                                <TextField id="outlined-basic" label="Vehicle Name" variant="outlined" style={{ margin: '10px', width: '250px' }} />
                                <Grid style={{ margin: '10px', width: '250px', marginLeft: '10px'}}>
                                    <DatePicker id="outlined-basic" label="Pick-Up-Date" variant="outlined"/>
                                </Grid>
                                <Grid style={{ margin: '10px', width: '250px'}} >
                                    <DatePicker id="outlined-basic" label="Pick-Up-Time" variant="outlined"/>
                                </Grid>
                                <TextField id="outlined-basic" label="Location" variant="outlined" style={{ margin: '10px', width: '250px' }} />
                                <Button
                                    style={{ margin: '10px', width: '200px', height: '40px', marginLeft: '60px' }}
                                    variant="contained"
                                    //label={this.state.btnLabel}
                                    type="submit" size="small"
                                //color={this.state.btnColor}
                                >Save</Button>
                            </Grid>
                            <Grid className={classes.map}>
                                <iframe style={{ height: '42vh', width: '41vw', borderRadius: '15px' }}
                                    src="https://maps.google.com/maps?q=Srilanka%20Galle&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                                </iframe>
                            </Grid>
                        </Grid>
                        <Grid className={classes.tables}>
                            <TableContainer component={Paper} style={{ height: '39vh', width: '82vw', backgroundColor: '#eeeff1' }}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Driver Id</TableCell>
                                            <TableCell align="left">Driver Name</TableCell>
                                            <TableCell align="left">Vehicle Name</TableCell>
                                            <TableCell align="left">Vehicle Id</TableCell>
                                            <TableCell align="left">Pick-Up-Date</TableCell>
                                            <TableCell align="left">Pick-Up-Time</TableCell>
                                            <TableCell align="left">Location</TableCell>
                                            <TableCell align="left">Action</TableCell>
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
                                                <TableCell align="left">
                                                        <Tooltip title="Edit">
                                                            <IconButton
                                                                onClick={() => {
                                                                    //this.updateVehicle(row);
                                                                    //this.getCarImage();
                                                                }}
                                                            >
                                                                <EditIcon color="primary" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Delete">
                                                            <IconButton
                                                                onClick={() => {
                                                                    //this.deleteVehicle(row.vehicleId)
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
            </>

        )
    }
}

export default withStyles(styleSheet)(DriverShedule)