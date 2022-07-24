import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Button, Grid, TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Vehicle/styles";
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
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import { Component } from 'react';

const DriverRequestingType = [
    { label: 'AVAILABLE'},
    { label: 'NOT_AVAILABLE'},
]
const VehicleType = [
    { label: 'GENERAL'},
    { label: 'LUXURY'},
    { label: 'PREMIUM'},
]
const FuelType = [
    { label: 'DIESEL'},
    { label: 'PETROL'},
]
const TransmissionType = [
    { label: 'AUTO'},
    { label: 'MANUAL'},
]

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

class Vehicle extends Component {
   constructor(props){
        super(props)
   }
    
    render(){
        const {classes} = this.props;
        function createData(id, regNo, brand, passengers, driverType, color, vehicleType,fuelType, transmissionType,freeMileage, availabilityType,damageFee,lastServiceMileage,vehicleServiceMilage) {
            return { id, regNo, brand, passengers, driverType, color,vehicleType ,fuelType, transmissionType,freeMileage,availabilityType,damageFee,lastServiceMileage,vehicleServiceMilage};
        }
    
        const rows = [
            createData('V00-001','Reg-001','Suzuki Alto',5,'AVAILABLE','Red','GENERAL','PETROL','AUTO',100,'AVAILABLE',10000.00,25800,26000),
            createData('V00-002','Reg-002','Toyota Corolla Axio',4,'AVAILABLE', 'Black','LUXURY','PETROL','AUTO',100,'AVAILABLE',5000.00,12500,13000),
            createData('V00-003','Reg-003','Toyota Premio',4,'NOT_AVAILABLE','White','PREMIUM','DIESEL','AUTO',100,'AVAILABLE',10000.00,11600,15000),
        ];
        return (
            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <Grid className={classes.bookingPanel}>
                        <img src={logo} alt="" style={{width: '150px', marginTop: '-10px'}}/>
                        <Typography variant="h5" style={{marginLeft: '30px',color: '#000d6b'}}>
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
                                        <Grid style={{height:'200px',width:'350px', display: 'flex',
                                                        flexWrap: 'wrap',flexDirection: 'column',
                                                        alignItems: 'center',justifyContent: 'center',
                                                    }}>
                                            <img src={car1} alt="" style={{width:'380px',marginTop:'-10px',marginLeft:'-10px'}}/>
                                        </Grid>
                                        <Grid style={{marginBottom:'-40px',height:'50px',width:'100px'}}>
                                            <Stack direction="row" alignItems="center" spacing={5}>
                                                <Button variant="contained" component="label" style={{backgroundColor:'#a4b0be'}}>
                                                    Upload
                                                    <input hidden accept="image/*" multiple type="file" />
                                                    <PhotoCamera />
                                                </Button>
                                            </Stack>
                                        </Grid>
                                    </Item>
                                    <Item className={classes.appItem}>
                                        <Grid style={{height:'200px',width:'350px', display: 'flex',
                                                        flexWrap: 'wrap',flexDirection: 'column',
                                                        alignItems: 'center',justifyContent: 'center',
                                                    }}>
                                        <img src={car2} alt="" style={{width:'450px',marginTop:'-10px',marginLeft:'-100px'}}/>
                                        </Grid>
                                        <Grid style={{marginBottom:'-40px',height:'50px',width:'100px'}}>
                                            <Stack direction="row" alignItems="center" spacing={5}>
                                                <Button variant="contained" component="label" style={{backgroundColor:'#a4b0be'}}>
                                                    Upload
                                                    <input hidden accept="image/*" multiple type="file" />
                                                    <PhotoCamera />
                                                </Button>
                                            </Stack>
                                        </Grid>
                                    </Item>
                                    <Item className={classes.appItem}>
                                        <Grid style={{height:'200px',width:'350px', display: 'flex',
                                                        flexWrap: 'wrap',flexDirection: 'column',
                                                        alignItems: 'center',justifyContent: 'center',
                                                    }}>
                                            <img src={car3} alt="" style={{width:'370px',marginTop:'-10px'}}/>
                                        </Grid>
                                        <Grid style={{marginBottom:'-40px',height:'50px',width:'100px'}}>
                                            <Stack direction="row" alignItems="center" spacing={5}>
                                                <Button variant="contained" component="label" style={{backgroundColor:'#a4b0be'}}>
                                                    Upload
                                                    <input hidden accept="image/*" multiple type="file" />
                                                    <PhotoCamera />
                                                </Button>
                                            </Stack>
                                        </Grid>
                                    </Item>
                                </Carousel> 
                            </Grid>
                        </Grid>
                        <Grid className={classes.vehicleForm}>
                        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitVehicle}>
                            <Grid container spacing={-9} rowSpacing={16} style={{marginLeft:'20px'}}>
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Vehicle Id" variant="outlined" />
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Registration No" variant="outlined" />
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Vehicle Brand" variant="outlined" />
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Number Of Passengers" variant="outlined" />
                                <Autocomplete style={{padding:'10px',width:'230px'}} disablePortal id="combo-box-demo" variant="outlined" options={DriverRequestingType} sx={{ width: 300 }}renderInput={(params) => <TextField {...params} label="Driver Type"/>}/>
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Color" variant="outlined" />
                                <Autocomplete style={{padding:'10px',width:'230px'}} disablePortal id="combo-box-demo" variant="outlined" options={VehicleType} sx={{ width: 300 }}renderInput={(params) => <TextField {...params} label="Vehicle Type"/>}/>
                                <Autocomplete style={{padding:'10px',width:'230px'}} disablePortal id="combo-box-demo" variant="outlined" options={FuelType} sx={{ width: 300 }}renderInput={(params) => <TextField {...params} label="Fuel Type"/>}/>
                                <Autocomplete style={{padding:'10px',width:'230px'}} disablePortal id="combo-box-demo" variant="outlined" options={TransmissionType} sx={{ width: 300 }}renderInput={(params) => <TextField {...params} label="Transmission Type"/>}/>
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Free Mileage" variant="outlined" />
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Price Rate" variant="outlined" />
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Vehicle Availability Type" variant="outlined" />
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Damage Fee" variant="outlined" />
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="LastService Mileage" variant="outlined" />
                                <TextValidator style={{padding:'10px',width:'230px'}} id="outlined-basic" label="Vehicle Service Mileage" variant="outlined" />
                                <Button style={{width:'200px',marginLeft:'480px',backgroundColor:'#2ed573'}} variant="contained">Save</Button>
                            </Grid>
                        </ValidatorForm>
                        </Grid>
                    </Grid>
                    <Grid className={classes.vehicleTable}>
                        <TableContainer component={Paper} style={{height: '45vh',width:'82vw',backgroundColor:'#eeeff1'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="left">Vehicle Id</TableCell>
                                    <TableCell align="left">Registration No</TableCell>
                                    <TableCell align="left">Vehicle Brand</TableCell>
                                    <TableCell align="left">Number Of Passengers</TableCell>
                                    <TableCell align="left">Driver Type</TableCell>
                                    <TableCell align="left">Color</TableCell>
                                    <TableCell align="left">Vehicle Type</TableCell>
                                    <TableCell align="left">Fuel Type</TableCell>
                                    <TableCell align="left">Transmission Type</TableCell>
                                    <TableCell align="left">Free Mileage</TableCell>
                                    <TableCell align="left">Vehicle Availability Type</TableCell>
                                    <TableCell align="left">Damage Fee</TableCell>
                                    <TableCell align="left">LastService Mileage</TableCell>
                                    <TableCell align="left">Vehicle Service Mileage</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align="left">{row.id}</TableCell>
                                    <TableCell align="left">{row.regNo}</TableCell>
                                    <TableCell align="left">{row.brand}</TableCell>
                                    <TableCell align="left">{row.passengers}</TableCell>
                                    <TableCell align="left">{row.driverType}</TableCell>
                                    <TableCell align="left">{row.color}</TableCell>
                                    <TableCell align="left">{row.vehicleType}</TableCell>
                                    <TableCell align="left">{row.fuelType}</TableCell>
                                    <TableCell align="left">{row.transmissionType}</TableCell>
                                    <TableCell align="left">{row.freeMileage}</TableCell>
                                    <TableCell align="left">{row.availabilityType}</TableCell>
                                    <TableCell align="left">{row.damageFee}</TableCell>
                                    <TableCell align="left">{row.lastServiceMileage}</TableCell>
                                    <TableCell align="left">{row.vehicleServiceMilage}</TableCell>
                                    <TableCell align="left">
                                        <Tooltip title="Edit">
                                            <IconButton 
                                                onClick={() => {
                                                    // this.updateCustomer(row);
                                                    }}
                                                >
                                                <EditIcon color="primary" />
                                            </IconButton>
                                        </Tooltip>
                                            <Tooltip title="Delete">
                                                <IconButton
                                                    onClick={() => {
                                                        // this.deleteCustomer(row.id)
                                                        }}
                                                    >
                                                    <DeleteIcon color="error" />
                                                </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styleSheet)(Vehicle);