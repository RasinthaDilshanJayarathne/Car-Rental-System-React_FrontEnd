import * as React from 'react';
import {Grid,Typography,Button} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Customer/styles";
import logo from "../../../../assets/img/logo.png";
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
import { Component } from 'react';
import {PhotoCamera} from "@mui/icons-material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CustomerService from "../../../../Service/CustomerService";


class Customer extends Component{
    constructor(props){
        super(props)
        this.state={
            formData:{
                customerId: '',
                customerNic: '',
                customerName: {
                    firstName: '',
                    lastName: ''
                },
                customerLicenseNo: '',
                customerAddress: '',
                customerContactNo: '',
                customerEmail: '',
                user: {
                    userName: '',
                    password: '',
                    role: ''
                }
            },
            data: [],
            btnLabel: 'update',
            btnColor: 'error'
        }
    }

    loadData = async () => {
        let res = await CustomerService.fetchCustomer();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)
    };

    submitCustomer = async () => {
        let formData = this.state.formData;
        console.log(formData)
        if(this.state.btnLabel === "update") {
            let res = await CustomerService.putCustomer(formData);
            if(res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                });
                //this.clearFields();
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

    updateCustomer = (data) => {
        console.log(data)

        this.setState({ 
            formData: {
                customerId: data.customerId,
                customerNic: data.customerNic,
                customerName: {
                    firstName: data.customerName.firstName,
                    lastName: data.customerName.lastName
                },
                customerLicenseNo: data.customerLicenseNo,
                customerAddress: data.customerAddress,
                customerContactNo: data.customerContactNo,
                customerEmail: data.customerEmail,
                // user: {
                //     userName: data.user.userName,
                //     password: data.user.password,
                //     role: data.user.role
                // }
            }
       });
   };

   deleteCustomer = async (id) => {
        let params = {
            customerId : id
        }
        let res = await CustomerService.deleteCustomer(params);
        console.log(res)

        if(res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
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
                                    BOOK A CAR / CUSTOMER MANAGE
                                </Typography>
                            </Grid>
                        </Grid>
                    <Grid className={classes.details}>
                        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer}>
                        <Grid className={classes.textContainer}>
                            <TextValidator
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="Register Id" 
                                variant="outlined"
                                value={this.state.formData.customerId}
                                    onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.customerId = e.target.value
                                    this.setState({ formData })
                                    }}
                                validators={['required']}
                            />
                            <TextValidator
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="E-mail" 
                                variant="outlined" 
                                value={this.state.formData.customerEmail}
                                    onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.customerEmail = e.target.value
                                    this.setState({ formData })
                                    }}
                                validators={['required']}
                            />
                            <TextValidator
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="First Name" 
                                variant="outlined"
                                value={this.state.formData.customerName.firstName}
                                    onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.customerName.firstName = e.target.value
                                    this.setState({ formData })
                                    }}
                                validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="Last Name" 
                                variant="outlined"
                                value={this.state.formData.customerName.lastName}
                                    onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.customerName.lastName = e.target.value
                                    this.setState({ formData })
                                    }}
                                validators={['required']} 
                            />
                            <TextValidator
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="License No" 
                                variant="outlined"
                                value={this.state.formData.customerLicenseNo}
                                    onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.customerLicenseNo = e.target.value
                                    this.setState({ formData })
                                    }}
                                validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="Contact No" 
                                variant="outlined"
                                value={this.state.formData.customerContactNo}
                                    onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.customerContactNo = e.target.value
                                    this.setState({ formData })
                                    }}
                                validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="NIC" 
                                variant="outlined"
                                value={this.state.formData.customerNic}
                                    onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.customerNic = e.target.value
                                    this.setState({ formData })
                                    }}
                                validators={['required']}
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="Address" 
                                variant="outlined"
                                value={this.state.formData.customerAddress}
                                    onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.customerAddress = e.target.value
                                    this.setState({ formData })
                                    }}
                                validators={['required']} 
                            />
                            {/* <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="User Name" 
                                variant="outlined"
                                value={this.state.formData.user.userName}
                                    onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.user.userName = e.target.value
                                    this.setState({ formData })
                                    }}
                                validators={['required']} 
                            />
                            <TextValidator 
                                style={{padding:'10px',width:'250px'}} 
                                id="outlined-basic" 
                                label="Role" 
                                variant="outlined"
                                value={this.state.formData.user.role}
                                    onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.user.role = e.target.value
                                    this.setState({ formData })
                                    }}
                                validators={['required']} 
                            /> */}
                            <Grid style={{marginBottom:'60px',marginRight:'410px'}}>
                                <Button
                                    style={{width:'200px',marginLeft:'400px',marginBottom:'-100px'}}
                                    variant="contained"
                                    label={this.state.btnLabel} 
                                    type="submit" size="small" 
                                    color={this.state.btnColor}
                                >Update</Button>
                            </Grid>
                        </Grid>
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
                        </ValidatorForm>
                    </Grid>
                    <Grid className={classes.table}>
                        <TableContainer component={Paper} style={{ height: '70vh',width:'80vw',backgroundColor:'#eeeff1'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="left">Register Id</TableCell>
                                    <TableCell align="left">E-mail</TableCell>
                                    <TableCell align="left">First Name</TableCell>
                                    <TableCell align="left">Last Name</TableCell>
                                    <TableCell align="left">License No</TableCell>
                                    <TableCell align="left">Contact No</TableCell>
                                    <TableCell align="left">NIC</TableCell>
                                    <TableCell align="left">Address</TableCell>
                                    {/* <TableCell align="left">User Name</TableCell>
                                    <TableCell align="left">Role</TableCell> */}
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
                                    <TableCell align="left">{row.customerId}</TableCell>
                                    <TableCell align="left">{row.customerEmail}</TableCell>
                                    <TableCell align="left">{row.customerName.firstName}</TableCell>
                                    <TableCell align="left">{row.customerName.lastName}</TableCell>
                                    <TableCell align="left">{row.customerLicenseNo}</TableCell>
                                    <TableCell align="left">{row.customerContactNo}</TableCell>
                                    <TableCell align="left">{row.customerNic}</TableCell>
                                    <TableCell align="left">{row.customerAddress}</TableCell>
                                    {/* <TableCell align="left">{row.user.userName}</TableCell>
                                    <TableCell align="left">{row.user.role}</TableCell> */}
                                    <TableCell align="left">
                                        <Tooltip title="Edit">
                                            <IconButton 
                                                onClick={() => {
                                                     this.updateCustomer(row);
                                                    }}
                                                >
                                                <EditIcon color="primary" />
                                            </IconButton>
                                        </Tooltip>
                                            <Tooltip title="Delete">
                                                <IconButton
                                                    onClick={() => {
                                                         this.deleteCustomer(row.id)
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


export default withStyles(styleSheet)(Customer);