import { Reducers } from "./Reducers"

export enum HardcodeString {
    REQUEST = "login-request",
    SUCCESS = "login-success",
    FAILURE = "login-failure",
    LOGOUT = "login-logout"
}
export enum SignupStrings {
    REQUEST = "signup-request",
    SUCCESS = "signup-success",
    FAILURE = "signup-failure",
}

export interface User {
    id?: string;
    username?: string;
    email: string;
    password: string;
    diaryIds?: string[] | null;
}
export interface Diary {
    id: string;
    title: string;
    access: 'private' | 'public';
    createdAt?: string;
    updatedAt?: string;
    userId: string;
    entryIds?: string[] | null;
}

export interface AuthState {
    loading : boolean
    error : string | null
    data : User | null
} 

interface RequestAction {
    type : HardcodeString.REQUEST | SignupStrings.REQUEST
}
interface SuccessAction {
    type : HardcodeString.SUCCESS | SignupStrings.SUCCESS
    payload : User
}
interface FailureAction{
    type : HardcodeString.FAILURE | SignupStrings.FAILURE
    payload : string
}
export interface LogoutAction {
    type : HardcodeString.LOGOUT
}

export type AuthAction = RequestAction | SuccessAction | FailureAction

export type IStateType = ReturnType<typeof Reducers> 