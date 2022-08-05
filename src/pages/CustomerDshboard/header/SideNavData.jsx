import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import { Outlet, Link } from "react-router-dom";

export default function SideNavData({handleDrawerClose}) {
    const classes = useStyles();
    const listItemData = [
        {label: "Home", to: "/customer", icon: <HomeIcon/>},
        {label: "General", to: "/customer/general", icon: <DirectionsCarIcon/>},
        {label: "Premium", to: "/customer/premium", icon: <DirectionsCarIcon/>},
        {label: "Luxury", to: "/customer/luxury", icon: <DirectionsCarIcon/>},
        {label: "Profile", to: "/customer/profile", icon: <AccountCircleIcon/>},
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
