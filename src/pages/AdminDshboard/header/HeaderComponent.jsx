import React from 'react'
import Sidenav from "./SideNav";
import {Route, Routes} from "react-router-dom";
import ManageCar from "../bodyComponents/ManageCar";
import {useStyles} from "./HeaderStyles";
import ManageDriver from "../bodyComponents/ManageDriver";
import Home from "../bodyComponents/home/Home";
import ManageCustomer from "../bodyComponents/ManageCustomer";
import {Box} from "@mui/material";
import ManageBooking from "../bodyComponents/ManageBooking";
import Income from "../bodyComponents/Income";

export default function HeaderComponent() {
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
                    <Route exact path="/manageCar" element={<ManageCar/>}/>
                    <Route exact path="/manageDriver" element={<ManageDriver/>}/>
                    <Route exact path="/manageCustomer" element={<ManageCustomer/>}/>
                    <Route exact path="/manageBooking" element={<ManageBooking/>}/>
                    <Route exact path="/income" element={<Income/>}/>
                </Routes>
            </Box>
        </div>
    );
}
