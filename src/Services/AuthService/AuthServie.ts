import axios from "axios";
import { Dispatch } from "redux";
import {Action,isLoginFailure,isLoginSuccess} from "../../Redux/AuthReducer/actions";
import { ActionTypes } from "../../Redux/AuthReducer/actionTypes";
import { UserInfo } from "../../Pages/Login";

export const loginService =(payload:UserInfo)=>(dispatch:Dispatch<isLoginFailure | isLoginSuccess>):Promise<void|ActionTypes>=>{
    return axios.post("http://localhost:8080/user",payload).then((res)=>{
        dispatch({type:ActionTypes.LOGIN_SUCCESS,payload:res.data});
        localStorage.setItem("userData",JSON.stringify(res.data))
        return ActionTypes.LOGIN_SUCCESS;
    }).catch((err)=>{
        dispatch({type:ActionTypes.LOGIN_ERROR,payload:err})
       })

}