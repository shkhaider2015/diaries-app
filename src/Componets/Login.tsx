import { useEffect, useState } from "react"

export const LoginComp = () => {
    // const [data, setData] = useState();
    // const [isCall, setIsCall] = useState();

    // useEffect(
    //     () =>
    //     {
    //         fetch("/api/users")
    //         .then(res => res.json())
    //         .then(json => setData(json))
    //         .catch(err => console.log("Error : ", err))

    //     }, []
    // )

    const handleSubmit = () =>
    {
        fetch("/api/login", {
            method : "POST",
            body : JSON.stringify({
                email : "shkhaider2015",
                password : "123456"
            })
        })
        .then(res => res.json())
        .then(json => console.log("Json Response : ", json))
        .catch(err => console.log("error response : ", err))
        
    }
    return <div style={{ height : '100vh', display : 'grid', placeItems : 'center' }} >
        
        <h1>Login</h1>
            {/* {console.log("Data : ", data)} */}
        <button onClick={() => handleSubmit()} >Submit</button>
    </div>
}