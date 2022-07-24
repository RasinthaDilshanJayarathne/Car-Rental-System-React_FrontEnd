import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Button, Grid, TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Luxury/styles";
import logo from "../../../../assets/img/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import BackpackIcon from "@mui/icons-material/Backpack";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import SettingsIcon from "@mui/icons-material/Settings";
import car1 from "../../../../assets/img/car1.png";
import car2 from "../../../../assets/img/car2.png";

function Luxury(props) {
    const {classes} = props;
    return (
            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <Grid className={classes.bookingPanel}>
                        <img src={logo} alt="" style={{width: '150px', marginTop: '-10px'}}/>
                        <Typography variant="h5" style={{marginLeft: '30px',color: '#000d6b'}}>
                            BOOK A CAR / NO ADVANCE PAYMENT
                        </Typography>
                    </Grid>
                    <Grid className={classes.bookingPanel}>
                        <TextField id="outlined-basic" label="Car" variant="outlined"
                                   style={{margin: '10px'}}/>
                        <TextField id="outlined-basic" label="Location" variant="outlined"
                                   style={{margin: '10px'}}/>
                        <TextField id="outlined-basic" label="Pick-Up-Date" variant="outlined"
                                   style={{margin: '10px'}}/>
                        <TextField id="outlined-basic" label="Return-Date" variant="outlined"
                                   style={{margin: '10px'}}/>
                        <Button variant="outlined" color='error' style={{
                            margin: '10px',
                            height: '52px',
                            border: '#fe5b3d'
                        }}>SEARCH CAR NOW</Button>
                    </Grid>
                </Grid>
                <Grid className={classes.vehicleCart}>
                    <Grid className={classes.vehicle} >
                        <Grid className={classes.vehicleImg}>
                            <img src={car1} style={{width: '420px',marginLeft:'20px'}}/>
                        </Grid>
                        <Grid className={classes.vehicleDetails}>
                            <Grid style={{marginTop:'30px',marginLeft:'10px'}}>
                                <Typography variant="h5">Toyota Premio</Typography>
                                <Typography variant="h6" style={{color:'#a9a9a5'}}>Luxury Package</Typography>
                            </Grid>
                            <Grid className={classes.vehicleDetailsCard}>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Daily Rate 10,000(Rs) </Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Free 100 Km for a Day</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Price per Extra Km 85.00(Rs)</Typography>
                                </Grid>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Monthly Rate 227,150.00(Rs)</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Free 2400 Km for a Day</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Modifications</Typography>
                                </Grid>
                                <Grid style={{display:'flex', flexWrap: 'wrap', flexDirection: 'column',width:'37vw',height:'5vh',marginTop:'-70px'}}>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <PersonIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>4 seats</Typography>

                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <BackpackIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>2 bags</Typography>
                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <MeetingRoomIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>4 doors</Typography>
                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <AddRoadIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>Auto</Typography>
                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <SettingsIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>A/C</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.vehicleBookingBtn}>
                            <Grid>
                                <Typography style={{fontSize:'30px',color:'#fe5b3d'}}>64,350.00 lkr</Typography>
                                <Typography style={{fontSize:'20px',color:'#fe5b3d',marginLeft:'20px'}}>Cost Of Rental</Typography>
                                <Button variant="contained" fullWidth style={{backgroundColor:'orange',color:'black',marginTop: '90px',}}>BOOK NOW</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.vehicle}>
                        <Grid className={classes.vehicleImg}>
                            <img src={car2} style={{width: '500px',marginLeft:'-150px'}}/>
                        </Grid>
                        <Grid className={classes.vehicleDetails}>
                            <Grid style={{marginTop:'30px',marginLeft:'10px'}}>
                                <Typography variant="h5">Mercedes</Typography>
                                <Typography variant="h6" style={{color:'#a9a9a5'}}>Luxury Package</Typography>
                            </Grid>
                            <Grid className={classes.vehicleDetailsCard}>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Daily Rate 18,000(Rs) </Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Free 100 Km for a Day</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Price per Extra Km 100.00(Rs)</Typography>
                                </Grid>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Monthly Rate 300,000.00(Rs)</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Free 2400 Km for a Day</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'#2c3e50'}}>Modifications</Typography>
                                </Grid>
                                <Grid style={{display:'flex', flexWrap: 'wrap', flexDirection: 'column',width:'37vw',height:'5vh',marginTop:'-70px'}}>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <PersonIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>4 seats</Typography>

                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <BackpackIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>2 bags</Typography>
                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <MeetingRoomIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>4 doors</Typography>
                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <AddRoadIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>Auto</Typography>
                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <SettingsIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>A/C</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.vehicleBookingBtn}>
                            <Grid>
                                <Typography style={{fontSize:'30px',color:'#fe5b3d'}}>71,390.00 lkr</Typography>
                                <Typography style={{fontSize:'20px',color:'#fe5b3d',marginLeft:'20px'}}>Cost Of Rental</Typography>
                                <Button variant="contained" fullWidth style={{backgroundColor:'orange',color:'black',marginTop: '90px',}}>BOOK NOW</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    );
}

export default withStyles(styleSheet)(Luxury);