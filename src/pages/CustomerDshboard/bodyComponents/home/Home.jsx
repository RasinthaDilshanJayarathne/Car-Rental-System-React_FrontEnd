import React, { Component } from 'react'
import { Grid, Typography } from "@material-ui/core";
import { styleSheet } from "../Home/styles";
import { withStyles } from "@mui/styles";
import logo from "../../../../assets/img/logo.png";
import rev1 from "../../../../assets/img/rev1.jpg";
import rev2 from "../../../../assets/img/rev2.jpg";
import rev3 from "../../../../assets/img/rev3.jpg";
import rev4 from "../../../../assets/img/rev4.jpg";
import rev5 from "../../../../assets/img/rev5.jpg";
import rev6 from "../../../../assets/img/rev6.jpg";
import rev7 from "../../../../assets/img/rev7.jpg";
import Carousel from "react-elastic-carousel";
import Button from '@mui/material/Button';
import Item from './Item';
import VehicleService from "../../../../Service/VehicleService";
import DriverService from "../../../../Service/VehicleService";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generaldata: '',
            premiumdata: '',
            luxurydata: '',
            driverdata: '',

            driverList: [],
        }
    }

    driverDataCount = async (count) => {
        let res = await DriverService.driverCount();

        if (res.status === 200) {
            this.setState({
                driverdata: res.data.data
            });
        }
        console.log(this.state.data)
        // print customers array

    };

    driverloadData = async () => {
        let res = await DriverService.fetchDriver();

        if (res.status === 200) {
            this.setState({
                driverList: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array
        console.log(this.driverList)
    };

    generalVehicleDataCount = async (vehicleType) => {

        let params = {
            vehicleType: vehicleType
        }
        let res = await VehicleService.countVehicleByType(vehicleType);

        if (res.status === 200) {
            this.setState({
                generaldata: res.data.data
            });
        }
        // print customers array

    };

    premiumVehicleDataCount = async (vehicleType) => {

        let params = {
            vehicleType: vehicleType
        }
        let res = await VehicleService.countVehicleByType(vehicleType);

        if (res.status === 200) {
            this.setState({
                premiumdata: res.data.data
            });
        }
        // print customers array

    };

    luxuryVehicleDataCount = async (vehicleType) => {

        let params = {
            vehicleType: vehicleType
        }
        let res = await VehicleService.countVehicleByType(vehicleType);

        if (res.status === 200) {
            this.setState({
                luxurydata: res.data.data
            });
        }
        // print customers array

    };


    componentDidMount() {
        this.generalVehicleDataCount("GENERAL");
        this.premiumVehicleDataCount("PREMIUM");
        this.luxuryVehicleDataCount("LUXURY");
        this.driverDataCount();
        this.driverloadData();
    }

    render() {
        const { classes } = this.props
        return (

            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <img src={logo} alt="" style={{ width: '150px', marginTop: '-10px', marginLeft: '250px' }} />
                    <Typography variant="h5" style={{ marginRight: '250px', color: '#000d6b' }}>
                        BOOK A CAR / NO ADVANCE PAYMENT
                    </Typography>
                </Grid>
                <Grid className={classes.subContainer}>
                    <Grid className={classes.card}>
                        <Grid className={classes.card1}>
                            <Typography variant="h5" gutterBottom component="div" style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>
                                Available Drivers
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}>
                                {this.state.driverdata}
                            </Typography>
                        </Grid>
                        <Grid className={classes.card2}>
                            <Typography variant="h5" gutterBottom component="div" style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>
                                General Vehicle
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}>
                                {this.state.generaldata}
                            </Typography>
                        </Grid>
                        <Grid className={classes.card3}>
                            <Typography variant="h5" gutterBottom component="div" style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>
                                Premium Vehicle
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}>
                                {this.state.premiumdata}
                            </Typography>
                        </Grid>
                        <Grid className={classes.card4}>
                            <Typography variant="h5" gutterBottom component="div" style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>
                                Premium Vehicle
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}>
                                {this.state.luxurydata}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.driverContainer}>
                        <Grid className={classes.app}>
                            <Carousel breakPoints={breakPoints}>


                                <Item className={classes.appItem}>
                                    <Grid style={{
                                        height: '200px', width: '350px', display: 'flex',
                                        flexWrap: 'wrap', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <img src={rev1} alt="" style={{ width: '150px', height: '150px', borderRadius: '180px', marginTop: '-10px' }} />
                                    </Grid>
                                    <Grid style={{ height: '100px', width: '350px', textAlign: 'center' }}>
                                        <Typography variant="h6" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                        <Typography variant="h6" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                    </Grid>
                                    <Grid style={{
                                        height: '100px', width: '250px', display: 'flex',
                                        flexWrap: 'wrap', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Button variant="contained" fullWidth style={{ backgroundColor: '#16a085' }}>Select</Button>
                                    </Grid>
                                </Item>

                                <Item className={classes.appItem}>
                                    <Grid style={{
                                        height: '200px', width: '350px', display: 'flex',
                                        flexWrap: 'wrap', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <img src={rev2} alt="" style={{ width: '150px', height: '150px', borderRadius: '180px', marginTop: '-10px' }} />
                                    </Grid>
                                    <Grid style={{ height: '100px', width: '350px', textAlign: 'center' }}>
                                        <Typography variant="h6" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                        <Typography variant="h6" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                    </Grid>
                                    <Grid style={{
                                        height: '100px', width: '250px', display: 'flex',
                                        flexWrap: 'wrap', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Button variant="contained" fullWidth style={{ backgroundColor: '#16a085' }}>Select</Button>
                                    </Grid>
                                </Item>
                                <Item className={classes.appItem}>
                                    <Grid style={{
                                        height: '200px', width: '350px', display: 'flex',
                                        flexWrap: 'wrap', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <img src={rev3} alt="" style={{ width: '150px', height: '150px', borderRadius: '180px', marginTop: '-10px' }} />
                                    </Grid>
                                    <Grid style={{ height: '100px', width: '350px', textAlign: 'center' }}>
                                        <Typography variant="h6" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                        <Typography variant="h6" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                    </Grid>
                                    <Grid style={{
                                        height: '100px', width: '250px', display: 'flex',
                                        flexWrap: 'wrap', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Button variant="contained" fullWidth style={{ backgroundColor: '#16a085' }}>Select</Button>
                                    </Grid>
                                </Item>
                                <Item className={classes.appItem}>
                                    <Grid style={{
                                        height: '200px', width: '350px', display: 'flex',
                                        flexWrap: 'wrap', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <img src={rev4} alt="" style={{ width: '150px', height: '150px', borderRadius: '180px', marginTop: '-10px' }} />
                                    </Grid>
                                    <Grid style={{ height: '100px', width: '350px', textAlign: 'center' }}>
                                        <Typography variant="h6" gutterBottom component="div" >Name : Rasintha Dilshan</Typography>
                                        <Typography variant="h6" gutterBottom component="div" >Driver Id : DR-001</Typography>
                                    </Grid>
                                    <Grid style={{
                                        height: '100px', width: '250px', display: 'flex',
                                        flexWrap: 'wrap', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Button variant="contained" fullWidth style={{ backgroundColor: '#16a085' }}>Select</Button>
                                    </Grid>
                                </Item>
                            </Carousel>
                        </Grid>
                    </Grid>
                    <Grid className={classes.driverSubContainer}>
                        <Grid className={classes.chatBox}>
                            <Grid className={classes.image}>
                                <img src={rev5} alt="" style={{ width: '100px', height: '100px', borderRadius: '180px', marginTop: '-10px' }} />
                            </Grid>
                            <Grid className={classes.details}>
                                <Typography gutterBottom component="div" style={{ fontSize: '15px', textAlign: 'left' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Et ab aut culpa, placeat nostrum perspiciatis minus,quia
                                    excepturi ipsum deleniti vitae omnis enim sapiente pariatur
                                    accusantium officiis, ea fuga quibusdam.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.chatBox}>
                            <Grid className={classes.image}>
                                <img src={rev6} alt="" style={{ width: '100px', height: '100px', borderRadius: '180px', marginTop: '-10px' }} />
                            </Grid>
                            <Grid className={classes.details}>
                                <Typography gutterBottom component="div" style={{ fontSize: '15px', textAlign: 'left' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Et ab aut culpa, placeat nostrum perspiciatis minus,quia
                                    excepturi ipsum deleniti vitae omnis enim sapiente pariatur
                                    accusantium officiis, ea fuga quibusdam.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.chatBox}>
                            <Grid className={classes.image}>
                                <img src={rev7} alt="" style={{ width: '100px', height: '100px', borderRadius: '180px', marginTop: '-10px' }} />
                            </Grid>
                            <Grid className={classes.details}>
                                <Typography gutterBottom component="div" style={{ fontSize: '15px', textAlign: 'left' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Et ab aut culpa, placeat nostrum perspiciatis minus,quia
                                    excepturi ipsum deleniti vitae omnis enim sapiente pariatur
                                    accusantium officiis, ea fuga quibusdam.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Home)
