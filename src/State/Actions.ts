import axios from "axios"
import { HardcodeString, User } from "./Types";


export const Login = (user:User) => {
    return async (dispatch:any) => {
        dispatch({
            type : HardcodeString.REQUEST,
        })
        const response = await axios.get("kadhsahdhas");
        
        if(response.status !== 200)
        {
            return dispatch({
                type : HardcodeString.FAILURE,
                payload : response.data
            })
            
        }

        return dispatch({
            type : HardcodeString.SUCCESS,
            payload : response.data
        })
        
    }
}

export const Signup = (user:User) => {
    return async (dispatch:any) => {
        dispatch({
            type : HardcodeString.REQUEST,
        })
        const response = await axios.get("kadhsahdhas");
        
        if(response.status !== 200)
        {
            return dispatch({
                type : HardcodeString.FAILURE,
                payload : response.data
            })
            
        }

        return dispatch({
            type : HardcodeString.SUCCESS,
            payload : response.data
        })
        
    }
}