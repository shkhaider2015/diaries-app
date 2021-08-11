import { combineReducers } from "redux";
import { AuthAction, AuthState, HardcodeString, LogoutAction, SignupStrings } from "./Types";

export const initialAuthState:AuthState = {
    loading : false,
    error : null,
    data : null
}

export const SignupReducer = (state:AuthState=initialAuthState, action:AuthAction) => {
    switch(action.type)
    {
        case SignupStrings.REQUEST:
            state = {
                loading : true,
                error : null,
                data : null
            }
            return state
        case SignupStrings.SUCCESS:
            state = {
                loading : false,
                error : null,
                data : action.payload
            }
            return state;
        case SignupStrings.FAILURE:
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
export const LoginReducer = (state:AuthState=initialAuthState, action:AuthAction | LogoutAction) => {
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
        case HardcodeString.LOGOUT:
            state = {
                ...state,
                data : null
            }
            return state
        default:
            return state;
    }
}


export const Reducers = combineReducers({
    SignupReducer : SignupReducer,
    LoginReducer
})