import {Component} from "react";
import {styleSheet} from "../Booking/styles";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';

class Booking extends Component {

    constructor(props) {
        super(props);
        
    }


    render() {
        const {classes} = this.props
        return (
            <Grid className={classes.container}>
                
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Booking)