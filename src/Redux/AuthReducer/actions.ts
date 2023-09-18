
import { ActionTypes } from "./actionTypes";
import { IsAuthstate} from "./reducer";
 interface isLoginSuccess{
    type:ActionTypes.LOGIN_SUCCESS,
    payload:IsAuthstate
}
 interface isLoginLoading{
    type:ActionTypes.LOGIN_REQUEST,
    payload:true
    
}

 interface isLoginFailure{
    type:ActionTypes.LOGIN_ERROR,
    payload:true
    
}

// export type Action = isLoginSuccess | isLoginFailure | isLoginLoading;
export type Action = isLoginFailure | isLoginLoading | isLoginSuccess;