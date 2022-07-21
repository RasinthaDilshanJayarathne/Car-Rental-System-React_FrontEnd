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

function Customer(props) {
    const {classes} = props;

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

    return (
        <Grid className={classes.container}>
            <Grid className={classes.searchBar}>
                    <Grid className={classes.bookingPanel}>
                        <img src={logo} alt="" style={{width: '150px', marginTop: '-10px'}}/>
                        <Typography variant="h5" style={{marginLeft: '30px'}}>
                            BOOK A CAR / NO ADVANCE PAYMENT
                        </Typography>
                    </Grid>
                </Grid>
            <Grid className={classes.table}>
            <TableContainer component={Paper} style={{ height: '74vh'}}>
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
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.calories}</TableCell>
                            <TableCell align="left">{row.fat}</TableCell>
                            <TableCell align="left">{row.carbs}</TableCell>
                            <TableCell align="left">{row.protein}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.calories}</TableCell>
                            <TableCell align="left">{row.fat}</TableCell>
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
            <Grid className={classes.tableBtn}>
                <Button variant="contained">Contained</Button>
            </Grid>
        </Grid>
    );
}


export default withStyles(styleSheet)(Customer);