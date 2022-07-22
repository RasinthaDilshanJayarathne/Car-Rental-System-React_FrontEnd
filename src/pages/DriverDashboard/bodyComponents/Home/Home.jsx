import React, {Component} from 'react'
import {Grid, Typography} from "@material-ui/core";
import {styleSheet} from "../Home/styles";
import {withStyles} from "@mui/styles";
import logo from "../../../../assets/img/logo.png";
import rev1 from "../../../../assets/img/rev1.jpg";
import rev2 from "../../../../assets/img/rev2.jpg";
import rev3 from "../../../../assets/img/rev3.jpg";
import Carousel from "react-elastic-carousel";
import Button from '@mui/material/Button';
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
                    <Typography variant="h5" style={{marginRight: '250px',color: '#000d6b'}}>
                        BOOK A CAR / NO ADVANCE PAYMENT
                    </Typography>
                </Grid>
                <Grid className={classes.subContainer}>
                    <Grid className={classes.card}>
                        <Grid className={classes.card1}>
                            <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px',color:'white'}}>
                                Total Customer
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px',color:'white'}}>
                                11
                            </Typography>
                        </Grid>
                        <Grid className={classes.card2}>
                            <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px',color:'white'}}>
                                Total Booking
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px',color:'white'}}>
                                03
                            </Typography>
                        </Grid>
                        <Grid className={classes.card3}>
                            <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px',color:'white'}}>
                                Total Vehicle
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px',color:'white'}}>
                                02
                            </Typography>
                        </Grid>
                        <Grid className={classes.card4}>
                            <Typography variant="h5" gutterBottom component="div" style={{textAlign:'center',marginTop:'20px',color:'white'}}>
                                Available Drivers
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{textAlign:'center',marginTop:'10px',color:'white'}}>
                                04
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.driverContainer}>
                        <Grid className={classes.app}> 
                            <Carousel breakPoints={breakPoints}>
                                <Item className={classes.appItem}>
                                    <Grid style={{height:'200px',width:'350px', display: 'flex',
                                                    flexWrap: 'wrap',flexDirection: 'column',
                                                    alignItems: 'center',justifyContent: 'center',
                                                }}>
                                        <img src={rev1} alt="" style={{width:'150px',height:'150px',borderRadius:'180px',marginTop:'-10px'}}/>
                                    </Grid>
                                    <Grid style={{height:'100px',width:'350px',textAlign:'center'}}>
                                        <Typography variant="h5" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                        <Typography variant="h5" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                    </Grid>
                                    <Grid style={{height:'100px',width:'250px',display: 'flex',
                                                    flexWrap: 'wrap',flexDirection: 'column',
                                                    alignItems: 'center',justifyContent: 'center',
                                                }}>
                                        <Button variant="contained" fullWidth style={{backgroundColor:'#16a085'}}>Select</Button>
                                    </Grid>
                                     
                                </Item>
                                <Item className={classes.appItem}>
                                <Grid style={{height:'200px',width:'350px', display: 'flex',
                                                    flexWrap: 'wrap',flexDirection: 'column',
                                                    alignItems: 'center',justifyContent: 'center',
                                                }}>
                                        <img src={rev2} alt="" style={{width:'150px',height:'150px',borderRadius:'180px',marginTop:'-10px'}}/>
                                    </Grid>
                                    <Grid style={{height:'100px',width:'350px',textAlign:'center'}}>
                                        <Typography variant="h5" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                        <Typography variant="h5" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                    </Grid>
                                    <Grid style={{height:'100px',width:'250px',display: 'flex',
                                                    flexWrap: 'wrap',flexDirection: 'column',
                                                    alignItems: 'center',justifyContent: 'center',
                                                }}>
                                        <Button variant="contained" fullWidth style={{backgroundColor:'#16a085'}}>Select</Button>
                                    </Grid>
                                </Item>
                                <Item className={classes.appItem}>
                                <Grid style={{height:'200px',width:'350px', display: 'flex',
                                                    flexWrap: 'wrap',flexDirection: 'column',
                                                    alignItems: 'center',justifyContent: 'center',
                                                }}>
                                        <img src={rev3} alt="" style={{width:'150px',height:'150px',borderRadius:'180px',marginTop:'-10px'}}/>
                                    </Grid>
                                    <Grid style={{height:'100px',width:'350px',textAlign:'center'}}>
                                        <Typography variant="h5" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                        <Typography variant="h5" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                    </Grid>
                                    <Grid style={{height:'100px',width:'250px',display: 'flex',
                                                    flexWrap: 'wrap',flexDirection: 'column',
                                                    alignItems: 'center',justifyContent: 'center',
                                                }}>
                                        <Button variant="contained" fullWidth style={{backgroundColor:'#16a085'}}>Select</Button>
                                    </Grid>
                                </Item>
                                <Item className={classes.appItem}>
                                <Grid style={{height:'200px',width:'350px', display: 'flex',
                                                    flexWrap: 'wrap',flexDirection: 'column',
                                                    alignItems: 'center',justifyContent: 'center',
                                                }}>
                                        <img src={rev1} alt="" style={{width:'150px',height:'150px',borderRadius:'180px',marginTop:'-10px'}}/>
                                    </Grid>
                                    <Grid style={{height:'100px',width:'350px',textAlign:'center'}}>
                                        <Typography variant="h5" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                        <Typography variant="h5" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                    </Grid>
                                    <Grid style={{height:'100px',width:'250px',display: 'flex',
                                                    flexWrap: 'wrap',flexDirection: 'column',
                                                    alignItems: 'center',justifyContent: 'center',
                                                }}>
                                        <Button variant="contained" fullWidth style={{backgroundColor:'#16a085'}}>Select</Button>
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
