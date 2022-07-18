import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button, Grid, TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import logo from "../../../../assets/img/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import BackpackIcon from "@mui/icons-material/Backpack";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import SettingsIcon from "@mui/icons-material/Settings";
import car1 from "../../../../assets/img/car1.png";
import car2 from "../../../../assets/img/car2.png";
import car3 from "../../../../assets/img/car3.png";
import car4 from "../../../../assets/img/car4.png";
import car5 from "../../../../assets/img/car5.png";

const drawerWidth = 240;

function General(props) {
    const {window} = props;
    const {classes} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                {['General', 'Premium', 'Luxury'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {/*{['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}*/}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{display: 'flex'}}>

            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                 {/*The implementation can be swapped with js to avoid SEO duplication of links.
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>*/}
            </Box>
            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <Grid className={classes.bookingPanel}>
                        <img src={logo} alt="" style={{width: '150px', marginTop: '-10px'}}/>
                        <Typography variant="h5" style={{marginLeft: '30px'}}>
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
                                <Typography variant="h5">Suzuki Alto</Typography>
                                <Typography variant="h6" style={{color:'#a9a9a5'}}>General Package</Typography>
                            </Grid>
                            <Grid className={classes.vehicleDetailsCard}>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Daily Rate 2500(Rs) </Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Free 100 Km for a Day</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Price per Extra Km 30.00(Rs)</Typography>
                                </Grid>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Monthly Rate 64,350.00(Rs)</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Free 2400 Km for a Day</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Modifications</Typography>
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
                                <Typography variant="h5">Suzuki Alto K10</Typography>
                                <Typography variant="h6" style={{color:'#a9a9a5'}}>General Package</Typography>
                            </Grid>
                            <Grid className={classes.vehicleDetailsCard}>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Daily Rate 3000(Rs) </Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Free 100 Km for a Day</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Price per Extra Km 35.00(Rs)</Typography>
                                </Grid>
                                <Grid className={classes.vehicleSubDetailsCard}>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Monthly Rate 71,390.00(Rs)</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Free 2400 Km for a Day</Typography>
                                    <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Modifications</Typography>
                                </Grid>
                                <Grid style={{display:'flex', flexWrap: 'wrap', flexDirection: 'column',width:'37vw',height:'5vh',marginTop:'-70px'}}>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <PersonIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>5 seats</Typography>

                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <BackpackIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>2 bags</Typography>
                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                        <MeetingRoomIcon style={{color:'#a9a9a5'}}/>
                                        <Typography style={{color:'#a9a9a5'}}>5 doors</Typography>
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
                                <Typography style={{fontSize:'30px',color:'#fe5b3d'}}>71,390.00 lkr:</Typography>
                                <Typography style={{fontSize:'20px',color:'#fe5b3d',marginLeft:'20px'}}>Cost Of Rental</Typography>
                                <Button variant="contained" fullWidth style={{backgroundColor:'orange',color:'black',marginTop: '90px',}}>BOOK NOW</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.vehicle}>
                            <Grid className={classes.vehicleImg}>
                                <img src={car3} style={{width: '400px',marginLeft:'20px'}}/>
                            </Grid>
                            <Grid className={classes.vehicleDetails}>
                                <Grid style={{marginTop:'30px',marginLeft:'10px'}}>
                                    <Typography variant="h5">Suzuki Celerio</Typography>
                                    <Typography variant="h6" style={{color:'#a9a9a5'}}>General Package</Typography>
                                </Grid>
                                <Grid className={classes.vehicleDetailsCard}>
                                    <Grid className={classes.vehicleSubDetailsCard}>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Daily Rate 3300(Rs) </Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Free 100 Km for a Day</Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Price per Extra Km 35.00(Rs)</Typography>
                                    </Grid>
                                    <Grid className={classes.vehicleSubDetailsCard}>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Monthly Rate 77,220.00(Rs)</Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Free 2400 Km for a Day</Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Modifications</Typography>
                                    </Grid>
                                    <Grid style={{display:'flex', flexWrap: 'wrap', flexDirection: 'column',width:'37vw',height:'5vh',marginTop:'-70px'}}>
                                        <Grid style={{display:'flex', flexWrap: 'wrap',flexDirection:'column',width:'6.1vw',height:'5vh',alignItems:'left', justifyContent:'center'}}>
                                            <PersonIcon style={{color:'#a9a9a5'}}/>
                                            <Typography style={{color:'#a9a9a5'}}>5 seats</Typography>

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
                                    <Typography style={{fontSize:'30px',color:'#fe5b3d'}}>77,220.00 lkr</Typography>
                                    <Typography style={{fontSize:'20px',color:'#fe5b3d',marginLeft:'20px'}}>Cost Of Rental</Typography>
                                    <Button variant="contained" fullWidth style={{backgroundColor:'orange',color:'black',marginTop: '90px',}}>BOOK NOW</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.vehicle}>
                            <Grid className={classes.vehicleImg}>
                                <img src={car4} style={{width: '420px',marginLeft:'20px'}}/>
                            </Grid>
                            <Grid className={classes.vehicleDetails}>
                                <Grid style={{marginTop:'30px',marginLeft:'10px'}}>
                                    <Typography variant="h5">Perodua(Daihatsu) Axia</Typography>
                                    <Typography variant="h6" style={{color:'#a9a9a5'}}>General Package</Typography>
                                </Grid>
                                <Grid className={classes.vehicleDetailsCard}>
                                    <Grid className={classes.vehicleSubDetailsCard}>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Daily Rate 3800(Rs) </Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Free 100 Km for a Day</Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Price per Extra Km 35.00(Rs)</Typography>
                                    </Grid>
                                    <Grid className={classes.vehicleSubDetailsCard}>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Monthly Rate 90,200.00(Rs)</Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Free 2400 Km for a Day</Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Modifications</Typography>
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
                                            <Typography style={{color:'#a9a9a5'}}>5 doors</Typography>
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
                                    <Typography style={{fontSize:'30px',color:'#fe5b3d'}}>90,200.00 lkr</Typography>
                                    <Typography style={{fontSize:'20px',color:'#fe5b3d',marginLeft:'20px'}}>Cost Of Rental</Typography>
                                    <Button variant="contained" fullWidth style={{backgroundColor:'orange',color:'black',marginTop: '90px',}}>BOOK NOW</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.vehicle}>
                            <Grid className={classes.vehicleImg}>
                                <img src={car5} style={{width: '400px',marginLeft:'20px'}}/>
                            </Grid>
                            <Grid className={classes.vehicleDetails}>
                                <Grid style={{marginTop:'30px',marginLeft:'10px'}}>
                                    <Typography variant="h5">Toyota Prius C/ Aqua</Typography>
                                    <Typography variant="h6" style={{color:'#a9a9a5'}}>General Package</Typography>
                                </Grid>
                                <Grid className={classes.vehicleDetailsCard}>
                                    <Grid className={classes.vehicleSubDetailsCard}>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Daily Rate 5000(Rs) </Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Free 100 Km for a Day</Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Price per Extra Km 49.50(Rs)</Typography>
                                    </Grid>
                                    <Grid className={classes.vehicleSubDetailsCard}>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Monthly Rate 110,330.00(Rs)</Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Free 2400 Km for a Day</Typography>
                                        <Typography style={{fontSize:'16px',marginLeft:'10px',color:'orange'}}>Modifications</Typography>
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
                                            <Typography style={{color:'#a9a9a5'}}>5 doors</Typography>
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
                                    <Typography style={{fontSize:'30px',color:'#fe5b3d'}}>110,330.00 lkr</Typography>
                                    <Typography style={{fontSize:'20px',color:'#fe5b3d',marginLeft:'20px'}}>Cost Of Rental</Typography>
                                    <Button variant="contained" fullWidth style={{backgroundColor:'orange',color:'black',marginTop: '90px',}}>BOOK NOW</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

General.propTypes = {
    window: PropTypes.func,
};

export default withStyles(styleSheet)(General);