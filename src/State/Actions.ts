import axios from "axios"
import { Dispatch } from "redux";
import { AuthAction, HardcodeString, LogoutAction, SignupStrings, User } from "./Types";


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
        const userJson = await JSON.parse(jsonData.user.body)

        console.log("login response status ", response.status)

        return dispatch({
            type: HardcodeString.SUCCESS,
            payload: userJson
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
            const jsonData = await JSON.parse(resData.user.body);



            return dispatch({
                type: SignupStrings.SUCCESS,
                payload: jsonData
            })

        } catch (error) {

            return dispatch({
                type: SignupStrings.FAILURE,
                payload: "User Already exist"
            })
        }

    }
}

