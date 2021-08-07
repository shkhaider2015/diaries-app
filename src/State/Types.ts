export enum HardcodeString {
    REQUEST = "request",
    SUCCESS = "success",
    FAILURE = "failure"
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    diaryIds?: string[] | null;
}
export interface Diary {
    id: string;
    title: string;
    type: 'private' | 'public';
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
    type : HardcodeString.REQUEST
}
interface SuccessAction {
    type : HardcodeString.SUCCESS
    payload : User
}
interface FailureAction{
    type : HardcodeString.FAILURE
    payload : string
}

export type AuthAction = RequestAction | SuccessAction | FailureAction