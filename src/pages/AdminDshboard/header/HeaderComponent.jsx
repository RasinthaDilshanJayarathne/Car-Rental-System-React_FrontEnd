import React from 'react'
import Sidenav from "./SideNav";
import {Route, Routes} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import {Box} from "@mui/material";
import Home from '../../AdminDshboard/bodyComponents/Home/Home';
import Vehicle from '../../AdminDshboard/bodyComponents/ManageVehicle/Vehicle';
import Driver from '../../AdminDshboard/bodyComponents/ManageDriver/Driver';
import Customer from '../../AdminDshboard/bodyComponents/ManageCustomer/Customer';
import Booking from '../../AdminDshboard/bodyComponents/ManageBooking/Booking';
import Income from '../../AdminDshboard/bodyComponents/Income/Income';

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
                    <Route exact path="/manageVehicle" element={<Vehicle/>}/>
                    <Route exact path="/manageDriver" element={<Driver/>}/>
                    <Route exact path="/manageCustomer" element={<Customer/>}/>
                    <Route exact path="/manageBooking" element={<Booking/>}/>
                    <Route exact path="/income" element={<Income/>}/>
                </Routes>
            </Box>
        </div>
    );
}
