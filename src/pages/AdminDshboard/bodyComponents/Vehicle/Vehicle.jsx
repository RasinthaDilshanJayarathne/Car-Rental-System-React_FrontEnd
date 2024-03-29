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
                pricePerExtraKM: '',
                totalVehicle:''
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
                this.loadData();
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
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
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
                pricePerExtraKM: data.pricePerExtraKM,
                totalVehicle:data.totalVehicle
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
                pricePerExtraKM: '',
                totalVehicle:''
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
                        <Grid className={classes.vehicleDetail}>
                            <Grid className={classes.vehiclePhoto}>
                                <Grid className={classes.app}>
                                    <Carousel breakPoints={breakPoints}>
                                        <Item className={classes.appItem}>
                                            <Grid style={{
                                                height: '200px', width: '350px', display: 'flex',
                                                flexWrap: 'wrap', flexDirection: 'column',
                                                alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                {/* <img src={car1} alt="" style={{ width: '380px', marginTop: '-10px', marginLeft: '-10px' }} /> */}
                                                <Grid style={{
                                                    width: '350px',
                                                    height: '420px',
                                                    //border: '1px solid red',
                                                    backgroundImage: "url(" + this.state.frontView + ")",
                                                    //backgroundColor:'yellow',
                                                    backgroundSize: 'cover'
                                                }}
                                                >
                                                </Grid>
                                            </Grid>
                                            <Grid style={{ marginBottom: '-40px', height: '50px', width: '100px' }}>
                                                <Stack direction="row" alignItems="center" spacing={5}>
                                                    {/* <Button
                                                        variant="contained"
                                                        component="label"
                                                        style={{ backgroundColor: '#a4b0be' }}
                                                    //onClick={this.uploadImage()}
                                                    >
                                                        Upload
                                                        <input hidden accept="image/*" multiple type="file" />
                                                        <PhotoCamera />
                                                    </Button> */}
                                                    <input
                                                        style={{ display: 'none' }}
                                                        accept="image/*"
                                                        className={classes.input}
                                                        id="contained-button-file01"
                                                        multiple
                                                        type="file"
                                                        onChange={(e) => {
                                                            this.setState({
                                                                frontImage: e.target.files[0],
                                                                frontView: URL.createObjectURL(e.target.files[0])
                                                            })
                                                        }}
                                                    />
                                                    <label htmlFor="contained-button-file01">
                                                        <Button
                                                            variant="contained"
                                                            //color="primary" 
                                                            component="span"
                                                            style={{ backgroundColor: '#a4b0be', marginLeft: '-50px' }}
                                                        >
                                                            Upload
                                                            <PhotoCamera />
                                                        </Button>
                                                    </label>
                                                </Stack>
                                            </Grid>
                                        </Item>
                                        <Item className={classes.appItem}>
                                            <Grid style={{
                                                height: '200px', width: '350px', display: 'flex',
                                                flexWrap: 'wrap', flexDirection: 'column',
                                                alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                {/* <img src={car2} alt="" style={{ width: '450px', marginTop: '-10px', marginLeft: '-100px' }} /> */}
                                                <Grid style={{
                                                    width: '350px',
                                                    height: '420px',
                                                    //border: '1px solid red',
                                                    backgroundImage: "url(" + this.state.backView + ")",
                                                    //backgroundColor:'blue',
                                                    backgroundSize: 'cover'
                                                }}
                                                >
                                                </Grid>
                                            </Grid>
                                            <Grid style={{ marginBottom: '-40px', height: '50px', width: '100px' }}>
                                                <Stack direction="row" alignItems="center" spacing={5}>
                                                    {/* <Button variant="contained" component="label" style={{ backgroundColor: '#a4b0be' }}>
                                                        Upload
                                                        <input hidden accept="image/*" multiple type="file" />
                                                        <PhotoCamera />
                                                    </Button> */}
                                                    <input
                                                        style={{ display: 'none' }}
                                                        accept="image/*"
                                                        className={classes.input}
                                                        id="contained-button-file02"
                                                        multiple
                                                        type="file"
                                                        onChange={(e) => {
                                                            this.setState({
                                                                backImage: e.target.files[0],
                                                                backView: URL.createObjectURL(e.target.files[0])
                                                            })
                                                        }}
                                                    />
                                                    <label htmlFor="contained-button-file02">
                                                        <Button
                                                            variant="contained"
                                                            //color="primary"
                                                            component="span"
                                                            style={{ backgroundColor: '#a4b0be', marginLeft: '-50px' }}
                                                        >
                                                            Upload
                                                            <PhotoCamera />
                                                        </Button>
                                                    </label>
                                                </Stack>
                                            </Grid>
                                        </Item>
                                        <Item className={classes.appItem}>
                                            <Grid style={{
                                                height: '200px', width: '350px', display: 'flex',
                                                flexWrap: 'wrap', flexDirection: 'column',
                                                alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                {/* <img src={car3} alt="" style={{ width: '370px', marginTop: '-10px' }} /> */}
                                                <Grid style={{
                                                    width: '350px',
                                                    height: '420px',
                                                    //border: '1px solid red',
                                                    //backgroundColor:'red',
                                                    backgroundImage: "url(" + this.state.sideView + ")",
                                                    backgroundSize: 'cover'
                                                }}
                                                >

                                                </Grid>
                                            </Grid>
                                            <Grid style={{ marginBottom: '-40px', height: '50px', width: '100px' }}>
                                                <Stack direction="row" alignItems="center" spacing={5}>
                                                    {/* <Button variant="contained" component="label" style={{ backgroundColor: '#a4b0be' }}>
                                                        Upload
                                                        <input hidden accept="image/*" multiple type="file" />
                                                        <PhotoCamera />
                                                    </Button> */}
                                                    <input
                                                        style={{ display: 'none' }}
                                                        accept="image/*"
                                                        className={classes.input}
                                                        id="contained-button-file03"
                                                        multiple
                                                        type="file"
                                                        onChange={(e) => {
                                                            this.setState({
                                                                sideImage: e.target.files[0],
                                                                sideView: URL.createObjectURL(e.target.files[0])
                                                            })
                                                        }}
                                                    />
                                                    <label htmlFor="contained-button-file03">
                                                        <Button
                                                            variant="contained"
                                                            //color="primary" 
                                                            component="span"
                                                            style={{ backgroundColor: '#a4b0be', marginLeft: '-50px' }}
                                                        >
                                                            Upload
                                                            <PhotoCamera />
                                                        </Button>
                                                    </label>
                                                </Stack>
                                            </Grid>
                                        </Item>
                                    </Carousel>
                                </Grid>
                            </Grid>
                            <Grid className={classes.vehicleForm}>
                                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitVehicle}>
                                    <Grid container spacing={-9} rowSpacing={10} style={{ marginLeft: '20px' }}>
                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="Vehicle Id"
                                            variant="outlined"
                                            value={this.state.formData.vehicleId}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.vehicleId = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="Registration No"
                                            variant="outlined"
                                            value={this.state.formData.registrationNo}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.registrationNo = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="Vehicle Brand"
                                            variant="outlined"
                                            value={this.state.formData.vehicleBrand}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.vehicleBrand = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="Number Of Passengers"
                                            variant="outlined"
                                            value={this.state.formData.numberOfPassengers}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.numberOfPassengers = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="Color"
                                            variant="outlined"
                                            value={this.state.formData.color}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.color = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />

                                        <Autocomplete
                                            style={{ padding: '10px', width: '230px' }}
                                            onChange={(e, value, r) => {

                                                let formData = this.state.formData
                                                formData.vehicleType = value.type
                                                this.setState({ formData })

                                            }}
                                            getOptionLabel={
                                                (option) => option.type
                                            }

                                            id="controllable-states-demo"
                                            options={this.state.vehicleType}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Vehicle Type" />}
                                        />

                                        <Autocomplete
                                            style={{ padding: '10px', width: '230px' }}
                                            onChange={(e, value, r) => {

                                                let formData = this.state.formData
                                                formData.fuelType = value.type
                                                this.setState({ formData })

                                            }}
                                            getOptionLabel={
                                                (option) => option.type
                                            }
                                            id="controllable-states-demo"
                                            options={this.state.fuelType}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Fuel Type" />}
                                        />

                                        <Autocomplete
                                            style={{ padding: '10px', width: '230px' }}
                                            onChange={(e, value, r) => {
                                                let formData = this.state.formData
                                                formData.transmissionType = value.type
                                                this.setState({ formData })

                                            }}
                                            getOptionLabel={
                                                (option) => option.type
                                            }
                                            id="controllable-states-demo"
                                            options={this.state.transmissionType}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="TransmissionType" />}
                                        />

                                        <TextValidator
                                            style={{ padding: '10px', width: '230px', }}
                                            id="outlined-basic"
                                            label="Daily Mileage"
                                            variant="outlined"
                                            value={this.state.formData.freeMileage.dailyMileage}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.freeMileage.dailyMileage = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />

                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="Monthly Mileage"
                                            variant="outlined"
                                            value={this.state.formData.freeMileage.monthlyMileage}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.freeMileage.monthlyMileage = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />

                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="Daily Price Rate"
                                            variant="outlined"
                                            value={this.state.formData.priceRate.dailyRate}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.priceRate.dailyRate = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />

                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="Monthly Price Rate"
                                            variant="outlined"
                                            value={this.state.formData.priceRate.monthlyRate}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.priceRate.monthlyRate = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />

                                        <Autocomplete
                                            style={{ padding: '10px', width: '230px' }}
                                            onChange={(e, value, r) => {

                                                let formData = this.state.formData
                                                formData.vehicleAvailabilityType = value.type
                                                this.setState({ formData })

                                            }}
                                            getOptionLabel={
                                                (option) => option.type
                                            }
                                            id="controllable-states-demo"
                                            options={this.state.vehicleAvailabilityType}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Vehicle Availability Type" />}
                                        />

                                        <TextValidator
                                            style={{ padding: '10px', width: '230px', }}
                                            id="outlined-basic"
                                            label="Damage Fee"
                                            variant="outlined"
                                            value={this.state.formData.damageFee}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.damageFee = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />

                                        <TextValidator
                                            style={{ padding: '10px', width: '230px', }}
                                            id="outlined-basic"
                                            label="LastService Mileage"
                                            variant="outlined"
                                            value={this.state.formData.lastServiceMileage}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.lastServiceMileage = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="Vehicle Service Mileage"
                                            variant="outlined"
                                            value={this.state.formData.vehicleServiceMileage}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.vehicleServiceMileage = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="PricePer Extra KM"
                                            variant="outlined"
                                            value={this.state.formData.pricePerExtraKM}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.pricePerExtraKM = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ padding: '10px', width: '230px' }}
                                            id="outlined-basic"
                                            label="Total Vehicle"
                                            variant="outlined"
                                            value={this.state.formData.totalVehicle}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.totalVehicle = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        {/* <Button
                                            style={{ width: '200px', height: '40px', marginLeft: '480px', marginTop: '-60px' }}
                                            variant="contained"
                                            label={this.state.btnLabel}
                                            type="submit" size="small"
                                            color={this.state.btnColor}
                                        /> */}
                                        <Button
                                            style={{ width: '200px', height: '40px', marginLeft: '480px', marginTop: '10px' }}
                                            variant="contained"
                                            size="small"
                                            type="submit"
                                            label={this.state.btnLabel}
                                            color={this.state.btnColor}>
                                            Save
                                        </Button>
                                    </Grid>
                                </ValidatorForm>
                            </Grid>
                        </Grid>
                        <Grid className={classes.vehicleTable}>
                            <TableContainer component={Paper} style={{ height: '45vh', width: '81vw', backgroundColor: '#eeeff1' }}>
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
                                            <TableCell align="left">Total Vehicle</TableCell>
                                            <TableCell align="left">Action</TableCell>
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
                                                    <TableCell align="left">{row.totalVehicle}</TableCell>
                                                    <TableCell align="left">
                                                        <Tooltip title="Edit">
                                                            <IconButton
                                                                onClick={() => {
                                                                    this.updateVehicle(row);
                                                                    //this.getCarImage();
                                                                }}
                                                            >
                                                                <EditIcon color="primary" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Delete">
                                                            <IconButton
                                                                onClick={() => {
                                                                    this.deleteVehicle(row.vehicleId)
                                                                }}
                                                            >
                                                                <DeleteIcon color="error" />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
        );
    }
}

export default withStyles(styleSheet)(Vehicle);