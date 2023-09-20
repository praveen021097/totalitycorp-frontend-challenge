import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from './Login';
import ProtectedRoute from '../Components/ProtectedRoute';
import Products from './Products';
import Cart from './Cart';
import {ShippingAndPayment } from './ShippingAndPayment';

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<ProtectedRoute><Products /></ProtectedRoute>} />
    <Route path='/Cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
    <Route path='/login' element={<Login />} />
    <Route path='/payment' element={<ProtectedRoute><ShippingAndPayment/></ProtectedRoute>} />
   </Routes>
  )
}

export default AllRoutes
