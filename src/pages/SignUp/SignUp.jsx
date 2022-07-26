import { Component } from "react";
import {styleSheet} from "../SignUp/styles";
import {withStyles} from "@mui/styles";
import {PhotoCamera} from "@mui/icons-material";
import {Button, IconButton, TextField,Grid} from "@mui/material";

class SignUp extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {classes} = this.props;
        return(
            <Grid className={classes.container}>
                <Grid className={classes.subContainer}>
                    <Grid className={classes.uploadPhoto}>
                        <Grid style={{width:'180px',height:'180px',backgroundColor:'#eeeff1',borderRadius:'180px', display: 'flex',flexWrap: 'wrap',flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera style={{fontSize:'40px',marginTop:'12px'}}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid className={classes.form}>
                        <Grid style={{width:'21vw',height:'45vh',display: 'flex',flexWrap: 'wrap',flexDirection: 'row',alignItems: 'center',justifyContent: 'center',marginTop:'15px'}}>
                            <TextField style={{marginTop:'-10px',width:'250px'}} id="outlined-basic" label="Register Id" variant="outlined" />
                            <TextField style={{marginTop:'-10px',width:'250px'}} id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField style={{marginTop:'-60px',width:'200px',marginLeft:'4px'}} id="outlined-basic" label="License No" variant="outlined" />
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera style={{fontSize:'35px',marginBottom:'50px',marginLeft:'5px'}}/>
                            </IconButton>
                            <TextField style={{marginTop:'-60px',width:'250px'}} id="outlined-basic" label="Contact No" variant="outlined" />
                            <TextField style={{marginTop:'-10px',width:'250px'}} id="outlined-basic" label="Password" variant="outlined" />
                        </Grid>
                        <Grid style={{width:'21vw',height:'45vh',display: 'flex',flexWrap: 'wrap',flexDirection: 'row',alignItems: 'center',justifyContent: 'center',marginTop:'15px'}}>
                            <TextField style={{marginTop:'-10px',width:'250px'}} id="outlined-basic" label="E-mail" variant="outlined" />
                            <TextField style={{marginTop:'-10px',width:'250px'}} id="outlined-basic" label="Last Name" variant="outlined" />
                            <TextField style={{marginTop:'-60px',width:'200px',marginLeft:'4px'}} id="outlined-basic" label="NIC" variant="outlined" />
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera style={{fontSize:'35px',marginBottom:'50px',marginLeft:'5px'}}/>
                            </IconButton>
                            <TextField style={{marginTop:'-60px',width:'250px'}} id="outlined-basic" label="Address" variant="outlined" />
                            <TextField style={{marginTop:'-10px',width:'250px'}} id="outlined-basic" label="Conform Password" variant="outlined" />
                        </Grid>
                        <Grid style={{width:'42vw',height:'15vh',display: 'flex',flexWrap: 'wrap',flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <Button variant="contained" style={{width:'150px'}}>Register Now</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(SignUp)