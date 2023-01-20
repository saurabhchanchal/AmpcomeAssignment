import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Appointment from './Appointment';
import Doctor_Dashbord from './Doctor_Dashbord';
import Login from './Login';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<Login/>}/>
            <Route path={"/dashboard"} element={<Doctor_Dashbord/>}/>
            <Route path={"/appointment"} element={<Appointment/>}/>

        </Routes>
    </div>
  )
}

export default AllRoutes