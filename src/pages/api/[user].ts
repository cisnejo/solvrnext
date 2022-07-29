import { NextApiRequest,NextApiResponse } from "next";
import {prisma}  from '../../db/client'

export default async (req: NextApiRequest, res:NextApiResponse)=>{
    const user = req.query["user"];

    console.log(user)

if(!user || typeof user !=="string"){
    res.statusCode = 404;

    res.send(JSON.stringify({mesasge:"not string"}))
    return;
}
    const data = await prisma.user.findFirst({
        where:{
            firstName:{
                equals: user
            }
        }
    })

    if(!data){
        res.statusCode = 404;
    
        res.send(JSON.stringify({mesasge:"user not found"}))
        return;
    }

    return  res.send(JSON.stringify({mesasge:`user ${data.firstName} was created at ${data.createdAt}`}))
}