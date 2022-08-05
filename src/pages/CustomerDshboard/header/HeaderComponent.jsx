import React from 'react'
import Sidenav from "./SideNav";
import {Route, Routes} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import Home from "../bodyComponents/Home/Home";
import {Box} from "@mui/material";
import Luxury from "../bodyComponents/Luxury/Luxury";
import General from "../bodyComponents/General/General";
import Premium from "../bodyComponents/Premium/Premium";
import Profile from "../bodyComponents/Profile/Profile";

export default function CustomerDashboard() {
    const classes = useStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setMobileOpen(!mobileOpen);
    }
    return (
        <div>
            <Sidenav mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen}/>
            <Box className={classes.wrapper}>
                {/* <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/general" element={<General/>}/>
                    <Route exact path="/premium" element={<Premium/>}/>
                    <Route exact path="/luxury" element={<Luxury/>}/>
                    <Route exact path="/profile" element={<Profile/>}/>
                </Routes> */}
            </Box>
        </div>
    );
}
