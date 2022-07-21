import { Fragment } from 'react';
import {Route, Routes} from "react-router-dom";
import WebSite from "../pages/WebSite/website";
import CustomerDashboard from "../pages/CustomerDshboard/header/HeaderComponent";
import AdminDashboard from "../pages/AdminDshboard/header/HeaderComponent"


function App() {
    return (
        <Fragment>
            {/* <CustomerDashboard/> */}
            <AdminDashboard/>
        </Fragment>
       /* <Routes>
            <Route path='/web' element={<WebSite/>}/>
            <Route path='/admin' element={<HeaderComponent/>}/>
        </Routes>*/
            
    );
}

export default App;
