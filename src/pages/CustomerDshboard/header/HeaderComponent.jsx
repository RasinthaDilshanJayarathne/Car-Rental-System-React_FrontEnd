import React from 'react'
import Sidenav from "./SideNav";
import {Route, Routes} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import Home from "../bodyComponents/home/Home";
import {Box} from "@mui/material";
import Luxury from "../bodyComponents/Luxury/Luxury";
import General from "../bodyComponents/General/General";
import Premium from "../bodyComponents/Premium/Premium";

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
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/general" element={<General/>}/>
                    <Route exact path="/premium" element={<Premium/>}/>
                    <Route exact path="/luxury" element={<Luxury/>}/>
                </Routes>
            </Box>
        </div>
    );
}
