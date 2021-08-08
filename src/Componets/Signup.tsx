export const SignupComp = () => {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        

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

    return <div className="row " style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
        {/* <button onClick={(e) => handleSubmit(e)} >Submit</button> */}
        <div className="card p-5 shadow col-lg-6 col-md-8 col-sm-10 col-10" >
            <form className="text-center" onSubmit={(e) => handleSubmit(e)} >
                <legend>Signup</legend>
                    <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="username" title="username" placeholder="Username" type="text" required />
                
                    <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="email" title="email" placeholder="Email" type="email" required />
                
                    <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="password" title="password" placeholder="Password" type="password" required />
                
                <button className="w-75 mt-5 btn btn-primary shadow-sm" type="submit" >Submit</button>
            </form>
        </div>
    </div>
}