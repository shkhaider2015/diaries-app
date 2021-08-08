import { useEffect, useState } from "react"

export const LoginComp = () => {

    const handleSubmit = (e:any) =>
    {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // fetch("/api/login", {
        //     method : "POST",
        //     body : JSON.stringify({
        //         email : "shkhaider2015",
        //         password : "123456"
        //     })
        // })
        // .then(res => res.json())
        // .then(json => console.log("Json Response : ", json))
        // .catch(err => console.log("error response : ", err))
        
    }
    return <div className="row " style={{ height: '90vh', display: 'grid', placeItems: 'center' , overflow : 'hidden' }} >
    <div className="card p-5    shadow col-lg-6 col-md-8 col-sm-10 col-10 " >
        <form className="text-center" onSubmit={(e) => handleSubmit(e)} >
            <legend>Login</legend>
            
                <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="email" title="email" placeholder="Email" type="email" required />
            
                <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="password" title="password" placeholder="Password" type="password" required />
            
            <button className="w-75 mt-5 btn btn-primary shadow-sm" type="submit" >Submit</button>
        </form>
    </div>
</div>
}