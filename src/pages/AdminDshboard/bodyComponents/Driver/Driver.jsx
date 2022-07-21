import * as React from 'react';
import {Grid,Typography,Button} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Driver/styles";
import logo from "../../../../assets/img/logo.png";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Component } from 'react';

class Driver extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {classes} = this.props;
        return (
            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                        <Grid className={classes.bookingPanel}>
                            <img src={logo} alt="" style={{width: '150px', marginTop: '-10px'}}/>
                            <Typography variant="h5" style={{marginLeft: '30px',color: '#000d6b'}}>
                                BOOK A CAR / DRIVER MANAGE
                            </Typography>
                        </Grid>
                    </Grid>
                <Grid className={classes.formContainer}>
                    
                </Grid>
                
            </Grid>
        );
    }
}

export default withStyles(styleSheet)(Driver);