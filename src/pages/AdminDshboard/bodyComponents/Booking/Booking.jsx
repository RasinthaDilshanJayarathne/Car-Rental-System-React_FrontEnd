import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { styleSheet } from "../Booking/styles";
import logo from "../../../../assets/img/logo.png";
import { Component } from 'react';
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
import BookingService from '../../../../Service/BookingService'

class Booking extends Component {
    constructor(props) {
        super(props)
        this.state = {

            formData: {
                rentId: "",
                pickUpDate: "",
                pickUpTime: "",
                returnDate: "",
                driverRequestingType: "",
                location: "",
                customer: {
                    id: '',
                    nic: '',
                    name: {
                        firstName: '',
                        lastName: ''
                    },
                    licenseNo: '',
                    address: '',
                    contactNo: '',
                    email: '',
                    user: {
                        userName: '',
                        password: '',
                        role: ''
                    }
                },
                bookingDetails: {
                    vehicleId: '',
                    rentId: '',
                    vehicle: {
                        vehicleId: '',
                        registrationNo: '',
                        vehicleBrand: '',
                        numberOfPassengers: '',
                        color: '',
                        vehicleType: '',
                        fuelType: '',
                        transmissionType: '',
                        freeMileage: {
                            dailyMileage: '',
                            monthlyMileage: ''
                        },
                        priceRate: {
                            dailyRate: '',
                            monthlyRate: ''
                        },
                        vehicleAvailabilityType: '',
                        damageFee: '',
                        lastServiceMileage: '',
                        vehicleServiceMileage: '',
                        pricePerExtraKM: '',
                        totalVehicle: ''
                    },
                },
                driverSchedules: {
                    driverId: '',
                    rentId: '',
                    driver: {
                        id: '',
                        nic: '',
                        name: {
                            firstName: '',
                            lastName: ''
                        },
                        licenseNo: '',
                        address: '',
                        contactNo: '',
                        email: '',
                        user: {
                            userName: '',
                            password: '',
                            role: ''
                        },
                        driverAvailability: ''
                    }
                },
            },
            data:[],
        }
    }

    loadData = async () => {
        let res = await BookingService.fetchBooking();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <Grid className={classes.bookingPanel}>
                        <img src={logo} alt="" style={{ width: '150px', marginTop: '-10px' }} />
                        <Typography variant="h5" style={{ marginLeft: '30px', color: '#000d6b' }}>
                            BOOK A CAR / BOOKING DETAILS
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.subContainer}>

                    <Grid className={classes.table2}>
                        <Typography variant="h5" style={{ marginLeft: '30px', color: '#95a5a6', marginTop: '10px' }}>
                            VIEW ALL BOOKING DETAILS
                        </Typography>
                        <TableContainer component={Paper} style={{ height: '77vh', width: '80vw', backgroundColor: '#eeeff1', marginTop: '-100px' }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Rental Id</TableCell>
                                        <TableCell align="left">Pick-Up-Date</TableCell>
                                        <TableCell align="left">Pick-Up-Time</TableCell>
                                        <TableCell align="left">Return Date</TableCell>
                                        <TableCell align="left">Location</TableCell>
                                        <TableCell align="left">Driver Requesting Type</TableCell>
                                        <TableCell align="left">Driver Id</TableCell>
                                        <TableCell align="left">Driver Name</TableCell>
                                        <TableCell align="left">Customer Id</TableCell>
                                        <TableCell align="left">Customer Name</TableCell>
                                        <TableCell align="left">Vehicle Id</TableCell>
                                        <TableCell align="left">Damage Fee</TableCell>
                                        <TableCell align="left">Action</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {/* {
                                        this.state.data.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left">{row.rentId}</TableCell>
                                                <TableCell align="left">{row.pickUpDate}</TableCell>
                                                <TableCell align="left">{row.pickUpTime}</TableCell>
                                                <TableCell align="left">{row.returnDate}</TableCell>
                                                <TableCell align="left">{row.location}</TableCell>
                                                <TableCell align="left">{row.driverRequestingType}</TableCell> 
                                                <TableCell align="left">{row.driverSchedules.driver.id}</TableCell>
                                                <TableCell align="left">{row.driverSchedules.driver.name}</TableCell>
                                                <TableCell align="left">{row.customer.id}</TableCell>
                                                <TableCell align="left">{row.customer.name}</TableCell>
                                                <TableCell align="left">{row.bookingDetails.vehicle.damageFee}</TableCell>
                                                <TableCell align="left">
                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.updateDriver(row);
                                                            }}
                                                        >
                                                            <EditIcon color="primary" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.deleteDriver(row.id)
                                                            }}
                                                        >
                                                            <DeleteIcon color="error" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        ))} */}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styleSheet)(Booking);