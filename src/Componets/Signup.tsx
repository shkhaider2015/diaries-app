import { useState } from "react";
import { useSelector } from "react-redux";
import { IStateType, User } from "../State/Types";
import { useAction } from "../State/useActions";

export const SignupComp = () => {

    const { Signup } = useAction()
    const signupState = useSelector((state:IStateType) => state.SignupReducer);
    const [isCall, setIsCall] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setIsCall(!isCall);
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const user:User = {
            id : '1',
            username,
            email,
            password,
            diaryIds : []
        }
        

        Signup(user)

    }

    console.log("Signup state loading : ", signupState.loading)

    if(signupState.loading)
    {
        return <div style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
            <h1>...Loading</h1>
        </div>
    }

    return <div className="row " style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
        
        <div className="card p-5 shadow col-lg-6 col-md-8 col-sm-10 col-10" >
            <form className="text-center" onSubmit={(e) => handleSubmit(e)} >
                <legend>Signup</legend>
                {
                    signupState.data
                    ? <span style={{ fontSize : '10px' }} > <span style={{ color : 'green' }} >Successfully</span> signeup as {signupState.data?.email} </span>
                    : signupState.error ? <span style={{ fontSize : '10px', color : 'red' }} >{signupState.error}</span> : ""
                }
                {console.log("Signup data ", signupState.data)}
                    <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="username" title="username" placeholder="Username" type="text" required />
                
                    <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="email" title="email" placeholder="Email" type="email" required />
                
                    <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="password" title="password" placeholder="Password" type="password" required />
                
                <button className="w-75 mt-5 btn btn-primary shadow-sm" type="submit" >Submit</button>
            </form>
        </div>
    </div>
}