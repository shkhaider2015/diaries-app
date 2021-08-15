import axios from "axios"
import { Dispatch } from "redux";
import { AuthAction, DataReducerAction, DataStrings, HardcodeString, LogoutAction, SignupStrings, User } from "./Types";


export const Login = (user: User, login: boolean = true) => {

    if (!login) {
        return async (dispatch: Dispatch<LogoutAction>) => {
            return dispatch({
                type: HardcodeString.LOGOUT
            })
        }
    }

    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: HardcodeString.REQUEST,
        })

        try {
            const response = await axios.post("/api/login", {
                method: "POST",
                body: JSON.stringify({
                    email: user.email,
                    password: user.password
                })
            });

            const jsonData = await response.data

        console.log("login response status ", response.status)

        return dispatch({
            type: HardcodeString.SUCCESS,
            payload: jsonData
        })
    
        } catch (error) {
            return dispatch({
                type: HardcodeString.FAILURE,
                payload: "User Not find"
            })
        }

    }
}

export const Signup = (user: User) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: SignupStrings.REQUEST,
        })

        try {
            const response = await axios.post("/api/signup", {
                method: "POST",
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    password: user.password
                })
            })

            const resData = await response.data;

            return dispatch({
                type: SignupStrings.SUCCESS,
                payload: resData
            })

        } catch (error) {

            return dispatch({
                type: SignupStrings.FAILURE,
                payload: "User Already exist"
            })
        }

    }
}

export const GetData = (user: User | null = null) => {

    return async (dispatch:Dispatch<DataReducerAction>) => {
            dispatch({
                type : DataStrings.REQUEST
            })

            try {
                const response = await axios.get(user ? "/api/users" : "/api/diaries" );
                const resData = await response.data;

                console.log("Diary action call ", resData)

                return dispatch({
                    type : DataStrings.SUCCESS,
                    payload : resData
                })
                
            } catch (error) {
                return dispatch({
                    type : DataStrings.FAILURE,
                    payload : "Cant find diaries"
                })
            }
    }
}

