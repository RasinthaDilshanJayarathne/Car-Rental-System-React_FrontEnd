import * as React from 'react';
import { Grid, Typography, Button, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { styleSheet } from "../Driver/styles";
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
import { PhotoCamera } from "@mui/icons-material";
import DriverService from "../../../../Service/DriverService";
import GDSESnackBar from "../../../../common/SnakBar/index";

class Driver extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                id: '',
                nic: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
                licenseNo: '',
                address: '',
                contactNo: '',
                driverAvailability: '',
                user: {
                    userName: '',
                    password: '',
                    role: ''
                }
            },

            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'update',
            btnColor: 'error'
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

        let res = await DriverService.putDriver(formData);
        if (this.state.btnLabel === "update") {
            let res = await DriverService.putDriver(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
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

    updateDriver = (data) => {
        console.log(data)


        this.setState({
            formData: {
                id: data.id,
                nic: data.nic,
                name: {
                    firstName: data.name.firstName,
                    lastName: data.name.lastName
                },
                licenseNo: data.licenseNo,
                address: data.address,
                contactNo: data.contactNo,
                email: data.email,
                user: {
                    userName: data.user.userName,
                    role: data.user.role,
                    password: data.user.password
                }
            }
        });
    };

    deleteDriver = async (id) => {
        let params = {
            id: id
        }
        let res = await DriverService.deleteDriver(params);
        console.log(res)

        if (res.status === 200) {
            let res = await DriverService.deleteDriverImages(id);
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    clearFields = () => {
        this.setState({
            formData: {
                id: '',
                nic: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
                licenseNo: '',
                address: '',
                contactNo: '',
                driverAvailability: '',
                user: {
                    userName: '',
                    password: '',
                    role: ''
                }
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
                                BOOK A CAR / DRIVER MANAGE
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.details}>
                        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitDriver}>
                            <Grid className={classes.textContainer}>
                                <TextValidator
                                    style={{ padding: '10px', width: '250px', marginTop: '10px' }}
                                    disabled
                                    id="outlined-basic"
                                    label="Register Id"
                                    variant="outlined"
                                    value={this.state.formData.id}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.id = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                                />
                                <TextValidator
                                    style={{ padding: '10px', width: '250px', marginTop: '10px' }}
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    value={this.state.formData.name.firstName}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.name.firstName = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                                />
                                <TextValidator
                                    style={{ padding: '10px', width: '250px' }}
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    value={this.state.formData.name.lastName}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.name.lastName = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                                />
                                <TextValidator
                                    style={{ padding: '10px', width: '250px' }}
                                    id="outlined-basic"
                                    label="License No"
                                    variant="outlined"
                                    value={this.state.formData.licenseNo}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.licenseNo = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                                />
                                <TextValidator
                                    style={{ padding: '10px', width: '250px' }}
                                    id="outlined-basic"
                                    label="Contact No"
                                    variant="outlined"
                                    value={this.state.formData.contactNo}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.contactNo = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                                />
                                <TextValidator
                                    style={{ padding: '10px', width: '250px' }}
                                    id="outlined-basic"
                                    label="NIC"
                                    variant="outlined"
                                    value={this.state.formData.nic}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.nic = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                                />
                                <TextValidator
                                    style={{ padding: '10px', width: '250px' }}
                                    disabled
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
                                    style={{ padding: '10px', width: '250px' }}
                                    disabled
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
                                />
                                <TextValidator
                                    style={{ padding: '10px', width: '250px' }}
                                    disabled
                                    id="outlined-basic"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    value={this.state.formData.user.password}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.user.password = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                                />
                                <TextValidator
                                    style={{ padding: '10px', width: '250px' }}
                                    id="outlined-basic"
                                    label="Address"
                                    variant="outlined"
                                    value={this.state.formData.address}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.address = e.target.value
                                        this.setState({ formData })
                                    }}
                                    validators={['required']}
                                />
                                <Grid style={{ marginBottom: '60px', marginRight: '410px' }}>
                                    <Button
                                        style={{ width: '200px', marginLeft: '400px', marginBottom: '-40px' }}
                                        variant="contained"
                                        label={this.state.btnLabel}
                                        type="submit" size="small"
                                        color={this.state.btnColor}
                                    >Update</Button>
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                        <Grid className={classes.upload}>
                            <Grid style={{ width: '30vw', height: '30vh', backgroundColor: '#eeeff1', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                                <IconButton backgroundColor="#bdc3c7" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" />
                                    <PhotoCamera style={{ fontSize: '40px', marginTop: '12px' }} />
                                </IconButton>
                                <Typography variant="body2">Upload Nic</Typography>
                            </Grid>
                            <Grid style={{ width: '30vw', height: '30vh', backgroundColor: '#eeeff1', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                                <IconButton backgroundColor="#bdc3c7" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" />
                                    <PhotoCamera style={{ fontSize: '40px', marginTop: '12px' }} />
                                </IconButton>
                                <Typography variant="body2">Upload License</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.table}>
                        <TableContainer component={Paper} style={{ height: '50vh', width: '80vw', backgroundColor: '#eeeff1' }}>
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
                                                <TableCell align="left">{row.id}</TableCell>
                                                <TableCell align="left">{row.name.firstName}</TableCell>
                                                <TableCell align="left">{row.name.lastName}</TableCell>
                                                <TableCell align="left">{row.licenseNo}</TableCell>
                                                <TableCell align="left">{row.contactNo}</TableCell>
                                                <TableCell align="left">{row.nic}</TableCell>
                                                <TableCell align="left">{row.address}</TableCell>
                                                <TableCell align="left">
                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.updateDriver(row);
                                                            }}
                                                        >
                                                            <EditIcon color="primary" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.deleteDriver(row.id)
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

export default withStyles(styleSheet)(Driver);