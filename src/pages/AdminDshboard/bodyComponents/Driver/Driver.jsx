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

class Driver extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {classes} = this.props;
      
        function createData(id, email, firstName, lastName, licenNo, contact, nic, address) {
            return { id, email, firstName, lastName, licenNo, contact, nic,address};
        }

        const rows = [
            createData('D00-001','rasintha@gmail.com','Nimal','Perera', 2423452,'071-3123342','42345124','Galle'),
            createData('D00-002','rasintha@gmail.com','Kamal','Gamage',2373453, '071-3123342','42345124','Colombo'),
            createData('D00-003','rasintha@gmail.com','Amal','Soisa',2624567,'071-3123342','42345124','Panadura'),
            createData('D00-004','rasintha@gmail.com','Nadun','Hettiarachci',3053434,'071-3123342','42345124','Matara'),
            createData('D00-005','rasintha@gmail.com','Wimal','Gamage',3562432,'071-3123342','42345124','Galle'),
            createData('D00-006','rasintha@gmail.com','Rasintha','Perera',1596756,'071-3123342','42345124','Matara'),
            createData('D00-007','rasintha@gmail.com','Yasiru','Soisa',237876,'071-3123342','42345124','Panadura'),
            createData('D00-008','rasintha@gmail.com','Minura','Hettiarachci',2627564,'071-3123342','42345124','Matara'),
            createData('D00-009','rasintha@gmail.com','Yasidu','Soisa',3055632,'071-3123342','42345124','Colombo'),
            createData('D00-0010','rasintha@gmail.com','Upali','de Silva',3561233,'071-3123342','42345124','Panadura'),
            createData('D00-0011','rasintha@gmail.com','Sunil','Hettiarachci',1593546,'071-3123342','42345124','Colombo'),
            createData('D00-0012','rasintha@gmail.com','Supun','Perera',237978,'071-3123342','42345124','Matara'),
            createData('D00-0013','rasintha@gmail.com','Kanthi','Gamage',2622345,'071-3123342','42345124','Colombo'),
            createData('D00-0014','rasintha@gmail.com','Iresha','Hettiarachci',305578,'071-3123342','42345124','Galle'),
            createData('D00-0015','rasintha@gmail.com','Naduni','Perera',3565673,'071-3123342','42345124','Matara'),
        ];
        return (
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
                <Grid className={classes.textContainer}>
                    <TextField style={{padding:'10px',width:'250px'}} id="outlined-basic" label="Register Id" variant="outlined" />
                    <TextField style={{padding:'10px',width:'250px'}} id="outlined-basic" label="E-mail" variant="outlined" />
                    <TextField style={{padding:'10px',width:'250px'}} id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField style={{padding:'10px',width:'250px'}} id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField style={{padding:'10px',width:'250px'}} id="outlined-basic" label="License No" variant="outlined" />
                    {/* <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera style={{fontSize:'40px',marginTop:'12px'}}/>
                    </IconButton> */}
                    <TextField style={{padding:'10px',width:'250px'}} id="outlined-basic" label="Contact No" variant="outlined" />
                    <TextField style={{padding:'10px',width:'250px'}} id="outlined-basic" label="NIC" variant="outlined" />
                    {/* <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file"/>
                        <PhotoCamera style={{fontSize:'40px',marginTop:'12px'}}/>
                        </IconButton> */}
                    <TextField style={{padding:'10px',width:'250px'}} id="outlined-basic" label="Address" variant="outlined" />
                    <Grid style={{marginBottom:'60px',marginRight:'410px'}}>
                        <Button style={{width:'200px',marginLeft:'400px',backgroundColor:'#2ed573'}} variant="contained">Save</Button>
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
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.firstName}</TableCell>
                            <TableCell align="left">{row.lastName}</TableCell>
                            <TableCell align="left">{row.licenNo}</TableCell>
                            <TableCell align="left">{row.contact}</TableCell>
                            <TableCell align="left">{row.nic}</TableCell>
                            <TableCell align="left">{row.address}</TableCell>
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
        );
    }
}

export default withStyles(styleSheet)(Driver);