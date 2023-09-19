import { Dispatch } from "redux";
import { ActionTypes } from "../../Redux/CartReducer/actionTypes";
import axios from "axios";
import { isAddProductFailure, isAddProductRequest, isAddProductSuccess, isGetCartProductFailure, isGetCartProductSuccess } from "../../Redux/CartReducer/actions";
import { ProductInfo } from "../../Pages/Products";
export const addTocart =(payload:ProductInfo)=>(dispatch:Dispatch<isAddProductFailure | isAddProductSuccess>):Promise<void | ActionTypes>=>{
    console.log("iem",payload)
    return axios.post("http://localhost:8080/cart",payload).then((res)=>{
        dispatch({type:ActionTypes.ADD_TO_CART_SUCCESS,payload:res.data});
        console.log("added succesfully")
        return ActionTypes.ADD_TO_CART_SUCCESS;
    })
    .catch((err)=>{
        dispatch({type:ActionTypes.ADD_TO_CART_FAILURE,payload:err})
    })

}

export const getToCart =()=>(dispatch:Dispatch<isGetCartProductFailure|isGetCartProductSuccess>):Promise<void | ActionTypes>=>{
    console.log("hifeeertfgrt")
    return axios.get("http://localhost:8080/cart").then((res)=>{
        
        dispatch({type:ActionTypes.GET_DATA_TO_CART_SUCCESS,payload:res.data});
       
        return ActionTypes.GET_DATA_TO_CART_SUCCESS;
    })
    .catch((err)=>{
        dispatch({type:ActionTypes.GET_DATA_TO_CART_FAILURE,payload:err})
    })

}