import { Component } from "react";
import { stylesSheet } from "./webStyles";
import { withStyles } from "@mui/styles";
import { Button, Card, CardActions, CardContent, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import ios from "../../assets/img/ios.png";
import android from "../../assets/img/android.png";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from '../../common/DatePicker/index'
import car1 from "../../assets/img/car1.png"
import car2 from "../../assets/img/car2.png"
import car3 from "../../assets/img/car3.png"
import car4 from "../../assets/img/car4.png"
import car5 from "../../assets/img/car5.png"
import car6 from "../../assets/img/car6.png"
import about from "../../assets/img/about.png"
import rev1 from "../../assets/img/rev1.jpg"
import rev2 from "../../assets/img/rev2.jpg"
import rev3 from "../../assets/img/rev3.jpg"

class WebSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true })
    };
    handleClose = () => {

        this.setState({ open: false })
    };

    render() {
        const { classes } = this.props
        return (
            <>
                <Grid className={classes.container}>
                    <Grid className={classes.homeContainer}>
                        <Grid className={classes.navigationBar}>
                            <Tabs
                                centered
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="secondary tabs example"
                            >
                                <Tab value="one" label="Home" />
                                <Tab value="two" label="Ride" />
                                <Tab value="three" label="Services" />
                                <Tab value="four" label="About" />
                                <Tab value="four" label="Reviews" />
                                {/*<Button variant="contained" style={{marginLeft: '700px', marginTop: '12px', height: '32px'}}
                            >Sing In</Button>*/}
                                <Button variant="outlined" style={{ marginLeft: '800px', marginTop: '7px', height: '32px', borderRadius: '15px' }} onClick={this.handleClickOpen}>Sing
                                    Up
                                </Button>
                            </Tabs>
                        </Grid>

                        <Grid className={classes.bodyContainer}>
                            <Grid className={classes.mainName}>
                                <Grid style={{ fontFamily: 'Fira Sans' }}>
                                    <h1 style={{ marginLeft: '100px', letterSpacing: '2px', fontSize: '3.5rem' }}><span
                                        style={{ color: '#fe5b3d' }}>Looking</span> to <br /> rent a car</h1>

                                    <p style={{ marginLeft: '100px', fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet,
                                        consectetur adipisicing
                                        elit. Animi rerum saepe sunt, <br /> totam! Debitis distinctio est ex molestiae
                                        molestias nisi
                                        tempora.</p>

                                    <img src={ios} alt=""
                                        style={{ width: '150px', height: '50px', marginLeft: '100px' }} />
                                    <img src={android} alt=""
                                        style={{ width: '150px', height: '50px', marginLeft: '30px' }} />
                                </Grid>
                            </Grid>

                            <Grid className={classes.selectDate}>
                                <Grid className={classes.fixDate}>
                                    <TextField id="outlined-basic" label="Location" variant="outlined"
                                        style={{ margin: '10px' }} />
                                    {/* <TextField id="outlined-basic" label="Pick-Up-Date" variant="outlined"
                                        style={{ margin: '10px' }} /> */}

                                    <DatePicker style={{ margin: '10px' }}/>
                                    {/* <TextField id="outlined-basic" label="Return-Date" variant="outlined"
                                        style={{ margin: '10px' }} /> */}
                                    <DatePicker style={{ margin: '10px' }}/>
                                    <Button variant="contained" style={{
                                        margin: '10px',
                                        height: '52px',
                                        backgroundColor: '#fe5b3d'
                                    }}>Search</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid className={classes.serviceContainer}>
                        <Grid className={classes.nameContainer}>
                            <Grid>
                                <Typography variant="h6" style={{ marginLeft: '100px' }}>HOW IT WORK</Typography>
                                <Typography variant="h4">Rent With 3 Easy Steps</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.stepContainer}>
                            <Grid className={classes.threeStep}>
                                <div className={classes.stepCard}>
                                    <AddLocationAltIcon style={{ fontSize: '60px', color: '#fe5b3d' }} />
                                    <Typography variant="h5">Choose A Location</Typography>
                                    <p style={{ textAlign: 'center', padding: '10px', fontSize: '18px' }}>Lorem ipsum dolor
                                        sit amet,
                                        consectetur adipisicing elit. Aperiam consectetur earum excepturi. Architecto
                                        aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                        nihil nobis non officia tempora veritatis.
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Aperiam consectetur earum excepturi. Architecto
                                        aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                        nihil nobis non officia tempora veritatis.</p>
                                </div>

                            </Grid>
                            <Grid className={classes.threeStep}>
                                <div className={classes.stepCard}>
                                    <PictureInPictureIcon style={{ fontSize: '60px', color: '#fe5b3d', }} />
                                    <Typography variant="h5" style={{ marginLeft: '20px' }}>Pick-Up Date</Typography>
                                    <p style={{ textAlign: 'center', padding: '10px', fontSize: '18px' }}>Lorem ipsum dolor
                                        sit amet,
                                        consectetur adipisicing elit. Aperiam consectetur earum excepturi. Architecto
                                        aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                        nihil nobis non officia tempora veritatis.
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Aperiam consectetur earum excepturi. Architecto
                                        aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                        nihil nobis non officia tempora veritatis.</p>
                                </div>
                            </Grid>
                            <Grid className={classes.threeStep}>
                                <div className={classes.stepCard}>
                                    <BookOnlineIcon style={{ fontSize: '60px', color: '#fe5b3d', }} />
                                    <Typography variant="h5" style={{ marginLeft: '40px' }}>Book A Car</Typography>
                                    <p style={{ textAlign: 'center', padding: '10px', fontSize: '18px' }}>Lorem ipsum dolor
                                        sit amet,
                                        consectetur adipisicing elit. Aperiam consectetur earum excepturi. Architecto
                                        aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                        nihil nobis non officia tempora veritatis.
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Aperiam consectetur earum excepturi. Architecto
                                        aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                        nihil nobis non officia tempora veritatis.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid className={classes.rideContainer}>
                        <Grid className={classes.nameContainer}>
                            <Grid>
                                <Typography variant="h6" style={{ marginLeft: '100px' }}>BEST SERVICE</Typography>
                                <Typography variant="h4" style={{ marginLeft: '15px' }}>Explore Out Top Deals</Typography>
                                <Typography variant="h4">Form Top Rated Dealers</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.carContainer}>
                            <Grid className={classes.carCard}>
                                <Grid className={classes.carImage}>
                                    <Card sx={{ width: '400px', height: '410px', borderRadius: '10px' }}>
                                        <div style={{
                                            padding: '10px',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover'
                                        }}>
                                            <img src={car1} alt=""
                                                style={{ height: '200px', width: '380px', borderRadius: '10px' }} />
                                        </div>
                                        <CardContent style={{ marginTop: '-20px' }}>
                                            {/*<Button variant="outlined" style={{height:'30px',width:'80px'}}>2017</Button>*/}
                                            <div className={classes.carPackge}>
                                                <DataSaverOffIcon style={{
                                                    fontSize: '25px',
                                                    marginTop: '5px',
                                                    backgroundColor: 'yellow',
                                                    cursor: 'pointer'
                                                }} href="#" />
                                                <Typography variant="body1" color="blue" style={{ marginTop: '10px', marginLeft: '-10px' }}>
                                                    General Package
                                                </Typography>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div"
                                                style={{ marginTop: '15px' }}>
                                                Suzuki Alto - Premium - Manual
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                64,350.00 lkr - month
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                2400 KM - Free KM for a month
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ marginTop: '-15px' }}>
                                            <Button variant="contained" fullWidth style={{ borderRadius: '12px' }}>Rent
                                                Now</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid className={classes.carImage}>
                                    <Card sx={{ width: '400px', height: '410px', borderRadius: '10px' }}>
                                        <div style={{
                                            padding: '10px',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover'
                                        }}>
                                            <img src={car2} alt=""
                                                style={{ height: '200px', width: '380px', borderRadius: '10px' }} />
                                        </div>
                                        <CardContent style={{ marginTop: '-20px' }}>
                                            {/*<Button variant="outlined" style={{height:'30px',width:'80px'}}>2017</Button>*/}
                                            <div className={classes.carPackge}>
                                                <DataSaverOffIcon style={{
                                                    fontSize: '25px',
                                                    marginTop: '5px',
                                                    backgroundColor: 'yellow',
                                                    cursor: 'pointer'
                                                }} href="#" />
                                                <Typography variant="body1" color="blue" style={{ marginTop: '10px', marginLeft: '-10px' }}>
                                                    General Package
                                                </Typography>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div"
                                                style={{ marginTop: '15px' }}>
                                                Toyota Prius C/ Aqua - Auto
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                110,330.00 lkr - month
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                2400 KM - Free KM for a month
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ marginTop: '-15px' }}>
                                            <Button variant="contained" fullWidth style={{ borderRadius: '12px' }}>Rent
                                                Now</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid className={classes.carCard}>
                                <Grid className={classes.carImage}>
                                    <Card sx={{ width: '400px', height: '410px', borderRadius: '10px' }}>
                                        <div style={{
                                            padding: '10px',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover'
                                        }}>
                                            <img src={car3} alt=""
                                                style={{ height: '200px', width: '380px', borderRadius: '10px' }} />
                                        </div>
                                        <CardContent style={{ marginTop: '-20px' }}>
                                            {/*<Button variant="outlined" style={{height:'30px',width:'80px'}}>2017</Button>*/}
                                            <div className={classes.carPackge}>
                                                <AutoAwesomeIcon style={{
                                                    fontSize: '25px',
                                                    marginTop: '5px',
                                                    backgroundColor: 'yellow',
                                                    cursor: 'pointer'
                                                }} href="#" />
                                                <Typography variant="body1" color="blue" style={{ marginTop: '10px', marginLeft: '-10px' }}>
                                                    Premium Package
                                                </Typography>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div"
                                                style={{ marginTop: '15px' }}>
                                                Toyota Corolla Axio/ NZE141
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                120,330.00 lkr - month
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                2400 KM - Free KM for a month
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ marginTop: '-15px' }}>
                                            <Button variant="contained" fullWidth style={{ borderRadius: '12px' }}>Rent
                                                Now</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid className={classes.carImage}>
                                    <Card sx={{ width: '400px', height: '410px', borderRadius: '10px' }}>
                                        <div style={{
                                            padding: '10px',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover'
                                        }}>
                                            <img src={car4} alt=""
                                                style={{ height: '200px', width: '380px', borderRadius: '10px' }} />
                                        </div>
                                        <CardContent style={{ marginTop: '-20px' }}>
                                            {/*<Button variant="outlined" style={{height:'30px',width:'80px'}}>2017</Button>*/}
                                            <div className={classes.carPackge}>
                                                <AutoAwesomeIcon style={{
                                                    fontSize: '25px',
                                                    marginTop: '5px',
                                                    backgroundColor: 'yellow',
                                                    cursor: 'pointer'
                                                }} href="#" />
                                                <Typography variant="body1" color="blue" style={{ marginTop: '10px', marginLeft: '-10px' }}>
                                                    Premium Package
                                                </Typography>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div"
                                                style={{ marginTop: '15px' }}>
                                                Perodua Bezza Sedan - Auto
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                120,330.00 lkr - month
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                2400 KM - Free KM for a month
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ marginTop: '-15px' }}>
                                            <Button variant="contained" fullWidth style={{ borderRadius: '12px' }}>Rent
                                                Now</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid className={classes.carCard}>
                                <Grid className={classes.carImage}>
                                    <Card sx={{ width: '400px', height: '410px', borderRadius: '10px' }}>
                                        <div style={{
                                            padding: '10px',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover'
                                        }}>
                                            <img src={car5} alt=""
                                                style={{ height: '200px', width: '380px', borderRadius: '10px' }} />
                                        </div>
                                        <CardContent style={{ marginTop: '-20px' }}>
                                            {/*<Button variant="outlined" style={{height:'30px',width:'80px'}}>2017</Button>*/}
                                            <div className={classes.carPackge}>
                                                <DiamondIcon style={{
                                                    fontSize: '25px',
                                                    marginTop: '5px',
                                                    backgroundColor: 'yellow',
                                                    cursor: 'pointer'
                                                }} href="#" />
                                                <Typography variant="body1" color="blue" style={{ marginTop: '10px', marginLeft: '-10px' }}>
                                                    Luxury Package
                                                </Typography>
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div"
                                                style={{ marginTop: '15px' }}>
                                                Mercedes
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                300,000.00 lkr - month
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                2400 KM - Free KM for a month
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ marginTop: '-15px' }}>
                                            <Button variant="contained" fullWidth style={{ borderRadius: '12px' }}>Rent
                                                Now</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid className={classes.carImage}>
                                    <Card sx={{ width: '400px', height: '410px', borderRadius: '10px' }}>
                                        <div style={{
                                            padding: '10px',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover'
                                        }}>
                                            <img src={car6} alt=""
                                                style={{ height: '200px', width: '380px', borderRadius: '10px' }} />
                                        </div>
                                        <CardContent style={{ marginTop: '-20px' }}>

                                            <div className={classes.carPackge}>
                                                <DiamondIcon style={{
                                                    fontSize: '25px',
                                                    marginTop: '5px',
                                                    backgroundColor: 'yellow',
                                                    cursor: 'pointer'
                                                }} href="#" />
                                                <Typography variant="body1" color="blue" style={{ marginTop: '10px', marginLeft: '-10px' }}>
                                                    Luxury Package
                                                </Typography>
                                            </div>

                                            <Typography gutterBottom variant="h5" component="div"
                                                style={{ marginTop: '15px' }}>
                                                Toyota Premio
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                227,150.00 lkr - month
                                            </Typography>
                                            <Typography variant="body1" color="#fe5b3d">
                                                2400 KM - Free KM for a month
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ marginTop: '-15px' }}>
                                            <Button variant="contained" fullWidth style={{ borderRadius: '12px' }}>Rent
                                                Now</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid className={classes.aboutContainer}>
                        <Grid className={classes.nameContainer}>
                            <Grid>
                                <Typography variant="h6" style={{ marginLeft: '150px' }}>ADOUT US</Typography>
                                <Typography variant="h4" style={{ marginLeft: '15px' }}>Best Customer Experience</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.aboutImg}>
                            <img src={about} alt="" style={{ height: '400px', marginLeft: '-50px' }} />
                        </Grid>
                        <Grid className={classes.aboutText}>
                            <div style={{ marginTop: '80px', width: '680px' }}>
                                <Typography gutterBottom variant="h4" style={{ color: '#fe5b3d' }}>
                                    About Us
                                </Typography>
                                <p style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                                    Aperiam consectetur earum excepturi.
                                    Architecto
                                    aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                    nihil nobis non officia tempora veritatis.
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Aperiam consectetur earum excepturi. Architecto
                                    aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                    nihil nobis non officia tempora veritatis.</p>
                                <p style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                                    Aperiam consectetur earum excepturi.
                                    Architecto
                                    aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                    nihil nobis non officia tempora veritatis.
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Aperiam consectetur earum excepturi. Architecto
                                    aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                    nihil nobis non officia tempora veritatis.</p>

                                <Button variant="contained">Learn More</Button>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid className={classes.reviewContainer}>
                        <Grid className={classes.reviewNameContainer}>
                            <Grid>
                                <Typography variant="h6" style={{ marginLeft: '150px' }}>REVIEWS</Typography>
                                <Typography variant="h4" style={{ marginLeft: '15px' }}>Whats Our Customer Say</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.reviewCard}>
                            <Grid className={classes.cards}>
                                <Grid className={classes.customerCard}>
                                    <Grid className={classes.subCards}>

                                        <div className={classes.customerImg}
                                            style={{
                                                backgroundImage: `url(${rev1})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover'
                                            }}
                                        >
                                            <Typography variant="h6"
                                                style={{ marginTop: '150px', width: '300px', marginLeft: '-75px' }}>Rasintha
                                                Dilshan Jayarathne</Typography>
                                            <div className={classes.start}>
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                            </div>
                                            <p style={{ width: '400px', marginLeft: '-140px', textAlign: 'center', marginTop: '20px' }}>Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                                                Aperiam consectetur earum excepturi.
                                                Architecto
                                                aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                                nihil nobis non officia tempora veritatis.
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid className={classes.customerCard}>
                                    <Grid className={classes.subCards}>
                                        <div className={classes.customerImg}
                                            style={{
                                                backgroundImage: `url(${rev2})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover'
                                            }}
                                        >
                                            <Typography variant="h6"
                                                style={{ marginTop: '150px', width: '300px', marginLeft: '-75px' }}>Rasintha
                                                Dilshan Jayarathne</Typography>
                                            <div className={classes.start}>
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarHalfIcon style={{ color: '#fe5b3d' }} />
                                            </div>
                                            <p style={{ width: '400px', marginLeft: '-140px', textAlign: 'center', marginTop: '20px' }}>Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                                                Aperiam consectetur earum excepturi.
                                                Architecto
                                                aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                                nihil nobis non officia tempora veritatis.
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid className={classes.customerCard}>
                                    <Grid className={classes.subCards}>
                                        <div className={classes.customerImg}
                                            style={{
                                                backgroundImage: `url(${rev3})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover'
                                            }}
                                        >
                                            <Typography variant="h6"
                                                style={{ marginTop: '150px', width: '300px', marginLeft: '-75px' }}>Rasintha
                                                Dilshan Jayarathne</Typography>
                                            <div className={classes.start}>
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                                <StarIcon style={{ color: '#fe5b3d' }} />
                                            </div>
                                            <p style={{ width: '400px', marginLeft: '-140px', textAlign: 'center', marginTop: '20px' }}>Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                                                Aperiam consectetur earum excepturi.
                                                Architecto
                                                aspernatur autem culpa cumque ducimus et, excepturi illo impedit, iste molestiae,
                                                nihil nobis non officia tempora veritatis.
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>


                <Dialog
                    //fullWidth
                    maxWidth="sm=6"
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {/* <Typography>Tittle Here</Typography>
                        <IconButton aria-label="close" onClick={this.handleClose}>
                            <CloseIcon />
                        </IconButton> */}
                    </DialogTitle>
                    <DialogContent>
                        <Grid className={classes.PopContainer}>
                            <Grid className={classes.profileContainer}></Grid>
                            <Grid className={classes.textContainer} container columnSpacing={5}>
                                <Grid className={classes.textDetail}>
                                    <TextField id="outlined-basic" label="Register Id" variant="outlined" />
                                    <TextField id="outlined-basic" label="Register Id" variant="outlined" />
                                    <TextField id="outlined-basic" label="Register Id" variant="outlined" />
                                    <TextField id="outlined-basic" label="Register Id" variant="outlined" />
                                </Grid>
                                <Grid className={classes.textDetail}>
                                    <TextField id="outlined-basic" label="Register Id" variant="outlined" />
                                    <TextField id="outlined-basic" label="Register Id" variant="outlined" />
                                    <TextField id="outlined-basic" label="Register Id" variant="outlined" />
                                    <TextField id="outlined-basic" label="Register Id" variant="outlined" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    {/* <DialogActions>
                        <Button onClick={this.handleClose}>Disagree</Button>
                        <Button onClick={this.handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions> */}
                </Dialog>
            </>
        )
    }
}

export default withStyles(stylesSheet)(WebSite)