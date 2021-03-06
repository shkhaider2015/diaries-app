import { Reducers } from "./Reducers"

export enum HardcodeString {
    REQUEST = "login-request",
    SUCCESS = "login-success",
    FAILURE = "login-failure",
    LOGOUT = "login-logout",
}
export enum SignupStrings {
    REQUEST = "signup-request",
    SUCCESS = "signup-success",
    FAILURE = "signup-failure",
}
export enum DataStrings {
    REQUEST = "data-request" , 
    SUCCESS = "data-success", 
    FAILURE = "data-failure",
}

export enum EntriesStrings {
    REQUEST="entry-request" , 
    SUCCESS='entry-success', 
    FAILURE='entry-failure'
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
    userId?: string;
    entryIds?: string[] | null;
}
export interface IEntry {
    id? : string
    title : string
    desc : string
    date : number
} 

export interface AuthState {
    loading : boolean
    error : string | null
    data : User | null
} 

type TDiaries = {
    diaries : Diary[]
}
export interface IDiaries {
    loading : boolean
    error : string | null
    data : TDiaries
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

interface IDataRequest {
    type : DataStrings.REQUEST
}
interface IDataSuccess {
    type : DataStrings.SUCCESS
    payload : any
}
interface IDataFailure {
    type : DataStrings.FAILURE
    payload : string
}

export type DataReducerAction = IDataSuccess | IDataRequest | IDataFailure

// Entries
interface IEntryRequest {
    type : EntriesStrings.REQUEST
}
interface IEntrySuccess {
    type : EntriesStrings.SUCCESS
    payload : TEntry
}
interface IEntryFailure {
    type : EntriesStrings.FAILURE
    payload : string | null
}

export type TEntry = {
    entries : IEntry[]
}

export interface EntryAuth {
    loading : boolean
    error : string | null
    data : TEntry
}

export type EntryReducerAction = IEntrySuccess | IEntryRequest | IEntryFailure