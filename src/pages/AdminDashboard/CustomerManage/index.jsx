import { withStyles } from "@mui/material";
import { styleSheet } from "../CustomerManage/styles";

const { Component } = require("react");

class CustomerManage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Grid></Grid>
        )
    }
}

export default withStyles(styleSheet)(CustomerManage)