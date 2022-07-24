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
import { Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar, PieChart,Pie} from "recharts";
import Item from './Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const data = [
    { name: "General", Packges: 20 },
    { name: "Luxury", Packges: 15 },
    { name: "Premium", Packges: 10 },
];

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <Grid className={classes.container}>
                <Grid className={classes.subContainer}>
                    <Grid className={classes.card}>
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
                        </Grid>
                        <Grid className={classes.subCardDetails}>
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
                                                <Typography variant="h6" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                                <Typography variant="h6" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                            </Grid>
                                            <Grid style={{height:'100px',width:'250px',display: 'flex',
                                                            flexWrap: 'wrap',flexDirection: 'column',
                                                            alignItems: 'center',justifyContent: 'center',
                                                        }}>
                                            <Button variant="contained" fullWidth style={{backgroundColor:'#16a085'}}>View Schedule</Button>
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
                                                <Typography variant="h6" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                                <Typography variant="h6" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                            </Grid>
                                            <Grid style={{height:'100px',width:'250px',display: 'flex',
                                                            flexWrap: 'wrap',flexDirection: 'column',
                                                            alignItems: 'center',justifyContent: 'center',
                                                        }}>
                                                <Button variant="contained" fullWidth style={{backgroundColor:'#16a085'}}>View Schedule</Button>
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
                                                <Typography variant="h6" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                                <Typography variant="h6" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                            </Grid>
                                            <Grid style={{height:'100px',width:'250px',display: 'flex',
                                                            flexWrap: 'wrap',flexDirection: 'column',
                                                            alignItems: 'center',justifyContent: 'center',
                                                        }}>
                                                <Button variant="contained" fullWidth style={{backgroundColor:'#16a085'}}>View Schedule</Button>
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
                                                <Typography variant="h6" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                                <Typography variant="h6" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                            </Grid>
                                            <Grid style={{height:'100px',width:'250px',display: 'flex',
                                                            flexWrap: 'wrap',flexDirection: 'column',
                                                            alignItems: 'center',justifyContent: 'center',
                                                        }}>
                                                <Button variant="contained" fullWidth style={{backgroundColor:'#16a085'}}>View Schedule</Button>
                                        </Grid>
                                    </Item>
                                </Carousel> 
                            </Grid>
                        </Grid>
                    </Grid> 
                    <Grid className={classes.chat}>
                        <Grid className={classes.chatBox}>
                            <Grid className={classes.chart}>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign:'center'}}>Summary Of Mounth</Typography>
                                        <BarChart
                                                width={500}
                                                height={300}
                                                data={data}
                                                margin={{
                                                    top: 5,
                                                    right: 100,
                                                    left: 80,
                                                    bottom: 5,
                                                }}
                                                barSize={20}
                                            >
                                                <XAxis
                                                    dataKey="name"
                                                    scale="point"
                                                    padding={{ left: 10, right: 10 }}
                                                />
                                                
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <Bar dataKey="Packges" fill="#8884d8" background={{ fill: "#eee" }} />
                                        </BarChart>
                                </Grid> 
                        </Grid>
                        <Grid className={classes.subChatBoxMan}>
                            <PieChart width={400} height={400}
                                margin={{
                                        top: 5,
                                        left: 10,
                                        bottom: 5,
                                        }}>
                                <Pie
                                    dataKey="Packges"
                                    isAnimationActive={false}
                                    data={data}
                                    cx={200}
                                    cy={200}
                                    outerRadius={100}
                                    fill="#00b894"
                                    label
                                />
                                <Tooltip />
                            </PieChart>
                        </Grid>   
                    </Grid> 
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Home)