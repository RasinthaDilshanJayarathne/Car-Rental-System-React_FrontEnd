import React, {Component} from 'react'
import {Grid, Typography} from "@material-ui/core";
import {TextField} from "@mui/material";
import {styleSheet} from "../Home/styles";
import {withStyles} from "@mui/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logo from "../../../../assets/img/logo.png";
import rev1 from "../../../../assets/img/rev1.jpg";
import rev2 from "../../../../assets/img/rev2.jpg";
import rev3 from "../../../../assets/img/rev3.jpg";
import Carousel from "react-elastic-carousel";
import Button from '@mui/material/Button';
import Item from './Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  function createData(id, email, firstName, lastName, licenNo, contact, nic, address) {
    return { id, email, firstName, lastName, licenNo, contact, nic,address};
}

const rows = [
    createData('DR00-001','YES','Nimal','Perera', 2423452,'071-3123342','42345124','Galle'),
    createData('DR00-002','NO','Kamal','Gamage',2373453, '071-3123342','42345124','Colombo'),
    createData('DR00-003','NO','Amal','Soisa',2624567,'071-3123342','42345124','Panadura'),
    createData('DR00-004','YES','Nadun','Hettiarachci',3053434,'071-3123342','42345124','Matara'),
    createData('DR00-005','YES','Wimal','Gamage',3562432,'071-3123342','42345124','Galle'),
    createData('DR00-006','NO','Amal','Soisa',2624567,'071-3123342','42345124','Panadura'),
    createData('DR00-007','YES','Nadun','Hettiarachci',3053434,'071-3123342','42345124','Matara'),
    createData('DR00-008','YES','Wimal','Gamage',3562432,'071-3123342','42345124','Galle'),
];

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (

            <Grid className={classes.container}>
                <Grid className={classes.searchBar}>
                    <img src={logo} alt="" style={{width: '150px', marginTop: '-10px',marginLeft:'250px'}}/>
                    <Typography variant="h5" style={{marginRight: '250px',color: '#000d6b'}}>
                        BOOK A CAR / DRIVER SHEDULE
                    </Typography>
                </Grid>
                <Grid className={classes.subContainer}>
                    <Grid className={classes.bookingPanel}>
                        <TextField id="outlined-basic" label="Car" variant="outlined"
                                style={{margin: '10px'}}/>
                        <TextField id="outlined-basic" label="Location" variant="outlined"
                                style={{margin: '10px'}}/>
                        <TextField id="outlined-basic" label="Pick-Up-Date" variant="outlined"
                                style={{margin: '10px'}}/>
                        <TextField id="outlined-basic" label="Pick-Up-Time" variant="outlined"
                                style={{margin: '10px'}}/>
                        <Button variant="outlined" color='error' style={{
                            margin: '10px',
                            height: '52px',
                            border: '#fe5b3d'
                        }}>SEARCH CAR NOW</Button>
                    </Grid>
                    <Grid className={classes.driverContainer}>
                        <Grid className={classes.sheduleTable}>
                        <TableContainer component={Paper} style={{ height: '65vh',width:'50vw',backgroundColor:'#eeeff1'}}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">Driver Id</TableCell>
                            <TableCell align="left">Driver Name</TableCell>
                            <TableCell align="left">Vehicle Name</TableCell>
                            <TableCell align="left">Vehicle Id</TableCell>
                            <TableCell align="left">Pick-Up-Date</TableCell>
                            <TableCell align="left">Pick-Up-Time</TableCell>
                            <TableCell align="left">Location</TableCell>
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
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                        </Grid>
                        <Grid className={classes.sheduleDetail}>
                        <iframe style={{ height: '70vh',width: '30vw',borderRadius:'15px'}}
                            src="https://maps.google.com/maps?q=Srilanka%20Galle&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                        </iframe>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Home)
