const express= require("express")
const server=express()

var morgan = require('morgan')

morgan('tiny')
server.use(morgan('tiny'))
morgan(':method :url :status :res[content-length] - :response-time ms')

server.get("/",(req,res)=>{
    res.status(200).json("get request is successfull")
})

server.get("/add-user",(req,res)=>{
    res.status(200).json("data is recieved")
})


server.post("/user",(req,res)=>{
    res.status(201).json("data added successfull")
})


server.put("/user:id",(req,res)=>{
    
    res.send(`user-data ${req.params.id} data updation successfull`)
})

server.delete("/user:id",(req,res)=>{
    res.send(`user-data ${req.params.id} data deleted successfull`)
    
})




server.listen(8080,()=>{
    console.log("server is running")
})


