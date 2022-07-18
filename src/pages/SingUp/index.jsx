import React from 'react'
import {
    Avatar,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Paper,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Signup = () => {

    const paperStyle = {padding: 20, height: '70vh', width: '40vw', margin: "20px auto"}
    const headerStyle = {margin: 0}
    const avatarStyle = {backgroundColor: '#1bbd7e'}
    const marginTop = {marginTop: 5}

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>

                <form>
                    <TextField variant="standard" fullWidth label='Name' placeholder="Enter your name"/>
                    <TextField variant="standard" fullWidth label='Email' placeholder="Enter your email"/>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{display: 'initial'}}>
                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        </RadioGroup>
                    </FormControl>
                    <TextField variant="standard" fullWidth label='Phone Number' placeholder="Enter your phone number"/>
                    <TextField variant="standard" fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField variant="standard" fullWidth label='Confirm Password'
                               placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA"/>}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary' fullWidth>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default (Signup);