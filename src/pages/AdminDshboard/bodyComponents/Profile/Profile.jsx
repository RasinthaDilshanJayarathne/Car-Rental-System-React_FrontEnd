import React, { Component } from 'react'
import { Grid, Typography } from "@material-ui/core";
import { styleSheet } from "../Profile/styles";
import { withStyles } from "@mui/styles";
import logo from "../../../../assets/img/logo.png";
import rev1 from "../../../../assets/img/rev1.jpg";
import { Button, IconButton, TextField } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";


class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props
        return (
            <>
                <Grid className={classes.container}>
                    <Grid className={classes.searchBar}>
                        <img src={logo} alt="" style={{ width: '150px', marginTop: '-10px', marginLeft: '250px' }} />
                        <Typography variant="h5" style={{ marginRight: '250px', color: '#000d6b' }}>
                            BOOK A CAR / NO ADVANCE PAYMENT
                        </Typography>
                    </Grid>
                    <Grid className={classes.customerContainer}>
                        <Grid className={classes.profile}>
                            <Grid
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '180px',
                                    marginLeft: '45px',
                                    display: 'flex',
                                    backgroundColor: 'white',
                                    alignItems: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" />
                                    <PhotoCamera style={{ fontSize: '40px'}} />
                                </IconButton>
                            </Grid>
                            <Grid>

                            </Grid>
                            <Grid style={{ marginLeft: '70px' }}>
                                <TextField style={{ padding: '10px', width: '350px' }} disabled id="outlined-basic" label="User Name" variant="outlined" />
                                <TextField style={{ padding: '10px', width: '350px' }} disabled id="outlined-basic" label="Register Id" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid className={classes.details}>
                            <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitVehicle}>
                                <Grid className={classes.textContainer}>
                                    <Grid className={classes.subTextContainer}>
                                        <TextField style={{ padding: '10px', width: '350px', marginLeft: '10px' }} id="outlined-basic" label="Register Id" variant="outlined" />
                                        <TextField style={{ padding: '10px', width: '350px', marginLeft: '10px' }} id="outlined-basic" label="E-mail" variant="outlined" />
                                        <TextField style={{ padding: '10px', width: '350px', marginLeft: '10px' }} id="outlined-basic" label="First Name" variant="outlined" />
                                        <TextField style={{ padding: '10px', width: '350px', marginLeft: '10px' }} id="outlined-basic" label="Last Name" variant="outlined" />
                                    </Grid>
                                    <Grid className={classes.subTextContainer}>
                                        <TextField style={{ padding: '10px', width: '350px', marginLeft: '10px' }} id="outlined-basic" label="License No" variant="outlined" />
                                        <TextField style={{ padding: '10px', width: '350px', marginLeft: '10px' }} id="outlined-basic" label="Contact No" variant="outlined" />
                                        <TextField style={{ padding: '10px', width: '350px', marginLeft: '10px' }} id="outlined-basic" label="NIC" variant="outlined" />
                                        <TextField style={{ padding: '10px', width: '350px', marginLeft: '10px' }} id="outlined-basic" label="Address" variant="outlined" />
                                    </Grid>
                                </Grid>
                                <Grid className={classes.image}>
                                    <Grid
                                        style={{
                                            width: '350px',
                                            height: '200px',
                                            backgroundColor: 'black',
                                            marginLeft: '10px',
                                            backgroundColor: '#eeeff1',
                                            display: 'flex',
                                            alignItems: 'center',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }
                                        }>
                                        <IconButton color="primary" aria-label="upload picture" component="label">
                                            <input hidden accept="image/*" type="file" />
                                            <PhotoCamera style={{ fontSize: '40px' }} />
                                        </IconButton>
                                        <Typography variant="body2">Upload Nic</Typography>
                                    </Grid>
                                    <Grid style={{ width: '350px', height: '200px', backgroundColor: 'black', marginLeft: '10px', backgroundColor: '#eeeff1', display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'center', }}>
                                        <IconButton color="primary" aria-label="upload picture" component="label">
                                            <input hidden accept="image/*" type="file" />
                                            <PhotoCamera style={{ fontSize: '40px' }} />
                                        </IconButton>
                                        <Typography variant="body2">Upload License</Typography>
                                    </Grid>
                                </Grid>
                                <Grid style={{ marginTop: '-20px' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{ width: '150px', marginLeft: '30px' }}
                                    >
                                        Update</Button>
                                </Grid>
                            </ValidatorForm>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(Profile)
