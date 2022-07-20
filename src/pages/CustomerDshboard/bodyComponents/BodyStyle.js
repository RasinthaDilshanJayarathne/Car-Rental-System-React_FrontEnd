import React from "react";
import {makeStyles} from "@material-ui/core";
import {blueGrey} from "@material-ui/core/colors";

export const useStyle = makeStyles((theme) => ({
    section: {
        marginTop: theme.spacing(3, 0),
    },

    //page
    pageTitle: {
        color: blueGrey["800"], marginBottom: theme.spacing(2), textTransform: "uppercase"
    }, pageSubTitle: {
        color: blueGrey["500"], margin: theme.spacing(1, 0),
    },

    // Home
    cardLable: {
        textTransform: "uppercase",
        color: "#fff",
        textAlign: "center",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
            fontsize: "0.8rem",
        },
    },
    cardTitle: {
        textTransform: "capitalize",
        color: "#fff",
        textAlign: "center",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
            fontsize: "1.8rem",
        },
    },
    card1: {
        backgroundColor: "#028EA0",
        borderRadius: "10px",
        boxShadow: "3px 3px #B2C8DF",
},
    card2: {
        backgroundColor: "#0589C4",
        borderRadius: "10px",
        boxShadow: "3px 3px #B2C8DF",
    },
    card3: {
        backgroundColor: "#FAC213",
        borderRadius: "10px",
        boxShadow: "3px 3px #B2C8DF",
    },
    card4: {
        backgroundColor: "#EA3F79",
        borderRadius: "10px",
        boxShadow: "3px 3px #B2C8DF",
    },
}))
