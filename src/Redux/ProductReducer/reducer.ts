import {ActionTypes} from "./actionTypes";
import { Action } from "./actions";

export interface IsProductState{
       products:any;
       isLoading:Boolean;
       isError:Boolean;
        

}

const initialState ={
    products:[],
    isLoading:false,
    isError:false
}


export const reducer =(state:IsProductState=initialState,action:Action):IsProductState=>{
        const {payload} =action;

        switch(action.type){
            case ActionTypes.PRODUCT_GET_REQUEST:
                return {
                    ...state,
                    isLoading:true,
                    isError:false
                }
        case ActionTypes.PRODUCT_GET_SUCCESS:
                return {
                    ...state,
                    products:payload,
                    isLoading:false,
                    isError:false
                }
                case ActionTypes.PRODUCT_GET_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    isError:true
                }
                default:
                    return state
        }
}