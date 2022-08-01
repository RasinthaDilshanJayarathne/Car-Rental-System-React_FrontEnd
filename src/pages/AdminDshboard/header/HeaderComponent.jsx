import React from 'react'
import Sidenav from "./SideNav";
import {Route, Routes} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import Home from "../bodyComponents/Home/Home";
import {Box} from "@mui/material";
import Vehicle from "../../AdminDshboard/bodyComponents/Vehicle/Vehicle";
import Customer from '../bodyComponents/Customer/Customer';
import Booking from '../bodyComponents/Booking/Booking';
import Driver from '../bodyComponents/Driver/Driver';
import Income from '../bodyComponents/Income/Income';
import Profile from '../bodyComponents/Profile/Profile';
import DriverShedule from '../bodyComponents/DriverShedule/DriverShedule';
import Request from '../bodyComponents/Request/request';

export default function AdminDashboard() {
    const classes = useStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setMobileOpen(!mobileOpen);
    }
    return (
        <div>
            <Sidenav mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen}/>
            <Box className={classes.wrapper}>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/customer" element={<Customer/>}/>
                    <Route exact path="/vehicle" element={<Vehicle/>}/>
                    <Route exact path="/booking" element={<Booking/>}/>
                    <Route exact path="/request" element={<Request/>}/>
                    <Route exact path="/driver" element={<Driver/>}/>
                    <Route exact path="/driverShedule" element={<DriverShedule/>}/>
                    <Route exact path="/income" element={<Income/>}/>
                    <Route exact path="/profile" element={<Profile/>}/>
                </Routes>
            </Box>
        </div>
    );
}
