import { withStyles } from "@mui/styles";
import {styleSheet} from "../Income/styles";
import { Component } from "react";
import {Grid, Typography} from "@mui/material";
import logo from "../../../../assets/img/logo.png";
import { Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar, PieChart,Pie} from "recharts";

const daily = [
    { name: "General", Packges: 8500},
    { name: "Luxury", Packges: 12500 },
    { name: "Premium", Packges: 4000 },
];
const mounthly = [
    { name: "General", Packges: 20000 },
    { name: "Luxury", Packges: 15000 },
    { name: "Premium", Packges: 100000 },
];

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
                            BOOK A CAR / SUMMERY OF INCOME
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.subContainer}>
                    <Grid className={classes.chart}>
                        <Grid className={classes.chart1}>

                        </Grid>
                        <Grid className={classes.chart1}>
                            
                        </Grid>
                    </Grid>
                    <Grid className={classes.incomes}>
                        <Grid className={classes.chart2}>
                            <BarChart
                                width={600}
                                height={300}
                                data={mounthly}
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
                                <Bar dataKey="Packges" fill="#f39c12" background={{ fill: "#eee" }} />
                            </BarChart>
                            <Typography variant="h6" gutterBottom component="div" style={{textAlign:'center',marginBottom:'80px',color:'#7f8c8d'}}>Summary Of Mounthly</Typography>
                        </Grid>
                        <Grid className={classes.chart3}>
                        <BarChart
                                width={600}
                                height={300}
                                data={daily}
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
                            <Typography variant="h6" gutterBottom component="div" style={{textAlign:'center',marginBottom:'80px',color:'#7f8c8d'}}>Summary Of Daily</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Income)