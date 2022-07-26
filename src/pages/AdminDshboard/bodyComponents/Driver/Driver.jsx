import * as React from 'react';
import {Grid,Typography,Button,TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Driver/styles";
import logo from "../../../../assets/img/logo.png";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import {PhotoCamera} from "@mui/icons-material";
import DriverService from "../../../../Service/DriverService";


class Driver extends Component{
    constructor(props){
        super(props)
        this.state ={
            formData:{
                "driveId": '',
                "driveNic": '',
                "driveName": {
                    "firstName":'',
                    "lastName": ''
                },
                "driveLicenseNo": '',
                "driverAddress": '',
                "driverContact": '',
                "driverAvailability":'',
                "user": {
                    "userName": '',
                    "password": '',
                    "role": ''
                }
            },
            data: [],
            btnLabel: 'save',
            btnColor: 'primary',
        }
    }

    loadData = async () => {
        let res = await DriverService.fetchDriver();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    submitDriver = async () => {
        let formData = this.state.formData;

        console.log(formData)

        if(this.state.btnLabel === "save") {
            let res = await DriverService.postDriver(formData);
    
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
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await DriverService.putDriver(formData);
            if(res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                //this.clearFields();
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

    componentDidMount() {
        this.loadData();
    }

    render(){
        const {classes} = this.props;
      
        return (
            <>
                <Grid className={classes.container}>
                    <Grid className={classes.searchBar}>
                            <Grid className={classes.bookingPanel}>
                                <img src={logo} alt="" style={{width: '150px', marginTop: '-10px'}}/>
                                <Typography variant="h5" style={{marginLeft: '30px',color: '#000d6b'}}>
                                    BOOK A CAR / DRIVER MANAGE
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid className={classes.details}>
                    <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitDriver}>
                        <Grid className={classes.textContainer}>
                            <TextValidator
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="Register Id" 
                                variant="outlined" 
                                value={this.state.formData.driveId}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.driveId = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="E-mail" 
                                variant="outlined"
                                value={this.state.formData.driveNic}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.driveNic = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="First Name" 
                                variant="outlined" 
                                value={this.state.formData.driveName.firstName}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.driveName.firstName = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="Last Name" 
                                variant="outlined" 
                                value={this.state.formData.driveName.lastName}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.driveName.lastName = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="License No" 
                                variant="outlined" 
                                value={this.state.formData.driveLicenseNo}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.driveLicenseNo = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="Contact No" 
                                variant="outlined" 
                                value={this.state.formData.driverContact}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.driverContact = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="NIC" 
                                variant="outlined" 
                                value={this.state.formData.driveNic}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.driveNic = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="Address" 
                                variant="outlined" 
                                value={this.state.formData.driverAddress}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.driverAddress = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                            />
                            <Grid style={{marginBottom:'60px',marginRight:'410px'}}>
                                <Button 
                                    style={{width:'200px',marginLeft:'400px'}} 
                                    variant="contained"
                                    label={this.state.btnLabel} 
                                    type="submit" size="small" 
                                    color={this.state.btnColor}
                                >Save</Button>
                            </Grid>
                        </Grid>
                    </ValidatorForm> 
                    <Grid className={classes.upload}>
                        <Grid style={{width:'30vw',height:'30vh',backgroundColor:'#eeeff1',display: 'flex',flexWrap: 'wrap',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',}}>
                            <IconButton backgroundColor="#bdc3c7" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera style={{fontSize:'40px',marginTop:'12px'}}/>
                            </IconButton>
                            <Typography variant="body2">Upload Nic</Typography>
                        </Grid>
                        <Grid style={{width:'30vw',height:'30vh',backgroundColor:'#eeeff1',display: 'flex',flexWrap: 'wrap',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',}}>
                            <IconButton backgroundColor="#bdc3c7" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera style={{fontSize:'40px',marginTop:'12px'}}/>
                            </IconButton>
                            <Typography variant="body2">Upload License</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.table}>
                    <TableContainer component={Paper} style={{ height: '70vh',width:'80vw',backgroundColor:'#eeeff1'}}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">Register Id</TableCell>
                                {/* <TableCell align="left">E-mail</TableCell> */}
                                <TableCell align="left">First Name</TableCell>
                                <TableCell align="left">Last Name</TableCell>
                                <TableCell align="left">License No</TableCell>
                                <TableCell align="left">Contact No</TableCell>
                                <TableCell align="left">NIC</TableCell>
                                <TableCell align="left">Address</TableCell>
                                <TableCell align="left">Action</TableCell>

                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {
                                this.state.data.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell align="left">{row.driveId}</TableCell>
                                <TableCell align="left">{row.driveName.firstName}</TableCell>
                                <TableCell align="left">{row.driveName.lastName}</TableCell>
                                <TableCell align="left">{row.driveLicenseNo}</TableCell>
                                <TableCell align="left">{row.driverContact}</TableCell>
                                <TableCell align="left">{row.driveNic}</TableCell>
                                <TableCell align="left">{row.driverAddress}</TableCell>
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
            </>
        );
    }
}

export default withStyles(styleSheet)(Driver);