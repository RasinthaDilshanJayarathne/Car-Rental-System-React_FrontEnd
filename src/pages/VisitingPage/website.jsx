import { Component } from "react";
import { stylesSheet } from "./webStyles";
import { withStyles } from "@mui/styles";
import { Button, Card, CardActions, CardContent, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
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
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from '../../common/DatePicker/index'
import Autocomplete from '@mui/material/Autocomplete';
import { PhotoCamera } from "@mui/icons-material";
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
import SignUpService from "../../Service/SignUpService";
import GDSESnackBar from "../../common/SnakBar/index";

class WebSite extends Component {
    constructor(props) {
        super(props);
        this.state = {

            nicImage: null,
            licenseImage: null,

            nicView: null,
            licenseView: null,

            open: false,

            role: [
                {
                    type: 'DRIVER'
                },
                {
                    type: 'REGISTERED_USER'
                }
            ],
            formData: {
                id: '',
                nic: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
                licenseNo: '',
                address: '',
                contactNo: '',
                email: '',
                user: {
                    userName: '',
                    password: '',
                    role: ''
                }
            },

            alert: false,
            message: '',
            severity: '',

            loginData: {
                userName: '',
                password: '',
                role: ''
            }

        }
    };

    submitSignUp = async () => {

        let formData = this.state.formData;
        if (formData.user.role === 'REGISTERED_USER') {
            let formData = this.state.formData;
            console.log(formData)

            let res = await SignUpService.postSignUpCustomer(formData);
            console.log(res)

            if (res.status === 201) {
                this.addPersonalImage(formData.id);
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else if (formData.user.role === 'DRIVER') {
            let formData = this.state.formData;

            let res = await SignUpService.postSignUpDriver(formData);

            if (res.status === 201) {
                this.addPersonalImage(formData.id);
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };

    addPersonalImage = async (id) => {

        var bodyFormData = new FormData();
        bodyFormData.append('param', this.state.nicImage);
        bodyFormData.append('param', this.state.licenseImage);

        let res = await SignUpService.addPersonalImage(bodyFormData, id);
        if (res.data.code === 200) {
            alert(res.data.message)
        } else {
            alert(res.data.message);
        }
    }

    clearFields = () => {
        this.setState({

            nicImage: null,
            licenseImage: null,

            nicView: null,
            licenseView: null,

            formData: {
                id: '',
                nic: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
                licenseNo: '',
                address: '',
                contactNo: '',
                email: '',
                user: {
                    userName: '',
                    password: '',
                    role: ''
                }
            },
        });
    };

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
                            </Tabs>
                            <Button variant="outlined" style={{ marginLeft: '900px', marginTop: '7px', height: '32px', borderRadius: '15px' }} onClick={this.handleClickOpen}>Sing
                                Up
                            </Button>

                            <Button variant="outlined" style={{ marginLeft: '-200px', marginTop: '7px', height: '32px', borderRadius: '15px' }} >Sing
                                In
                            </Button>
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

                                    {/* <img src={ios} alt=""
                                        style={{ width: '150px', height: '50px', marginLeft: '100px' }} />
                                    <img src={android} alt=""
                                        style={{ width: '150px', height: '50px', marginLeft: '30px' }} /> */}
                                </Grid>
                            </Grid>

                            <Grid className={classes.selectDate}>
                                <Grid className={classes.fixDate}>
                                    <TextField id="outlined-basic" label="Location" variant="outlined"
                                        style={{ margin: '10px', marginLeft: '10px' }} />
                                    {/* <TextField id="outlined-basic" label="Pick-Up-Date" variant="outlined"
                                        style={{ margin: '10px' }} /> */}

                                    <Grid style={{ margin: '10px', marginLeft: '15px' }}>
                                        <DatePicker label="Pick-Up-Date"/>
                                    </Grid>

                                    {/* <TextField id="outlined-basic" label="Return-Date" variant="outlined"
                                        style={{ margin: '10px' }} /> */}
                                    <Grid style={{ margin: '10px', marginLeft: '15px' }}>
                                        <DatePicker label="Return-Date"/>
                                    </Grid>
                                    <Button variant="contained" style={{
                                        margin: '10px',
                                        height: '52px',
                                        marginLeft: '40px',
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

                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitSignUp}>
                    <Dialog
                        maxWidth="sm=6"
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '30px' }}>SIGNUP HERE</Typography>
                            <CloseIcon onClick={this.handleClose} style={{ marginTop: '-90px', marginLeft: '590px' }} />
                        </DialogTitle>
                        <DialogContent>
                            <Grid className={classes.PopContainer}>

                                <Grid className={classes.textContainer}>
                                    <Grid className={classes.textDetail}>
                                        <TextValidator
                                            style={{ width: '280px' }}
                                            id="outlined-basic"
                                            label="Register Id"
                                            variant="outlined"
                                            value={this.state.formData.id}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.id = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ width: '280px' }}
                                            id="outlined-basic"
                                            label="First Name"
                                            variant="outlined"
                                            value={this.state.formData.name.firstName}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.name.firstName = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ width: '280px' }}
                                            id="outlined-basic"
                                            label="Password"
                                            variant="outlined"
                                            value={this.state.formData.user.password}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.user.password = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ width: '280px' }}
                                            id="outlined-basic"
                                            label="License No"
                                            variant="outlined"
                                            value={this.state.formData.licenseNo}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.licenseNo = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />

                                        <Grid
                                            style={{
                                                width: '280px',
                                                height: '150px',
                                                border: '1px solid #95a5a6',
                                                marginLeft: '2px',
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundImage: "url(" + this.state.licenseView + ")",
                                                backgroundSize: 'cover'
                                            }}
                                        >
                                            <input
                                                style={{ display: 'none' }}
                                                accept="image/*"
                                                className={classes.input}
                                                id="contained-button-file02"
                                                multiple
                                                type="file"
                                                onChange={(e) => {
                                                    this.setState({
                                                        licenseImage: e.target.files[0],
                                                        licenseView: URL.createObjectURL(e.target.files[0])
                                                    })
                                                }}
                                            />
                                            <label htmlFor="contained-button-file02">
                                                <IconButton color="primary" aria-label="upload picture"
                                                    variant="contained"
                                                    //color="primary" 
                                                    component="span"
                                                //style={{ backgroundColor: '#a4b0be', marginLeft: '-10px' }}
                                                >
                                                    <input hidden accept="image/*" type="file" />
                                                    <PhotoCamera style={{ fontSize: '35px', marginLeft: '5px' }} />
                                                </IconButton>
                                            </label>
                                        </Grid>

                                        {/* <IconButton color="primary" aria-label="upload picture" component="label">
                                            <input hidden accept="image/*" type="file" />
                                            <PhotoCamera style={{ fontSize: '35px', marginLeft: '5px' }} />
                                        </IconButton> */}

                                        <TextValidator
                                            style={{ width: '280px' }}
                                            id="outlined-basic"
                                            label="Contact No"
                                            variant="outlined"
                                            value={this.state.formData.contactNo}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.contactNo = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ marginBottom: '40px', width: '280px' }}
                                            id="outlined-basic"
                                            label="E-mail"
                                            variant="outlined"
                                            value={this.state.formData.email}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.email = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                    </Grid>
                                    <Grid className={classes.textDetail}>
                                        <TextValidator
                                            style={{ width: '280px' }}
                                            id="outlined-basic"
                                            label="User Name"
                                            variant="outlined"
                                            value={this.state.formData.user.userName}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.user.userName = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ width: '280px' }}
                                            id="outlined-basic"
                                            label="Last Name"
                                            variant="outlined"
                                            value={this.state.formData.name.lastName}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.name.lastName = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ width: '280px' }}
                                            id="outlined-basic"
                                            label="Conform Password"
                                            variant="outlined"
                                            value={this.state.formData.user.password}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.user.password = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                        <TextValidator
                                            style={{ width: '280px' }}
                                            id="outlined-basic"
                                            label="NIC"
                                            variant="outlined"
                                            value={this.state.formData.nic}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.nic = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />

                                        <Grid
                                            style={{
                                                width: '280px',
                                                height: '150px',
                                                border: '1px solid #95a5a6',
                                                marginLeft: '2px',
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundImage: "url(" + this.state.nicView + ")",
                                                backgroundSize: 'cover'
                                            }}
                                        >
                                            <input
                                                style={{ display: 'none' }}
                                                accept="image/*"
                                                className={classes.input}
                                                id="contained-button-file01"
                                                multiple
                                                type="file"
                                                onChange={(e) => {
                                                    this.setState({
                                                        nicImage: e.target.files[0],
                                                        nicView: URL.createObjectURL(e.target.files[0])
                                                    })
                                                }}
                                            />
                                            <label htmlFor="contained-button-file01">
                                                <IconButton color="primary" aria-label="upload picture"
                                                    variant="contained"
                                                    //color="primary" 
                                                    component="span"
                                                //style={{ backgroundColor: '#a4b0be', marginLeft: '-10px' }}
                                                >
                                                    <input hidden accept="image/*" type="file" />
                                                    <PhotoCamera style={{ fontSize: '35px', marginLeft: '5px' }} />
                                                </IconButton>
                                            </label>

                                        </Grid>

                                        <Autocomplete
                                            style={{ width: '280px' }}
                                            onChange={(e, value, r) => {

                                                let formData = this.state.formData
                                                formData.user.role = value.type
                                                this.setState({ formData })
                                            }}
                                            getOptionLabel={
                                                (option) => option.type
                                            }

                                            id="controllable-states-demo"
                                            options={this.state.role}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Role" />}
                                        />
                                        <TextValidator
                                            style={{ marginBottom: '40px', width: '280px' }}
                                            id="outlined-basic"
                                            label="Address"
                                            variant="outlined"
                                            value={this.state.formData.address}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.address = e.target.value
                                                this.setState({ formData })
                                            }}
                                            validators={['required']}
                                        />
                                    </Grid>
                                    <Grid className={classes.btnContainer}>
                                        <Button
                                            variant="contained"
                                            style={{ width: '250px' }}
                                            type="submit"
                                            onClick={() => {
                                                this.submitSignUp();
                                            }}
                                        >Register Now</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </DialogContent>
                    </Dialog>
                </ValidatorForm>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
                {/* <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitSignIn}>
                    <Dialog
                        maxWidth="sm=6"
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '30px' }}>LOGING HERE</Typography>
                            <CloseIcon onClick={this.handleClose} style={{ marginTop: '-90px', marginLeft: '590px' }} />
                        </DialogTitle>
                        <DialogContent>
                            <Grid className={classes.loginContainer}>
                                <Grid className={classes.loginBody}>
                                    <TextValidator
                                        style={{ width: '410px', marginTop: '-20px' }}
                                        id="outlined-basic"
                                        label="User Name"
                                        variant="outlined"
                                        value={this.state.formData.user.userName}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.user.userName = e.target.value
                                            this.setState({ formData })
                                        }}
                                        validators={['required']}
                                    />

                                    <Autocomplete
                                        style={{ width: '180px', marginLeft: '20px', marginTop: '-20px' }}
                                        onChange={(e, value, r) => {

                                            let formData = this.state.formData
                                            formData.user.role = value.type
                                            this.setState({ formData })
                                        }}
                                        getOptionLabel={
                                            (option) => option.type
                                        }

                                        id="controllable-states-demo"
                                        options={this.state.role}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Role" />}
                                    />

                                    <TextValidator
                                        style={{ width: '410px', marginBottom: '50px' }}
                                        id="outlined-basic"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        value={this.state.formData.user}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.user = e.target.value
                                            this.setState({ formData })
                                        }}
                                        validators={['required']}
                                    />

                                    <Button
                                        variant="contained"
                                        style={{ width: '410px' }}
                                        type="submit"
                                        onClick={() => {
                                            //this.submitSignUp();
                                        }}
                                    >Login Now</Button>
                                </Grid>
                            </Grid>
                        </DialogContent>
                    </Dialog>
                </ValidatorForm> */}
            </>
        )
    }
}

export default withStyles(stylesSheet)(WebSite)