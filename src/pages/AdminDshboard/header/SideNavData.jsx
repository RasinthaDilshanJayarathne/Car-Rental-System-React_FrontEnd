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

export default function SideNavData({handleDrawerClose}) {
    const classes = useStyles();
    const listItemData = [
        {label: "Home", link: "/", icon: <HomeIcon/>},
        {label: "Manage Customer", link: "/customer", icon: <ManIcon/>},
        {label: "Manage Vehicle", link: "/vehicle", icon: <DirectionsCarIcon/>},
        {label: "Manage Booking", link: "/booking", icon: <BookOnlineIcon/>},
        {label: "Manage Request", link: "/request", icon: <SystemSecurityUpdateGoodIcon/>},
        {label: "Manage Driver", link: "/driver", icon: <AccessibilityNewIcon/>},
        {label: "Manage Shedule", link: "/driverShedule", icon: <CalendarMonthIcon/>},
        {label: "Income", link: "/income", icon: <PaidIcon/>},
        {label: "Profile", link: "/profile", icon: <AccountCircleIcon/>},
    ]
    return (<List>
        {listItemData.map((item, i) => (
            <Button size="small" className={classes.navButton} onClick={() => handleDrawerClose()}>
                <ListItem
                    exact
                    component={NavLink}
                    to={item.link}
                    className={classes.navLinks}
                    activeClassName={classes.activeNavLinks}
                    key={i}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                </ListItem>
            </Button>))}
    </List>);
}
