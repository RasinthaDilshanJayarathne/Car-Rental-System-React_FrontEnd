import React, {Component} from 'react'
import {Grid, Typography} from "@material-ui/core";
import {styleSheet} from "../Home/styles";
import {withStyles} from "@mui/styles";
import logo from "../../../../assets/img/logo.png";
import rev1 from "../../../../assets/img/rev1.jpg";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from './Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

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
                    <Grid className={classes.driverContainer}>
                        <Grid className={classes.app}> 
                       `    <Carousel breakPoints={breakPoints}>
                                <Item className={classes.appItem}>Two</Item>
                                <Item className={classes.appItem}>Three</Item>
                                <Item className={classes.appItem}>Four</Item>
                                <Item className={classes.appItem}>Five</Item>
                            </Carousel>`
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Home)
