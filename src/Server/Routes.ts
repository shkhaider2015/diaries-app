import { Request, Response } from "miragejs";

export const LoginRoute = (schema:any, request:Request)  => {
    const req = JSON.parse(request.requestBody);
    const body = JSON.parse(req.body);
    const email = body.email
    const user = schema.users.findBy({email : email});
    console.log("Login Request : ", user)

    if(!user)
    {
        return new Response(400)
    }

    return user;
}

export const SignupRoute = (schema:any, request:Request) => {
    const attrs = JSON.parse(request.requestBody);
    const body = JSON.parse(attrs.body);
    const email = body.email

    const user = schema.users.findBy({email : email})

    if(user)
    {
        console.log("Userv exist console")
        return new Response(401)
    }

    console.log("attrs : ", body)
    return schema.users.create(body)
}

export const AllUsers = (schema:any) => 
{
    return schema.users.all()
}

export const GETUSERDIARIES = (schema:any, request:any) => {
    const username = request.params.username;
    const user = schema.users.findBy({username : username});

    console.log("Backend --> username --> : ", request.params.username)
    console.log("Backend --> User --> : ", user)

    return user.diary;
}

export const GETALLDIARIES = (schema:any, request:any) => {
    return schema.diaries.all()
}

export const GETALLENTRIES = (schema:any, request:any) => {
    return schema.entries.all()
}