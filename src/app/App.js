import { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";
import WebSite from "../pages/VisitingPage/website";
import CustomerDashboard from "../pages/CustomerDshboard/header/HeaderComponent";
import AdminDashboard from "../pages/AdminDshboard/header/HeaderComponent";
import Vehicle from "../pages/AdminDshboard/bodyComponents/Vehicle/Vehicle";
import Customer from '../pages/AdminDshboard/bodyComponents/Customer/Customer';
import Booking from '../pages/AdminDshboard/bodyComponents/Booking/Booking';
import Driver from '../pages/AdminDshboard/bodyComponents/Driver/Driver';
import Income from '../pages/AdminDshboard/bodyComponents/Income/Income';
import Profile from '../pages/AdminDshboard/bodyComponents/Profile/Profile';
import DriverShedule from '../pages/AdminDshboard/bodyComponents/DriverShedule/DriverShedule';
import Home from "../pages/AdminDshboard/bodyComponents/Home/Home";


function App() {
    return (
        <Fragment>
            {/* <CustomerDashboard/> */}
            {/* <AdminDashboard/> */}
            <WebSite/>
            {/* <DriverDashboard/> */}
            {/* <ResponsiveDrawer/> */}
        </Fragment>
        // <Routes>
        //     <Route exact index element={<WebSite />} />
        //     <Route exact path='/admin' element={<AdminDashboard />}>
        //         <Route path="home" element={<Home />} />
        //         <Route path="customer" element={<Customer />} />
        //         <Route path="vehicle" element={<Vehicle />} />
        //         <Route path="booking" element={<Booking />} />
        //         <Route path="driver" element={<Driver />} />
        //         <Route path="driverShedule" element={<DriverShedule />} />
        //         <Route path="income" element={<Income />} />
        //         <Route path="profile" element={<Profile />} />
        //     </Route>
        //     <Route exact path='/customer' element={<CustomerDashboard />}>
        //     </Route>
        // </Routes>
    );
}

export default App;
