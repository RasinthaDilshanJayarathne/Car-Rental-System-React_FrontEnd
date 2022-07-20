import React, {Component} from 'react'
import {Grid, Typography} from "@material-ui/core";
import {styleSheet} from "../Home/styles";
import {withStyles} from "@mui/styles";
import logo from "../../../../assets/img/logo.png";
import rev1 from "../../../../assets/img/rev1.jpg";
import rev2 from "../../../../assets/img/rev2.jpg";
import rev3 from "../../../../assets/img/rev3.jpg";
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
                        <Grid className={classes.card1}>
                            <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px'}}>
                                Available Drivers
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px'}}>
                                11
                            </Typography>
                        </Grid>
                        <Grid className={classes.card2}>
                            <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px'}}>
                                General Vehicle
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px'}}>
                                03
                            </Typography>
                        </Grid>
                        <Grid className={classes.card3}>
                            <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px'}}>
                                Premium Vehicle
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px'}}>
                                02
                            </Typography>
                        </Grid>
                        <Grid className={classes.card4}>
                            <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px'}}>
                                Premium Vehicle
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px'}}>
                                04
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.driverContainer}>
                        <Grid className={classes.app}> 
                            <Carousel breakPoints={breakPoints}>
                                <Item className={classes.appItem}>
                                    <Grid>
                                        <img src={rev1} alt="" style={{width:'100px',height:'100px',borderRadius:'180px'}}/>
                                        <Typography variant="h5" gutterBottom component="div">h5. Heading</Typography>
                                        <Typography variant="h5" gutterBottom component="div">h5. Heading</Typography>
                                        <Typography variant="h5" gutterBottom component="div">h5. Heading</Typography>
                                        <Typography variant="h5" gutterBottom component="div">h5. Heading</Typography>
                                    </Grid>
                                </Item>
                                <Item className={classes.appItem}>
                                    <Grid>
                                        <img src={rev2} alt="" style={{width:'100px',height:'100px',borderRadius:'180px'}}/>
                                    </Grid>
                                </Item>
                                <Item className={classes.appItem}>
                                    <Grid>
                                        <img src={rev3} alt="" style={{width:'100px',height:'100px',borderRadius:'180px'}}/>
                                    </Grid>
                                </Item>
                                <Item className={classes.appItem}>
                                    <Grid>
                                        <img src={rev1} alt="" style={{width:'100px',height:'100px',borderRadius:'180px'}}/>
                                    </Grid>
                                </Item>
                            </Carousel> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Home)
