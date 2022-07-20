import React from 'react'
import {Box, Card, CardContent, Divider, Grid, Typography} from "@material-ui/core";
import {PageHeader} from "../../../../common/CommonComponent";
import {useStyle} from "../BodyStyle";

export default function Home() {
    const classes = useStyle();

    return (<Box>
        <PageHeader label="Home/Overview"/>
        <Grid container
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start">
            <Grid container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={3}>
                <Grid item lg={3} md={3} sm={3} xm={3}>
                    <Card className={classes.card1}>
                        <CardContent>
                            <Typography variant="body2" className={classes.cardLable}>Vehicles</Typography>
                            <Typography variant="h5" component="h6" className={classes.cardTitle}>50</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xm={3}>
                    <Card className={classes.card2}>
                        <CardContent>
                            <Typography variant="body2" className={classes.cardLable}>Customers</Typography>
                            <Typography variant="h5" component="h6" className={classes.cardTitle}>100</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xm={3}>
                    <Card className={classes.card3}>
                        <CardContent>
                            <Typography variant="body2" className={classes.cardLable}>Total Booking</Typography>
                            <Typography variant="h5" component="h6" className={classes.cardTitle}>20</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xm={3}>
                    <Card className={classes.card4}>
                        <CardContent>
                            <Typography variant="body2" className={classes.cardLable}>Total Rent</Typography>
                            <Typography variant="h5" component="h6" className={classes.cardTitle}>10</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid>
                <Divider light/>
            </Grid>
        </Grid>
    </Box>);
}
