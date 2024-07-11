const express =require("express")
const app=express()
const fs=require("fs")
app.use(express.json())

// get request
app.get("/home",(req,res)=>{
    res.send("hello nodejs")
})

// post request
app.post("/home1",(req,res)=>{
    const data=req.body
    console.log(data)
    let flag=false
    const jsondata=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    jsondata.todo.forEach((ele) => {
        if(ele.name==data.name){
            flag=true
            res.send("data already present")
        }
    });
if(flag==false){ 
    jsondata.todo.push(data)
    fs.writeFileSync("./db.json",JSON.stringify(jsondata))
    res.send("data added")
    
}

})

// update request
app.patch("/home2",(req,res)=>{
    const jsondata1=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    jsondata1.todo.forEach((ele)=>{
        if(ele.id%2==0){
            ele.status=true
            
        }
    })
    fs.writeFileSync("./db.json",JSON.stringify(jsondata1))
    res.send("status updated")
})


// delete request

app.delete("/home3",(req,res)=>{
    const jsondata1=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    const deletedata=jsondata1.todo.filter((ele)=>{
        
        return(ele.status!=true)
    })
    fs.writeFileSync("./db.json",JSON.stringify(deletedata))
    res.send("status deleted")


})


app.listen(8080,()=>{
    console.log("server is running")
})