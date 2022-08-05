import * as React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { styleSheet } from "../Premium/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logo from "../../../../assets/img/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import BackpackIcon from "@mui/icons-material/Backpack";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import SettingsIcon from "@mui/icons-material/Settings";
import Item from './Item';
import premio from "../../../../assets/img/premio.png";
import premio1 from "../../../../assets/img/premio1.png";
import premio2 from "../../../../assets/img/premio2.png";
import Slide from '@mui/material/Slide';
import Carousel from "react-elastic-carousel";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import car1 from "../../../../assets/img/car1.png";
import car2 from "../../../../assets/img/car2.png";
import car3 from "../../../../assets/img/car3.png";
import car4 from "../../../../assets/img/car4.png";
import { render } from '@testing-library/react';
import { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import Autocomplete from '@mui/material/Autocomplete';
import TiimePicker from "../../../../common/TimePicker/index";
import DatePicker from '../../../../common/DatePickerBrowse/index';
import { PhotoCamera } from "@mui/icons-material";
import { format } from "date-fns";
import CustomerService from "../../../../Service/CustomerService";
import VehicleService from "../../../../Service/VehicleService";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

class Premium extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,

            vehicleList: [],

            formData: {
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
            },

            customerBooking: {
                id: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
            },

            vehicleBooking:{
                vehicleId: '',
                vehicleBrand: '',
            },

            driverAvailable:[
                {
                    type: 'AVAILABLE'
                },
                {
                    type: 'NOT_AVAILABLE'
                }
            ],
        }

    }

    loadAllPremiumVehicles = async (vehicleType) => {
        let params = {
            vehicleType: vehicleType
        }
        let res = await VehicleService.getAlllVehicles(params);

        if (res.status === 200) {
            this.setState({
                vehicleList: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    loadAllAvailablePrimiumVehicles = async () => {
        
        let params = {
            pickupDateGenearal: format(new Date(localStorage.getItem("pickUpDate")), 'yyyy-MM-dd'),
            returnDateGenearal: format(new Date(localStorage.getItem("returnDate")), 'yyyy-MM-dd')
        }
        let res = await VehicleService.getAllAvailablePrimiumVehicles(params);

        if (res.status === 200) {
            this.setState({
                vehicleList: res.data.data
            });
        }
        console.log(this.state.vehicleList)    // print customers array

    };

    componentDidMount() {
        this.loadAllPremiumVehicles("PREMIUM");
    }


    handleClickOpen = () => {
        this.loadData()
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
    };

    loadData = async () => {
        //Load Customer Data
        let params = {
            // userName: localStorage.getItem("userName")
            userName :'Dilshan'
        }
        let res = await CustomerService.fetchUser(params);

        let resData = res.data.data;

        if (res.status === 200) {


            this.setState({
                customerBooking: {
                    id: resData.id,
                    name: {
                        firstName: resData.name.firstName,
                        lastName: resData.name.lastName
                    },
                }
            });
        }

        //Load Vehicle Dta
        let paramsVehicle = {
            id: localStorage.getItem("vehicleId")
        }

        let res1 = await VehicleService.fetchVehicleData(paramsVehicle);

        if (res1.status === 200) {
            this.setState({
                vehicleBooking:{
                    vehicleId: res1.data.data.vehicleId,
                    vehicleBrand: res1.data.data.vehicleBrand,
                }
            });
            console.log(res1.data.data)
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid className={classes.container}>
                    <Grid className={classes.searchBar}>
                        <Grid className={classes.bookingPanel}>
                            <img src={logo} alt="" style={{ width: '150px', marginTop: '-10px' }} />
                            <Typography variant="h5" style={{ marginLeft: '30px', color: '#000d6b' }}>
                                BOOK A CAR / NO ADVANCE PAYMENT
                            </Typography>
                        </Grid>
                        <Grid className={classes.bookingPanel}>
                            <TextField id="outlined-basic" label="No Of Pasengers" variant="outlined"
                                style={{ margin: '10px' }} />
                            <TextField id="outlined-basic" label="Location" variant="outlined"
                                style={{ margin: '10px' }} />

                            <Grid style={{ margin: '10px' }}>
                                <DatePicker label="Pick-Up-Date" />
                            </Grid>

                            <Grid style={{ margin: '10px' }}>
                                <DatePicker label="Return-Date" />
                            </Grid>
                            <Button
                                variant="outlined"
                                color='error'
                                style={{
                                    margin: '10px',
                                    height: '52px',
                                    border: '#fe5b3d'
                                }}
                                onClick={this.loadAllAvailablePrimiumVehicles}
                            >
                                SEARCH CAR NOW</Button>
                        </Grid>
                    </Grid>
                    <Grid className={classes.vehicleCart}>
                        {
                            this.state.vehicleList.map((vehicle) => (
                                <Grid className={classes.vehicle}>
                                    <Grid className={classes.vehicleImg}>
                                        <img src={premio2} style={{ width: '420px', marginLeft: '20px' }} />
                                    </Grid>
                                    <Grid className={classes.vehicleDetails}>
                                        <Grid style={{ marginTop: '30px', marginLeft: '10px' }}>
                                            <Typography variant="h5">{vehicle.vehicleBrand}</Typography>
                                            <Typography variant="h6" style={{ color: '#a9a9a5' }}>{vehicle.vehicleType} PACKGE - {vehicle.transmissionType}</Typography>
                                        </Grid>
                                        <Grid className={classes.vehicleDetailsCard}>
                                            <Grid className={classes.vehicleSubDetailsCard}>
                                                <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Daily Rate <span> {vehicle.priceRate.dailyRate}</span> (Rs) </Typography>
                                                <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free <span> {vehicle.freeMileage.dailyMileage}</span> Km
                                                    for a Day</Typography>
                                                <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Price per
                                                    Extra Km <span> {vehicle.pricePerExtraKM}</span> (Rs)</Typography>
                                            </Grid>
                                            <Grid className={classes.vehicleSubDetailsCard}>
                                                <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Monthly Rate
                                                    <span> {vehicle.priceRate.monthlyRate}</span> (Rs)</Typography>
                                                <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free <span> {vehicle.freeMileage.monthlyMileage}</span> Km
                                                    for a Month</Typography>
                                                <Typography style={{
                                                    fontSize: '16px',
                                                    marginLeft: '10px',
                                                    color: '#2c3e50'
                                                }}>Modifications</Typography>
                                            </Grid>
                                            <Grid style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                flexDirection: 'column',
                                                width: '37vw',
                                                height: '5vh',
                                                marginTop: '-70px'
                                            }}>
                                                <Grid style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    flexDirection: 'column',
                                                    width: '6.1vw',
                                                    height: '5vh',
                                                    alignItems: 'left',
                                                    justifyContent: 'center'
                                                }}>
                                                    <PersonIcon style={{ color: '#a9a9a5' }} />
                                                    <Typography style={{ color: '#a9a9a5' }}>4 seats</Typography>

                                                </Grid>
                                                <Grid style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    flexDirection: 'column',
                                                    width: '6.1vw',
                                                    height: '5vh',
                                                    alignItems: 'left',
                                                    justifyContent: 'center'
                                                }}>
                                                    <BackpackIcon style={{ color: '#a9a9a5' }} />
                                                    <Typography style={{ color: '#a9a9a5' }}>2 bags</Typography>
                                                </Grid>
                                                <Grid style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    flexDirection: 'column',
                                                    width: '6.1vw',
                                                    height: '5vh',
                                                    alignItems: 'left',
                                                    justifyContent: 'center'
                                                }}>
                                                    <MeetingRoomIcon style={{ color: '#a9a9a5' }} />
                                                    <Typography style={{ color: '#a9a9a5' }}>4 doors</Typography>
                                                </Grid>
                                                <Grid style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    flexDirection: 'column',
                                                    width: '6.1vw',
                                                    height: '5vh',
                                                    alignItems: 'left',
                                                    justifyContent: 'center'
                                                }}>
                                                    <AddRoadIcon style={{ color: '#a9a9a5' }} />
                                                    <Typography style={{ color: '#a9a9a5' }}>Auto</Typography>
                                                </Grid>
                                                <Grid style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    flexDirection: 'column',
                                                    width: '6.1vw',
                                                    height: '5vh',
                                                    alignItems: 'left',
                                                    justifyContent: 'center'
                                                }}>
                                                    <SettingsIcon style={{ color: '#a9a9a5' }} />
                                                    <Typography style={{ color: '#a9a9a5' }}>A/C</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid className={classes.vehicleBookingBtn}>
                                        <Grid>
                                            <Typography style={{ fontSize: '30px', color: '#fe5b3d' }}> <span> {vehicle.priceRate.monthlyRate}</span>.00 lkr</Typography>
                                            <Typography style={{ fontSize: '20px', color: '#fe5b3d', marginLeft: '20px' }}>Cost Of
                                                Rental
                                            </Typography>
                                            <Grid>
                                                <Button variant="contained" fullWidth style={{ backgroundColor: 'orange', color: 'black', marginTop: '90px', }} onClick={this.handleClickOpen}>
                                                    BOOK NOW
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>

                <Dialog
                    fullWidth
                    maxWidth="sm=8"
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle style={{ textAlign: 'center', fontSize: '30px', color: '#000d6b' }}>{"VEHICLE BOOKING"}</DialogTitle>
                    <DialogContent>
                        <Grid className={classes.popupContainer}>
                            <Grid className={classes.popupPhotoCard}>
                                <Carousel breakPoints={breakPoints}>
                                    <Item className={classes.appItem}>
                                        <Grid style={{
                                            height: '200px', width: '350px', display: 'flex',
                                            flexWrap: 'wrap', flexDirection: 'column',
                                            alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <img src={car1} alt="" style={{ width: '350px', marginTop: '-10px' }} />
                                        </Grid>
                                    </Item>
                                    <Item className={classes.appItem}>
                                        <Grid style={{
                                            height: '200px', width: '350px', display: 'flex',
                                            flexWrap: 'wrap', flexDirection: 'column',
                                            alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <img src={car2} alt="" style={{ width: '450px', marginTop: '-10px', marginLeft: '-120px' }} />
                                        </Grid>
                                    </Item>
                                    <Item className={classes.appItem}>
                                        <Grid style={{
                                            height: '200px', width: '350px', display: 'flex',
                                            flexWrap: 'wrap', flexDirection: 'column',
                                            alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <img src={car3} alt="" style={{ width: '350px', marginTop: '-10px' }} />
                                        </Grid>
                                    </Item>
                                </Carousel>
                            </Grid>
                            <Grid className={classes.popupBookinForm}>
                                <Grid container spacing={-4} rowSpacing={1}>
                                    <TextField style={{ padding: '10px', width: '230px' }}
                                        id="outlined-basic"
                                        label="Rental Id"
                                        variant="outlined"
                                    />

                                    <Grid style={{ padding: '10px', width: '230px' }}>
                                        <DatePicker label="Pick-Up-Date" />
                                    </Grid>

                                    <Grid style={{ padding: '10px', width: '230px' }}>
                                        <TiimePicker maxWidth label="Pick-Up-Time" />
                                    </Grid>

                                    <Grid style={{ padding: '10px', width: '230px' }}>
                                        <DatePicker label="Return-Date" />
                                    </Grid>

                                    <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" label="Location" variant="outlined" />
                                    <Autocomplete
                                        style={{ padding: '10px', width: '230px' }}
                                        onChange={(e, value, r) => {

                                            let formData = this.state.formData
                                            formData.driverAvailable = value.type
                                            this.setState({ formData })

                                        }}
                                        getOptionLabel={
                                            (option) => option.type
                                        }

                                        id="controllable-states-demo"
                                        options={this.state.driverAvailable}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Driver Requesting Type" />}
                                    />

                                    <TextField
                                        style={{ padding: '10px', width: '230px' }}
                                        id="outlined-basic"
                                        label="Driver Id"
                                        variant="outlined"
                                    />
                                    <TextField
                                        style={{ padding: '10px', width: '230px' }}
                                        id="outlined-basic" disabled label="Driver Name"
                                        variant="outlined" />
                                    <TextField
                                        style={{ padding: '10px', width: '230px' }}
                                        id="outlined-basic" 
                                        disabled label="Customer Id"
                                        value={this.state.customerBooking.id}
                                        variant="outlined" 
                                        />
                                    <TextField
                                        style={{ padding: '10px', width: '230px' }}
                                        id="outlined-basic" 
                                        disabled label="Customer Name"
                                        value={this.state.customerBooking.name.firstName}
                                        variant="outlined" 
                                        />
                                    <TextField
                                        style={{ padding: '10px', width: '230px' }}
                                        id="outlined-basic" 
                                        disabled label="Vehicle Id"
                                        value={this.state.vehicleBooking.vehicleId}
                                        variant="outlined" 
                                        />
                                    <TextField
                                        style={{ padding: '10px', width: '230px' }}
                                        id="outlined-basic" 
                                        disabled label="Vehicle Name"
                                        value={this.state.vehicleBooking.vehicleBrand}
                                        variant="outlined" 
                                        />
                                    <TextField
                                        style={{ padding: '10px', width: '230px' }}
                                        id="outlined-basic" label="Damage Fee" variant="outlined" />
                                    <Grid style={{ padding: '10px', width: '210px', border: '1px solid #95a5a6', marginLeft: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>

                                        <input
                                            style={{ display: 'none' }}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file02"
                                            multiple
                                            type="file"
                                        // onChange={(e) => {
                                        //     this.setState({
                                        //         licenseImage: e.target.files[0],
                                        //         licenseView: URL.createObjectURL(e.target.files[0])
                                        //     })
                                        // }}
                                        />

                                        <label htmlFor="contained-button-file01">
                                            <IconButton color="primary" aria-label="upload picture" component="label">
                                                <input hidden accept="image/*" type="file" />
                                                <PhotoCamera style={{ fontSize: '35px' }} />
                                            </IconButton>
                                        </label>
                                    </Grid>
                                    <Button style={{ marginTop: '15px', marginLeft: '58px', width: '180px', height: '50px', backgroundColor: '#2ed573' }} variant="contained">Conform Booking</Button>
                                    <Button style={{ marginTop: '15px', marginLeft: '30px', width: '180px', height: '50px', backgroundColor: '#d63031' }} variant="contained">Cancle</Button>
                                </Grid>
                            </Grid>
                            <Grid className={classes.popupBookinTable}>
                                <TableContainer component={Paper} style={{ height: '25vh', width: '90vw', backgroundColor: '#eeeff1' }}>
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
                                                <TableCell align="left">Vehicle Name</TableCell>
                                                <TableCell align="left">Damage Fee</TableCell>
                                                <TableCell align="left">Action</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        {/* <TableBody>
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
                                                    <TableCell align="left">{row.address}</TableCell>
                                                    <TableCell align="left">{row.firstName}</TableCell>
                                                    <TableCell align="left">{row.lastName}</TableCell>
                                                    <TableCell align="left">{row.licenNo}</TableCell>
                                                    <TableCell align="left">{row.contact}</TableCell>
                                                    <TableCell align="left">{row.nic}</TableCell>
                                                    <TableCell align="left">{row.address}</TableCell>
                                                    <TableCell align="left">
                                                        <Tooltip title="Edit">
                                                            <IconButton
                                                                onClick={() => {
                                                                    // this.updateCustomer(row);
                                                                }}
                                                            >
                                                                <EditIcon color="primary" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Delete">
                                                            <IconButton
                                                                onClick={() => {
                                                                    // this.deleteCustomer(row.id)
                                                                }}
                                                            >
                                                                <DeleteIcon color="error" />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody> */}
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
                );
            </>
        )
    }
}

export default withStyles(styleSheet)(Premium);