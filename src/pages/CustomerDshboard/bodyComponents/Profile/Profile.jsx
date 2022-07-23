import React, {Component} from 'react'
import {Grid, Typography} from "@material-ui/core";
import {styleSheet} from "../Profile/styles";
import {withStyles} from "@mui/styles";
import logo from "../../../../assets/img/logo.png";
import rev1 from "../../../../assets/img/rev1.jpg";
import {Button, IconButton, TextField} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";


class Profile extends Component {
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
                        BOOK A CAR / NO ADVANCE PAYMENT
                    </Typography>
                </Grid>
                <Grid className={classes.customerContainer}>
                    <Grid className={classes.profile}>
                        <Grid>
                            <img src={rev1} alt="" style={{width:'200px',height:'200px',borderRadius:'180px',marginLeft:'45px'}}/>
                        </Grid>
                        <Grid>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file"/>
                                <PhotoCamera style={{fontSize:'40px',marginTop:'160px',marginLeft:'-30px'}}/>
                            </IconButton>
                        </Grid>
                        <Grid style={{marginLeft:'70px'}}> 
                            <TextField style={{padding:'10px',width:'350px'}} disabled id="outlined-basic" label="User Name" variant="outlined" />
                            <TextField style={{padding:'10px',width:'350px'}} disabled id="outlined-basic" label="Register Id" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid className={classes.details}>
                        <Typography variant="h4" gutterBottom style={{textAlign:'center',marginTop:'20px'}}>My Profile</Typography>
                        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitVehicle}></ValidatorForm>
                            <Grid style={{marginTop:'-20px',marginLeft:'15px'}}>
                                    <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="Register Id" variant="outlined" />
                                    <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="E-mail" variant="outlined" />
                                    <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="First Name" variant="outlined" />
                                    <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="Last Name" variant="outlined" />
                                    <TextField style={{padding:'10px',width:'295px'}} id="outlined-basic" label="License No" variant="outlined" />
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file" />
                                        <PhotoCamera style={{fontSize:'40px',marginTop:'12px'}}/>
                                    </IconButton>
                                    <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="Contact No" variant="outlined" />
                                    <TextField style={{padding:'10px',width:'295px'}} id="outlined-basic" label="NIC" variant="outlined" />
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file"/>
                                        <PhotoCamera style={{fontSize:'40px',marginTop:'12px'}}/>
                                    </IconButton>
                                    <TextField style={{padding:'10px',width:'350px'}} id="outlined-basic" label="Address" variant="outlined" />

                                </Grid>
                                <Grid style={{marginBottom:'60px',marginRight:'410px'}}>
                                    <Button variant="contained" style={{width:'150px'}}>View</Button>
                                    <Button variant="contained" style={{width:'150px',marginLeft:'10px',backgroundColor:'#f39c12'}}>Update</Button>
                                </Grid>
                            </Grid>
                        <ValidatorForm/>
                    </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Profile)
