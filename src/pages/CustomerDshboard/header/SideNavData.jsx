import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import CarRentalIcon from '@mui/icons-material/CarRental';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ManIcon from '@mui/icons-material/Man';
import {NavLink} from "react-router-dom";
import {useStyles} from "./HeaderStyles";

export default function SideNavData({handleDrawerClose}) {
    const classes = useStyles();
    const listItemData = [
        {label: "Home", link: "/", icon: <HomeIcon/>},
        {label: "General", link: "/general", icon: <DirectionsCarIcon/>},
        {label: "Premium", link: "/premium", icon: <AirlineSeatReclineNormalIcon/>},
        {label: "Luxury", link: "/luxury", icon: <ManIcon/>},
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
