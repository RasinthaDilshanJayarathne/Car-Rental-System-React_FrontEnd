import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { styleSheet } from "../Vehicle/styles";
import logo from "../../../../assets/img/logo.png";
import car1 from "../../../../assets/img/car1.png";
import car2 from "../../../../assets/img/car2.png";
import car3 from "../../../../assets/img/car3.png";
import Autocomplete from '@mui/material/Autocomplete';
import Carousel from "react-elastic-carousel";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Item from './Item';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Component } from 'react';
import VehicleService from "../../../../Service/VehicleService";
import GDSESnackBar from "../../../../common/SnakBar/index";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

class Vehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {

            frontImage: null,
            backImage: null,
            sideImage: null,

            frontView: null,
            backView: null,
            sideView: null,

            formData: {
                vehicleId: '',
                registrationNo: '',
                vehicleBrand: '',
                numberOfPassengers: '',
                color: '',
                vehicleType: '',
                fuelType: '',
                transmissionType: '',
                freeMileage: {
                    dailyMileage: '',
                    monthlyMileage: ''
                },
                priceRate: {
                    dailyRate: '',
                    monthlyRate: ''
                },
                vehicleAvailabilityType: '',
                damageFee: '',
                lastServiceMileage: '',
                vehicleServiceMileage: '',
                pricePerExtraKM: ''
            },

            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary',

            vehicleType: [
                {
                    type: 'GENERAL'
                },
                {
                    type: 'LUXURY'
                },
                {
                    type: 'PREMIUM'
                }

            ],
            fuelType: [
                {
                    type: 'DIESEL'
                },
                {
                    type: 'PETROL'
                }
            ],
            transmissionType: [
                {
                    type: 'AUTO'
                },
                {
                    type: 'MANUAL'
                }
            ],
            vehicleAvailabilityType: [
                {
                    type: 'AVAILABLE'
                },
                {
                    type: 'NOT_AVAILABLE'
                }
            ]

        }
    }

    loadData = async () => {
        let res = await VehicleService.fetchVehicle();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    submitVehicle = async () => {
        let formData = this.state.formData;
        console.log(formData)

        if (this.state.btnLabel === "save") {
            let res = await VehicleService.postVehicle(formData);
            this.addCarImage(formData.vehicleId);
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();

                await this.loadData();
            } else {
                this.setState({
                    alert: true,
                    //message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await VehicleService.putVehicle(formData);
            if (res.status === 200) {

                // let front = this.state.frontImage;
                // let back = this.state.backImage;
                // let side = this.state.sideImage;
                // let list=[front,back,side]
                // let viewList = ["Front", "Back", "Side"]

                // for (var i = 0; i < list.length; i++) {
                //     if (list[i] != null) {
                //         let formData = new FormData();
                //         formData.append('carImage', list[i]);
                //         await this.updateCarImage(formData, formData.vehicleId, viewList[i]);
                //     }
                // }

                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                await this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }

    };

    updateVehicle = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'error',
            formData: {
                vehicleId: data.vehicleId,
                registrationNo: data.registrationNo,
                vehicleBrand: data.vehicleBrand,
                numberOfPassengers: data.numberOfPassengers,
                color: data.color,
                vehicleType: data.vehicleType,
                fuelType: data.fuelType,
                transmissionType: data.transmissionType,
                freeMileage: {
                    dailyMileage: data.freeMileage.dailyMileage,
                    monthlyMileage: data.freeMileage.monthlyMileage
                },
                priceRate: {
                    dailyRate: data.priceRate.dailyRate,
                    monthlyRate: data.priceRate.monthlyRate
                },
                vehicleAvailabilityType: data.vehicleAvailabilityType,
                damageFee: data.damageFee,
                lastServiceMileage: data.lastServiceMileage,
                vehicleServiceMileage: data.vehicleServiceMileage,
                pricePerExtraKM: data.pricePerExtraKM
            },
        });
    };

    deleteVehicle = async (vehicleId) => {
        let params = {
            vehicleId: vehicleId
        }
        let res = await VehicleService.deleteVehicle(params);
        console.log(res)

        if (res.status === 200) {
            let res = await VehicleService.deleteCarImages(vehicleId);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
            }
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    addCarImage = async (carId) => {

        var bodyFormData = new FormData();
        bodyFormData.append('param', this.state.frontImage);
        bodyFormData.append('param', this.state.backImage);
        bodyFormData.append('param', this.state.sideImage);

        let res = await VehicleService.addCarImage(bodyFormData, carId);
        if (res.data.code === 201) { alert(res.data.message) } else {
            alert(res.data.message);
        }
    }

    clearFields = () => {
        this.setState({

            frontImage: null,
            backImage: null,
            sideImage: null,

            frontView: null,
            backView: null,
            sideView: null,

            formData: {
                vehicleId: '',
                registrationNo: '',
                vehicleBrand: '',
                numberOfPassengers: '',
                color: '',
                vehicleType: '',
                fuelType: '',
                transmissionType: '',
                freeMileage: {
                    dailyMileage: '',
                    monthlyMileage: ''
                },
                priceRate: {
                    dailyRate: '',
                    monthlyRate: ''
                },
                vehicleAvailabilityType: '',
                damageFee: '',
                lastServiceMileage: '',
                vehicleServiceMileage: '',
                pricePerExtraKM: ''
            }
        });
    };

    componentDidMount() {
        this.loadData();
    }


    render() {
        const { classes } = this.props;

        return (
            <>
                <Grid className={classes.container}>
                    <Grid className={classes.searchBar}>
                        <Grid className={classes.bookingPanel}>
                            <img src={logo} alt="" style={{ width: '150px', marginTop: '-10px' }} />
                            <Typography variant="h5" style={{ marginLeft: '30px', color: '#000d6b' }}>
                                BOOK A CAR / VEHICLE MANAGE
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.vehicleCard}>
                        <TableContainer component={Paper} style={{ height: '85vh', width: '81vw', backgroundColor: '#eeeff1' }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Vehicle Id</TableCell>
                                        <TableCell align="left">Registration No</TableCell>
                                        <TableCell align="left">Vehicle Brand</TableCell>
                                        <TableCell align="left">Number Of Passengers</TableCell>
                                        {/* <TableCell align="left">Driver Type</TableCell> */}
                                        <TableCell align="left">Color</TableCell>
                                        <TableCell align="left">Vehicle Type</TableCell>
                                        <TableCell align="left">Fuel Type</TableCell>
                                        <TableCell align="left">Transmission Type</TableCell>
                                        <TableCell align="left">Daily Mileage</TableCell>
                                        <TableCell align="left">Monthly Mileage</TableCell>
                                        <TableCell align="left">Daily Rate</TableCell>
                                        <TableCell align="left">Monthly Rate</TableCell>
                                        <TableCell align="left">Vehicle Availability Type</TableCell>
                                        <TableCell align="left">Damage Fee</TableCell>
                                        <TableCell align="left">LastService Mileage</TableCell>
                                        <TableCell align="left">Vehicle Service Mileage</TableCell>
                                        <TableCell align="left">PricePer Extra KM</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.state.data.map((row) => (
                                            <TableRow>
                                                <TableCell align="left">{row.vehicleId}</TableCell>
                                                <TableCell align="left">{row.registrationNo}</TableCell>
                                                <TableCell align="left">{row.vehicleBrand}</TableCell>
                                                <TableCell align="left">{row.numberOfPassengers}</TableCell>
                                                <TableCell align="left">{row.color}</TableCell>
                                                <TableCell align="left">{row.vehicleType}</TableCell>
                                                <TableCell align="left">{row.fuelType}</TableCell>
                                                <TableCell align="left">{row.transmissionType}</TableCell>
                                                <TableCell align="left">{row.freeMileage.dailyMileage}</TableCell>
                                                <TableCell align="left">{row.freeMileage.monthlyMileage}</TableCell>
                                                <TableCell align="left">{row.priceRate.dailyRate}</TableCell>
                                                <TableCell align="left">{row.priceRate.monthlyRate}</TableCell>
                                                <TableCell align="left">{row.vehicleAvailabilityType}</TableCell>
                                                <TableCell align="left">{row.damageFee}</TableCell>
                                                <TableCell align="left">{row.lastServiceMileage}</TableCell>
                                                <TableCell align="left">{row.vehicleServiceMileage}</TableCell>
                                                <TableCell align="left">{row.pricePerExtraKM}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(styleSheet)(Vehicle);