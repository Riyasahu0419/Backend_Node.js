const express = require("express");
const { isString } = require("util");
const server = express();

const port = 8080;

server.use(express.json());

function IsString(Cast){
    let flag=true
    Cast.map((ele)=>{
        if(typeof ele!="string"){
            flag=false
        }
    })
    return flag
}


const Middleware =(req,res,next)=>{
    let invalidtypeof=""
    let {ID,Name, Rating,Description,Genre,Cast}=req.body;
    // console.log(data)
    if(typeof ID!="number"){
            invalidtypeof+="please enter number type"
    }

    if(typeof Name!="string"){
        invalidtypeof+="please enter string type"
    }

    if(typeof Rating!="number"){
        invalidtypeof+="please enter number type"
    }

    if(typeof Description!="string"){
        invalidtypeof+="please enter string type"
    }

    if(typeof Genre!="string"){
        invalidtypeof+="please enter string type"
    }

    if(!Array.isArray(Cast)|| !IsString(Cast)){
        invalidtypeof+="please enter array type"
    }
    if(invalidtypeof){
        return res.status(404).json({message:"bad request some data is incorrect"})
    }
    
    
    next()
};

server.post("/",Middleware,(req,res)=>{
    res.status(200).json({message:"data received"})
})


server.listen(port,()=>{
    console.log("server is running")
})