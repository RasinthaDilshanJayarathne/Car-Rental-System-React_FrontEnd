import { Fragment } from 'react';
import '../App.css';
import HeaderComponent from "../pages/AdminDshboard/header/HeaderComponent";
import {Route, Routes} from "react-router-dom";
import WebSite from "../pages/WebSite/website";
import CustomerDashboard from "../pages/CustomerDshboard/header/HeaderComponent";

function App() {
    return (
        <Fragment>
            {/*<Layout/>*/}
         {/* <HeaderComponent/>*/}
            <CustomerDashboard/>
        </Fragment>
       /* <Routes>
            <Route path='/web' element={<WebSite/>}/>
            <Route path='/admin' element={<HeaderComponent/>}/>
        </Routes>*/
            
    );
}

export default App;
