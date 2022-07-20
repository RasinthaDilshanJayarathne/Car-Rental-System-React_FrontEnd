import React, {Component} from 'react'
import {Grid, Typography} from "@material-ui/core";
import {styleSheet} from "../Home/styles";
import {withStyles} from "@mui/styles";
import logo from "../../../../assets/img/logo.png";
import rev1 from "../../../../assets/img/rev1.jpg";
import {Button, IconButton, TextField} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (

            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <img src={logo} alt="" style={{width: '150px', marginTop: '-10px',marginLeft:'250px'}}/>
                    <Typography variant="h5" style={{marginRight: '250px'}}>
                        BOOK A CAR / NO ADVANCE PAYMENT
                    </Typography>
                </Grid>
                <Grid className={classes.subContainer}>
                    <Grid className={classes.card}>

                    </Grid>
                    <Grid className={classes.driverContainer}></Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Home)
