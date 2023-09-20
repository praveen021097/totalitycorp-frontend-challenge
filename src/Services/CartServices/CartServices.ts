import { Dispatch } from "redux";
import { ActionTypes } from "../../Redux/CartReducer/actionTypes";
import axios from "axios";
import { isAddProductFailure, isAddProductRequest, isAddProductSuccess, isCartProductDecreaseFailure, isCartProductDecreaseRequest, isCartProductDecreaseSuccess, isCartProductDeleteFailure, isCartProductDeleteRequest, isCartProductDeleteSuccess, isCartProductIncreaseFailure, isCartProductIncreaseRequest, isCartProductIncreaseSuccess, isGetCartProductFailure, isGetCartProductSuccess } from "../../Redux/CartReducer/actions";
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

export const productQuantityIncrease =(id:number,payload:ProductInfo)=>(dispatch:Dispatch<isCartProductIncreaseFailure|isCartProductIncreaseRequest|isCartProductIncreaseSuccess>):Promise<void | ActionTypes>=>{
        return axios.patch(`http://localhost:8080/cart/${id}`,payload).then((res)=>{
            console.log("increaseData",res.data)
            dispatch({type:ActionTypes.PRODUCT_QUANTITY_INCREASE_SUCCESS,payload:res.data})
        })
        .catch((err)=>{
                dispatch({type:ActionTypes.PRODUCT_QUANTITY_INCREASE_FAILURE,payload:err})
        })
}

export const productQuantityDecrease =(id:number,payload:ProductInfo)=>(dispatch:Dispatch<isCartProductDecreaseFailure|isCartProductDecreaseRequest|isCartProductDecreaseSuccess>):Promise<void | ActionTypes>=>{
    return axios.patch(`http://localhost:8080/cart/${id}`,payload).then((res)=>{
        console.log("increaseData",res.data)
        dispatch({type:ActionTypes.PRODUCT_QUANTITY_DECREASE_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
            dispatch({type:ActionTypes.PRODUCT_QUANTITY_DECREASE_FAILURE,payload:err})
    })
}

export const deleteProductFromCart =(id:number)=>(dispatch:Dispatch<isCartProductDeleteFailure|isCartProductDeleteSuccess>):Promise<void | ActionTypes>=>{
    return axios.delete(`http://localhost:8080/cart/${id}`).then((res)=>{
        dispatch({type:ActionTypes.DELETE_PRODUCT_TO_CART_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:ActionTypes.DELETE_PRODUCT_TO_CART_FAILURE,payload:err})
    })

}