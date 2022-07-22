import React from 'react'
import Sidenav from "./SideNav";
import {Route, Routes} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import Home from "../bodyComponents/Home/Home";
import {Box} from "@mui/material";
import Vehicle from "../bodyComponents/Vehicle/Vehicle";
import Profile from '../bodyComponents/Profile/Profile';

export default function DriverDashboard() {
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
                    <Route exact path="/vehicle" element={<Vehicle/>}/>
                    <Route exact path="/profile" element={<Profile/>}/>
                </Routes>
            </Box>
        </div>
    );
}
