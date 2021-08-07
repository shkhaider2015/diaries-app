import { combineReducers } from "redux";
import { AuthAction, AuthState, HardcodeString, User } from "./Types";

export const initialAuthState:AuthState = {
    loading : true,
    error : null,
    data : null
}

export const AuthReducer = (state:AuthState=initialAuthState, action:AuthAction) => {
    switch(action.type)
    {
        case HardcodeString.REQUEST:
            state = {
                loading : true,
                error : null,
                data : null
            }
            return state
        case HardcodeString.SUCCESS:
            state = {
                loading : false,
                error : null,
                data : action.payload
            }
            return state;
        case HardcodeString.FAILURE:
            state = {
                loading : false,
                error : action.payload,
                data : null
            }
            return state
        default:
            return state;
    }
}


export const Reducers = combineReducers({
    AuthReducer : AuthReducer
})