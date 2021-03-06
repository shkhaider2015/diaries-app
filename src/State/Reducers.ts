import { combineReducers } from "redux";
import { AuthAction, AuthState, 
    DataReducerAction, HardcodeString, LogoutAction, SignupStrings, DataStrings,
     IDiaries, EntryAuth, EntryReducerAction, EntriesStrings, IEntry } from "./Types";

export const initialAuthState:AuthState = {
    loading : false,
    error : null,
    data : null
}
export const initialDiariesState: IDiaries = {
    loading : false,
    error : null,
    data : {
        diaries : []
    }
}

export const initialEntryState:EntryAuth = {
    loading : false,
    error : null,
    data : {entries : []}
    
}

export const SignupReducer = (state:AuthState=initialAuthState, action:AuthAction) => {
    console.log("Signup Reducer Call", action.type)
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
    console.log("Login Reducer Call", action.type)
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

export const DataReducer = (state:IDiaries=initialDiariesState, action:DataReducerAction) => {
    console.log("Data Reducer Call", action.type)
    switch (action.type) {
        case DataStrings.REQUEST:
            state = {
                loading : true,
                error : null,
                data : {diaries : []}
            }
            return state;
        case DataStrings.SUCCESS:
            state = {
                loading : false,
                error : null,
                data : action.payload
            }
            return state;
        case DataStrings.FAILURE:
            state = {
                loading : false,
                error : action.payload,
                data : {diaries : []}
            }
            return state;
        default:
            return state;
    }
}

export const EntriesReducer = (state:EntryAuth=initialEntryState, action:EntryReducerAction) => {

    switch (action.type) 
    {
        case EntriesStrings.REQUEST:
            state = {
                loading : true,
                error : null,
                data : {
                    entries : []
                }
            }
            return state
        case EntriesStrings.SUCCESS:
            state = {
                loading : false,
                error : null,
                data : action.payload
            }
            return state
        case EntriesStrings.FAILURE:
            state = {
                loading : false,
                error : action.payload,
                data : {
                    entries : []
                }
            }
            return state
        default:
            return state
    }
}

export const Reducers = combineReducers({
    SignupReducer : SignupReducer,
    LoginReducer,
    Diaries : DataReducer,
    Entries : EntriesReducer,
})