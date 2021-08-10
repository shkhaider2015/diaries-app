import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IStateType, User } from "../State/Types";
import { useAction } from "../State/useActions";

export const SignupComp = () => {

    const { Signup } = useAction()
    const navigate = useNavigate();
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
        // fetch("/api/signup", {
        //     method : "POST",
        //     body : JSON.stringify({
        //         username : "shakeel_haider",
        //         email : "shkhaider2015",
        //         password : "123456"
        //     })
        // })
        // .then(res => res.json())
        // .then(json => console.log("Json Response : ", json))
        // .catch(err => console.log("error response : ", err))

    }

    useEffect(
        () => {
            if(signupState.data)
            {
                navigate("/login")
                console.log("UseEffect True")
            }
            //eslint-disable-next-line
        }, [signupState.data]
    )

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
                {console.log("Signup data ", signupState.data)}
                    <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="username" title="username" placeholder="Username" type="text" required />
                
                    <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="email" title="email" placeholder="Email" type="email" required />
                
                    <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="password" title="password" placeholder="Password" type="password" required />
                
                <button className="w-75 mt-5 btn btn-primary shadow-sm" type="submit" >Submit</button>
            </form>
        </div>
    </div>
}