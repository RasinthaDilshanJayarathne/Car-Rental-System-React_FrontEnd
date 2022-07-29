import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./styles";
import logo from "../../../../assets/img/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import BackpackIcon from "@mui/icons-material/Backpack";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import SettingsIcon from "@mui/icons-material/Settings";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import car1 from "../../../../assets/img/car1.png";
import car2 from "../../../../assets/img/car2.png";
import car3 from "../../../../assets/img/car3.png";
import car4 from "../../../../assets/img/car4.png";
import car5 from "../../../../assets/img/car5.png";
import rev1 from "../../../../assets/img/rev1.jpg";
import Carousel from "react-elastic-carousel";
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
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Autocomplete from '@mui/material/Autocomplete';
import Item from './Item';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function General(props) {
    const { classes } = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function createData(id, email, firstName, lastName, licenNo, contact, nic, address) {
        return { id, email, firstName, lastName, licenNo, contact, nic, address };
    }

    const rows = [
        createData('R00-001', 'rasintha@gmail.com', 'Nimal', 'Perera', 2423452, '071-3123342', '42345124', 'Galle'),
        createData('R00-002', 'rasintha@gmail.com', 'Kamal', 'Gamage', 2373453, '071-3123342', '42345124', 'Colombo'),
    ];

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
                        <TextField id="outlined-basic" label="Car" variant="outlined"
                            style={{ margin: '10px' }} />
                        <TextField id="outlined-basic" label="Location" variant="outlined"
                            style={{ margin: '10px' }} />
                        <TextField id="outlined-basic" label="Pick-Up-Date" variant="outlined"
                            style={{ margin: '10px' }} />
                        <TextField id="outlined-basic" label="Return-Date" variant="outlined"
                            style={{ margin: '10px' }} />
                        <Button variant="outlined" color='error' style={{
                            margin: '10px',
                            height: '52px',
                            border: '#fe5b3d'
                        }}>SEARCH CAR NOW</Button>
                    </Grid>
                </Grid>
                <Grid className={classes.vehicleCart}>
                    <Grid className={classes.vehicle}>
                        <Grid className={classes.vehicleImg}>
                            <img src={car1} style={{ width: '420px', marginLeft: '20px' }} />
                        </Grid>
                        <Grid className={classes.vehicleDetails}>
                            <Grid style={{ marginTop: '30px', marginLeft: '10px' }}>
                                <Typography variant="h5">Suzuki Alto</Typography>
                                <Typography variant="h6" style={{ color: '#a9a9a5' }}>General Package</Typography>
                            </Grid>
                            <Grid className={classes.vehicleDetailsCard}>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Daily Rate <span> 2500</span> (Rs) </Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free <span> 100</span> Km
                                        for a Day</Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Price per
                                        Extra Km <span> 30.00</span> (Rs)</Typography>
                                </Grid>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Monthly Rate
                                        <span> 64,350.00</span> (Rs)</Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free <span> 2400</span> Km
                                        for a Day</Typography>
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
                                <Typography style={{ fontSize: '30px', color: '#fe5b3d' }}> <span> 64,350.00</span> lkr</Typography>
                                <Typography style={{ fontSize: '20px', color: '#fe5b3d', marginLeft: '20px' }}>Cost Of
                                    Rental
                                </Typography>
                                <Grid>
                                    <Button variant="contained" fullWidth style={{ backgroundColor: 'orange', color: 'black', marginTop: '90px', }} onClick={handleClickOpen}>
                                        BOOK NOW
                                    </Button>
                                </Grid>

                                {/* <Button variant="contained" fullWidth
                                    style={{backgroundColor: 'orange', color: 'black', marginTop: '90px',}}>BOOK
                                NOW</Button> */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.vehicle}>
                        <Grid className={classes.vehicleImg}>
                            <img src={car2} style={{ width: '500px', marginLeft: '-150px' }} />
                        </Grid>
                        <Grid className={classes.vehicleDetails}>
                            <Grid style={{ marginTop: '30px', marginLeft: '10px' }}>
                                <Typography variant="h5">Suzuki Alto K10</Typography>
                                <Typography variant="h6" style={{ color: '#a9a9a5' }}>General Package</Typography>
                            </Grid>
                            <Grid className={classes.vehicleDetailsCard}>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Daily Rate
                                        3000(Rs) </Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free 100 Km
                                        for a Day</Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Price per
                                        Extra Km 35.00(Rs)</Typography>
                                </Grid>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Monthly Rate
                                        71,390.00(Rs)</Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free 2400 Km
                                        for a Day</Typography>
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
                                        <Typography style={{ color: '#a9a9a5' }}>5 seats</Typography>

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
                                        <Typography style={{ color: '#a9a9a5' }}>5 doors</Typography>
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
                                <Typography style={{ fontSize: '30px', color: '#fe5b3d' }}>71,390.00 lkr</Typography>
                                <Typography style={{ fontSize: '20px', color: '#fe5b3d', marginLeft: '20px' }}>Cost Of
                                    Rental</Typography>
                                <Grid>
                                    <Button variant="contained" fullWidth style={{ backgroundColor: 'orange', color: 'black', marginTop: '90px', }} onClick={handleClickOpen}>
                                        BOOK NOW
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.vehicle}>
                        <Grid className={classes.vehicleImg}>
                            <img src={car3} style={{ width: '400px', marginLeft: '20px' }} />
                        </Grid>
                        <Grid className={classes.vehicleDetails}>
                            <Grid style={{ marginTop: '30px', marginLeft: '10px' }}>
                                <Typography variant="h5">Suzuki Celerio</Typography>
                                <Typography variant="h6" style={{ color: '#a9a9a5' }}>General Package</Typography>
                            </Grid>
                            <Grid className={classes.vehicleDetailsCard}>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Daily Rate
                                        3300(Rs) </Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free 100 Km
                                        for a Day</Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Price per
                                        Extra Km 35.00(Rs)</Typography>
                                </Grid>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Monthly Rate
                                        77,220.00(Rs)</Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free 2400 Km
                                        for a Day</Typography>
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
                                        <Typography style={{ color: '#a9a9a5' }}>5 seats</Typography>

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
                                <Typography style={{ fontSize: '30px', color: '#fe5b3d' }}>77,220.00 lkr</Typography>
                                <Typography style={{ fontSize: '20px', color: '#fe5b3d', marginLeft: '20px' }}>Cost Of
                                    Rental</Typography>
                                <Grid>
                                    <Button variant="contained" fullWidth style={{ backgroundColor: 'orange', color: 'black', marginTop: '90px', }} onClick={handleClickOpen}>
                                        BOOK NOW
                                    </Button>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.vehicle}>
                        <Grid className={classes.vehicleImg}>
                            <img src={car4} style={{ width: '420px', marginLeft: '20px' }} />
                        </Grid>
                        <Grid className={classes.vehicleDetails}>
                            <Grid style={{ marginTop: '30px', marginLeft: '10px' }}>
                                <Typography variant="h5">Perodua(Daihatsu) Axia</Typography>
                                <Typography variant="h6" style={{ color: '#a9a9a5' }}>General Package</Typography>
                            </Grid>
                            <Grid className={classes.vehicleDetailsCard}>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Daily Rate
                                        3800(Rs) </Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free 100 Km
                                        for a Day</Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Price per
                                        Extra Km 35.00(Rs)</Typography>
                                </Grid>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Monthly Rate
                                        90,200.00(Rs)</Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free 2400 Km
                                        for a Day</Typography>
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
                                        <Typography style={{ color: '#a9a9a5' }}>5 doors</Typography>
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
                                <Typography style={{ fontSize: '30px', color: '#fe5b3d' }}>90,200.00 lkr</Typography>
                                <Typography style={{ fontSize: '20px', color: '#fe5b3d', marginLeft: '20px' }}>Cost Of
                                    Rental</Typography>
                                <Button variant="contained" fullWidth
                                    style={{ backgroundColor: 'orange', color: 'black', marginTop: '90px' }} onClick={handleClickOpen}>BOOK
                                    NOW</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.vehicle}>
                        <Grid className={classes.vehicleImg}>
                            <img src={car5} style={{ width: '400px', marginLeft: '20px' }} />
                        </Grid>
                        <Grid className={classes.vehicleDetails}>
                            <Grid style={{ marginTop: '30px', marginLeft: '10px' }}>
                                <Typography variant="h5">Toyota Prius C/ Aqua</Typography>
                                <Typography variant="h6" style={{ color: '#a9a9a5' }}>General Package</Typography>
                            </Grid>
                            <Grid className={classes.vehicleDetailsCard}>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Daily Rate
                                        5000(Rs) </Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free 100 Km
                                        for a Day</Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Price per
                                        Extra Km 49.50(Rs)</Typography>
                                </Grid>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Monthly Rate
                                        110,330.00(Rs)</Typography>
                                    <Typography style={{ fontSize: '16px', marginLeft: '10px', color: '#2c3e50' }}>Free 2400 Km
                                        for a Day</Typography>
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
                                        <Typography style={{ color: '#a9a9a5' }}>5 doors</Typography>
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
                                <Typography style={{ fontSize: '30px', color: '#fe5b3d' }}>110,330.00 lkr</Typography>
                                <Typography style={{ fontSize: '20px', color: '#fe5b3d', marginLeft: '20px' }}>Cost Of
                                    Rental</Typography>
                                <Button variant="contained" fullWidth
                                    style={{ backgroundColor: 'orange', color: 'black', marginTop: '90px', }} onClick={handleClickOpen}>BOOK
                                    NOW</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Dialog
                fullWidth
                maxWidth="sm=8"
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
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
                            <Grid container spacing={-4} rowSpacing={5}>
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" label="Rental Id" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" label="Pick-Up-Date" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" label="Pick-Up-Time" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" label="Return-Date" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" label="Driver Requesting Type" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" label="Driver Id" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" disabled label="Driver Name" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" disabled label="Customer Id" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" disabled label="Customer Name" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" disabled label="Customer License No" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" disabled label="Customer Address" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" disabled label="Customer Contact No" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" disabled label="Customer E-mail" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '230px' }} id="outlined-basic" label="User Name" variant="outlined" />
                                <Button style={{ marginTop: '15px', marginLeft: '58px', width: '180px', height: '50px', backgroundColor: '#2ed573' }} variant="contained">Conform Booking</Button>
                                <Button style={{ marginTop: '15px', marginLeft: '30px', width: '180px', height: '50px', backgroundColor: '#2ed573' }} variant="contained">Cancle</Button>
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
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
}


export default withStyles(styleSheet)(General);