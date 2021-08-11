import { Request, Response } from "miragejs";

export const LoginRoute = (schema:any, request:Request)  => {
    const req = JSON.parse(request.requestBody);
    const email = req.email
    console.log("Login Request : ", req)
    const user = schema.users.findBy({email : email});

    if(!user)
    {
        return new Response(400)
    }

    return user;
}

export const SignupRoute = (schema:any, request:Request) => {
    const attrs = JSON.parse(request.requestBody);
    const email = attrs.email

    const user = schema.users.findBy({email : email})

    if(user)
    {
        console.log("Userv exist console")
        return new Response(401)
    }

    return schema.users.create(attrs)
}

export const AllUsers = (schema:any) => 
{
    return schema.users.all()
}