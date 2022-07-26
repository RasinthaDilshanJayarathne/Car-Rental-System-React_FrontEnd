import { Component } from "react";
import {styleSheet} from "../SignIn/styles";
import {withStyles} from "@mui/styles";
import {PhotoCamera} from "@mui/icons-material";
import {Button, IconButton, TextField,Grid} from "@mui/material";

class SignIn extends Component{
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
                        <TextField style={{marginTop:'-10px',width:'450px'}} id="outlined-basic" label="User Name" variant="outlined" />
                        <TextField style={{marginTop:'-40px',width:'450px'}} id="outlined-basic" label="Password" variant="outlined" />
                        <Button variant="contained" style={{width:'450px'}}>Login</Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(SignIn)