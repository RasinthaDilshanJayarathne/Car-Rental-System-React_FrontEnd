import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Button, Grid, TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Vehicle/styles";
import logo from "../../../../assets/img/logo.png";
import Autocomplete from '@mui/material/Autocomplete';

const DriverRequestingType = [
    { label: 'AVAILABLE'},
    { label: 'NOT_AVAILABLE'},
]
const VehicleType = [
    { label: 'GENERAL'},
    { label: 'LUXURY'},
    { label: 'PREMIUM'},
]
const FuelType = [
    { label: 'DIESEL'},
    { label: 'PETROL'},
]
const TransmissionType = [
    { label: 'AUTO'},
    { label: 'MANUAL'},
]

function Luxury(props) {
    
    const {classes} = props;
    return (
            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <Grid className={classes.bookingPanel}>
                        <img src={logo} alt="" style={{width: '150px', marginTop: '-10px'}}/>
                        <Typography variant="h5" style={{marginLeft: '30px',color: '#000d6b'}}>
                            BOOK A CAR / VEHICLE MANAGE
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.vehicleCard}>
                    <Grid className={classes.vehiclePhoto}>

                    </Grid>
                    <Grid className={classes.vehicleForm}>
                        <Grid container spacing={-9} rowSpacing={20}>
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Vehicle Id" variant="outlined" />
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Registration No" variant="outlined" />
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Vehicle Brand" variant="outlined" />
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Number Of Passengers" variant="outlined" />
                            <Autocomplete style={{padding:'10px',width:'230px'}} disablePortal id="combo-box-demo" variant="outlined" options={DriverRequestingType} sx={{ width: 300 }}renderInput={(params) => <TextField {...params} label="Driver Type"/>}/>
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Color" variant="outlined" />
                            <Autocomplete style={{padding:'10px',width:'230px'}} disablePortal id="combo-box-demo" variant="outlined" options={VehicleType} sx={{ width: 300 }}renderInput={(params) => <TextField {...params} label="Vehicle Type"/>}/>
                            <Autocomplete style={{padding:'10px',width:'230px'}} disablePortal id="combo-box-demo" variant="outlined" options={FuelType} sx={{ width: 300 }}renderInput={(params) => <TextField {...params} label="Fuel Type"/>}/>
                            <Autocomplete style={{padding:'10px',width:'230px'}} disablePortal id="combo-box-demo" variant="outlined" options={TransmissionType} sx={{ width: 300 }}renderInput={(params) => <TextField {...params} label="Transmission Type"/>}/>
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Free Mileage" variant="outlined" />
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Price Rate" variant="outlined" />
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Vehicle Availability Type" variant="outlined" />
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Damage Fee" variant="outlined" />
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="LastService Mileage" variant="outlined" />
                            <TextField style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Vehicle Service Mileage" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    );
}

export default withStyles(styleSheet)(Luxury);