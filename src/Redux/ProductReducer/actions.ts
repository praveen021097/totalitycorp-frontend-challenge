import { ActionTypes } from "./actionTypes";
import { IsProductState} from "./reducer";
 export interface isGetProductSuccess{
    type:ActionTypes.PRODUCT_GET_SUCCESS,
    payload:IsProductState
}
 export interface isGetProductLoading{
    type:ActionTypes.PRODUCT_GET_REQUEST,
    payload:true
    
}

 export interface isGetProductFailure{
    type:ActionTypes.PRODUCT_GET_FAILURE,
    payload:true
    
}


export type Action = isGetProductFailure | isGetProductLoading | isGetProductSuccess;