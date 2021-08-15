import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IStateType } from "../State/Types";
import { useAction } from "../State/useActions";

export const LoginComp = () => {

    const { Login } = useAction();
    const navigate = useNavigate();
    const loginState = useSelector((state:IStateType) => state.LoginReducer)
    const [isCall, setIsCall] = useState(false);

    const handleSubmit = (e:any) =>
    {
        e.preventDefault()
        setIsCall(!isCall)
        const email = e.target.email.value;
        const password = e.target.password.value;

        Login({email, password})
    }

    useEffect(
        () => {
            if(loginState.data)
            {
                navigate("/home")
            }
            //eslint-disable-next-line
        }, [loginState.data]
    )

    // useEffect(
    //     () => {
    //         fetch("/api/diaries")
    //         .then(res => res.json())
    //         .then(json => console.log("Diaries : ", json))
    //         .catch(err => console.log("Diary Error : ", err))
    //     }, []
    // )
    
    if(loginState.loading)
    {
        return <div style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
            <h1>...Loading</h1>
        </div>
    }

    return <div className="row " style={{ height: '90vh', display: 'grid', placeItems: 'center' , overflow : 'hidden' }} >
    <div className="card p-5    shadow col-lg-6 col-md-8 col-sm-10 col-10 " >
        <form className="text-center" onSubmit={(e) => handleSubmit(e)} >
            <legend>Login</legend>
            {console.log("Login Data ", loginState.data)}
            {/* {
                isCall
                ? <p> {
                    loginState.loading
                    ? "...Wait"
                    : loginState.error
                        ? "...Error"
                        : console.log(loginState.data)
                } </p>
                : ""
            } */}
                <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="email" title="email" placeholder="Email" type="email" required />
            
                <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="password" title="password" placeholder="Password" type="password" required />
            
            <button className="w-75 mt-5 btn btn-primary shadow-sm" type="submit" >Submit</button>
        </form>
    </div>
</div>
}