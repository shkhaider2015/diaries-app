import axios from "axios"
import { HardcodeString, User } from "./Types";


export const Login = (user: User, login:boolean=true) => {
    
    if(!login)
    {
        return async (dispatch:any) => {
            return dispatch({
                type : HardcodeString.LOGOUT
            })
        } 
    }
    
    return async (dispatch: any) => {
        dispatch({
            type: HardcodeString.REQUEST,
        })
        const response = await axios.post("/api/login", {
            method: "POST",
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        });

        if(response.status === 400)
        {
            return dispatch({
                type: HardcodeString.FAILURE,
                payload: "User Not find"
            })
        }

        const jsonData = await response.data
        const userJson = await JSON.parse(jsonData.user.body)

        console.log("login response status ", response.status)

        return dispatch({
            type: HardcodeString.SUCCESS,
            payload: userJson
        })

    }
}

export const Signup = (user: User) => {
    return async (dispatch: any) => {
        dispatch({
            type: HardcodeString.REQUEST,
        })
        const response = await axios.post("/api/signup", {
            method: "POST",
            body: JSON.stringify({
                username: user.username,
                email: user.email,
                password: user.password
            })
        })

        const jsonData = await response.data 

        if (response.status > 200 && response.status < 300) {
            return dispatch({
                type: HardcodeString.SUCCESS,
                payload: jsonData.user.body
            })

        }

        return dispatch({
            type: HardcodeString.FAILURE,
            payload: response.data
        })

    }
}

