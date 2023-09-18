import React from 'react'
import {useSelector} from "react-redux";
import { IsAuthstate } from '../Redux/AuthReducer/reducer';
import {Navigate } from "react-router-dom";
import {useLocation} from "react-router-dom";
interface RequireAut{
    children:JSX.Element ;
}
const ProtectedRoute = ({children}:RequireAut) => {
    const isAuth =useSelector((state:any)=>state.AuthReducer.isAuth); 
    const location = useLocation();
   if(!isAuth){
    return <Navigate to={"/login"} state={{from:location}} replace={true} />
   }
  return children
}

export default ProtectedRoute
