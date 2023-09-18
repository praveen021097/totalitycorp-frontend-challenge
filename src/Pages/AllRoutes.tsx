import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from './Login';
import ProtectedRoute from '../Components/ProtectedRoute';
import Products from './Products';

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<ProtectedRoute><Products /></ProtectedRoute>} />
    <Route path='/login' element={<Login />} />
    
   </Routes>
  )
}

export default AllRoutes
