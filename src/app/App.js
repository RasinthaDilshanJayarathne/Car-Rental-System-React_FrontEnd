import React from "react";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp"
import {Route, Routes} from "react-router-dom";
import SignInOutContainer from "../pages/SingInSingOut";
import WebSite from "../pages/WebSite";
import CustomerDashboard from "../pages/CustomerDashboard";
import General from "../pages/CustomerDashboard/VehiclePackges/General";
import Luxury from "../pages/CustomerDashboard/VehiclePackges/Luxury";


function App() {
  return (
    /*<div className="App">
        <Login/>
        {/!*<SingUp/>*!/}
    </div>*/
      <Routes>
         {/* <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/sing-up' element={<SingUp/>}/>*/}
          <Route exact path='/sing' element={<SignInOutContainer/>}/>
          <Route path='/web' element={<WebSite/>}/>
          <Route path='/customer' element={<CustomerDashboard/>}/>
          <Route path='/general' element={<General/>}/>
          <Route path='/luxury' element={<Luxury/>}/>
      </Routes>
  );
}

export default App;
