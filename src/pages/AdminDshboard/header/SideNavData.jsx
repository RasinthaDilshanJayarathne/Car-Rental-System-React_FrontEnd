import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PaidIcon from '@mui/icons-material/Paid';
import ManIcon from '@mui/icons-material/Man';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import {NavLink} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import { Outlet, Link } from "react-router-dom";

export default function SideNavData({handleDrawerClose}) {
    const classes = useStyles();
    const listItemData = [
        {label: "Home", to: "/admin", icon: <HomeIcon/>},
        {label: "Manage Customer", to: "/admin/customer", icon: <ManIcon/>},
        {label: "Manage Vehicle", to: "/admin/vehicle", icon: <DirectionsCarIcon/>},
        {label: "Manage Booking", to: "/admin/booking", icon: <BookOnlineIcon/>},
        {label: "Manage Request", to: "/admin/request", icon: <SystemSecurityUpdateGoodIcon/>},
        {label: "Manage Driver", to: "/admin/driver", icon: <AccessibilityNewIcon/>},
        {label: "Manage Shedule", to: "/admin/driverShedule", icon: <CalendarMonthIcon/>},
        {label: "Income", to: "/admin/income", icon: <PaidIcon/>},
        {label: "Profile", to: "/admin/profile", icon: <AccountCircleIcon/>},
    ]
    return (<List>
        {listItemData.map((item, i) => (
            <Button size="small" className={classes.navButton} onClick={() => handleDrawerClose()}>
                <ListItem
                    exact
                    component={Link}
                    to={item.to}
                    className={classes.navLinks}
                    activeClassName={classes.activeNavLinks}
                    key={i}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                </ListItem>
            </Button>))}
    </List>);
}
