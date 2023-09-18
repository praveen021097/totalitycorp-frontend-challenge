import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from './Login';

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Login />} />
   </Routes>
  )
}

export default AllRoutes
