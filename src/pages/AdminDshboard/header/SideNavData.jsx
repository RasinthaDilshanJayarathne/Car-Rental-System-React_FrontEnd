import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from "react-router-dom";
import {useStyles} from "./HeaderStyles";

export default function SideNavData({handleDrawerClose}) {
    const classes = useStyles();
    const listItemData = [
        {label: "Home", link: "/", icon: <HomeIcon/>},
        {label: "Manage Customer", link: "/general", icon: <DirectionsCarIcon/>},
        {label: "Manage Vehicle", link: "/premium", icon: <DirectionsCarIcon/>},
        {label: "Manage Driver", link: "/luxury", icon: <DirectionsCarIcon/>},
        {label: "Manage Booking", link: "/profile", icon: <AccountCircleIcon/>},
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
