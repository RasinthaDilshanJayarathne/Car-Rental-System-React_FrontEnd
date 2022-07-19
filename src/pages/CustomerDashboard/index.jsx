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
import {styleSheet} from "../CustomerDashboard/styles";
import logo from "../../assets/img/logo.png";


const drawerWidth = 240;

function CustomerDashboard(props) {
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
                {['General', 'Premium', 'Luxury','Profile'].map((text, index) => (
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
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                </Drawer>
            </Box>
            <Grid className={classes.container}>
                <Grid className={classes.headBar}>
                    <img src={logo} alt="" style={{width: '150px', marginTop: '-10px'}}/>
                    <Typography variant="h5" style={{marginLeft: '30px'}}>
                        BOOK A CAR / NO ADVANCE PAYMENT
                    </Typography>
                </Grid>
                <Grid className={classes.customerContainer}>
                    <Grid className={classes.profile}>
                        
                    </Grid>
                    <Grid className={classes.details}>
                        <Grid style={{marginTop:'50px',marginLeft:'15px'}}>
                            <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="Register Id" variant="outlined" />
                            <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="NIC" variant="outlined" />
                            <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="Last Name" variant="outlined" />
                            <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="License No" variant="outlined" />
                            <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="Contact No" variant="outlined" />
                            <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="Address" variant="outlined" />
                            <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="E-mail" variant="outlined" />
                            <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="Choose Photo" variant="outlined" />
                            <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="Choose Photo" variant="outlined" />
                        </Grid>
                        <Grid style={{marginBottom:'60px',marginRight:'410px'}}>
                            <Button variant="contained" style={{width:'150px'}}>View</Button>
                            <Button variant="contained" style={{width:'150px',marginLeft:'10px'}}>Update</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

CustomerDashboard.propTypes = {
    window: PropTypes.func,
};

export default withStyles(styleSheet)(CustomerDashboard);