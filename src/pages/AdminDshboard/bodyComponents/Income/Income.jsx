import { withStyles } from "@mui/styles";
import {styleSheet} from "../Income/styles";
import { Component } from "react";
import {Grid, Typography} from "@mui/material";
import logo from "../../../../assets/img/logo.png";


class Income extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {classes} = this.props;
        return(
            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <Grid className={classes.bookingPanel}>
                        <img src={logo} alt="" style={{width: '150px', marginTop: '-10px'}}/>
                        <Typography variant="h5" style={{marginLeft: '30px',color: '#000d6b'}}>
                            BOOK A CAR / CAR RENTAL INCOME MANAGE
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.subContainer}>
                    <Grid className={classes.subCard}>
                            <Grid className={classes.card1}>
                                <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px',color:'white'}}>
                                    Total Booking
                                </Typography>
                                <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px',color:'white'}}>
                                    03
                                </Typography>
                            </Grid>
                            <Grid className={classes.card2}>
                                <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px',color:'white'}}>
                                    Pending Booking
                                </Typography>
                                <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px',color:'white'}}>
                                    04
                                </Typography>
                            </Grid>
                            <Grid className={classes.card3}>
                                <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px',color:'white'}}>
                                    Total Customer
                                </Typography>
                                <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px',color:'white'}}>
                                    11
                                </Typography>
                            </Grid>
                            <Grid className={classes.card4}>
                                <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px',color:'white'}}>
                                    Total Customer
                                </Typography>
                                <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px',color:'white'}}>
                                    11
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid className={classes.chart}>
                        <Grid className={classes.SubChart}>

                        </Grid>
                        <Grid className={classes.SubChart}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Income)