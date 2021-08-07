export const SignupComp = () => {

    const handleSubmit = () =>
    {
        fetch("/api/signup", {
            method : "POST",
            body : JSON.stringify({
                username : "shakeel_haider",
                email : "shkhaider2015",
                password : "123456"
            })
        })
        .then(res => res.json())
        .then(json => console.log("Json Response : ", json))
        .catch(err => console.log("error response : ", err))
        
    }

    return <div style={{ height : '100vh', display : 'grid', placeItems : 'center' }} >
        <h1>Signup</h1>
        <button onClick={() => handleSubmit()} >Submit</button>
    </div>
}