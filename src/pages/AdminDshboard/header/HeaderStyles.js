import {makeStyles} from "@material-ui/core";
import {blue, blueGrey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    //wrapper of main container
    wrapper: {
        // minHeight: "100vh",
        // height: "auto",
        // background: "#efefef",
        marginTop: "-16px",
        padding: theme.spacing(2, 2, 0, 30),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2, 2),
            marginTop: "45px",
        },
    },

    //Side nav
    drawerPaper: {
        width: "250px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "0px",
        },
    },

    navLinks: {
        color: blueGrey["A400"],
        "& :hover , &:hover div": {
            color: blue["A200"],
        },
        " & div": {
            color: blueGrey["A400"],
        },
    },

    activeNavLinks: {
        color: blue["A700"],
        "& div": {
            color: blue["A700"],
        },
    },

    navButton: {
        width: " 100%",
        textTransform: "capitalize",
    },
}));
