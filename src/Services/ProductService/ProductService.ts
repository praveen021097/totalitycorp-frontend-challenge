import { ActionTypes } from "../../Redux/ProductReducer/actionTypes";
import { Action ,isGetProductLoading,isGetProductFailure,isGetProductSuccess} from "../../Redux/ProductReducer/actions";
import axios from "axios";
import { Dispatch } from "redux";
export const getProducts =()=>(dispatch:Dispatch<isGetProductFailure | isGetProductLoading | isGetProductSuccess>)=>{
        return axios.get("http://localhost:8080/products").then((res)=>{
            dispatch({type:ActionTypes.PRODUCT_GET_SUCCESS,payload:res.data});

        })
        .catch((err)=>{
            dispatch({type:ActionTypes.PRODUCT_GET_FAILURE,payload:err})
        })
}