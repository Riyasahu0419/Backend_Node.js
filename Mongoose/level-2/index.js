const express=require("express")
const connection=require("./config/db")
const GlassModel=require("./models/glass.model")

const server=express();
const PORT=3080;
server.use(express.json());


server.post("/create",async(req,res)=>{
    
    const {color,material,size,brand}=req.body;
    try {
        const glass=new GlassModel({
            color,
            material,
            size,
            brand
        })
        await glass.save()
        res.status(201).send("glass created successfully")
    } catch (error) {
        res.status(404).send("error creating glaas")
    }
})


server.get("/",async(req,res)=>{
    try {
        const glaas= await GlassModel.find()
        res.send(glaas)
        res.status(201).json("glass finding successfully",glaas)
    } catch (error) {
        
        res.status(404).send(`error not finding glaas ${error}`)
    }
})


server.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const glass=await GlassModel.findByIDAndUpdate({_id:id},req.body)
        res.status(201).json({"msg":"glass updated successfully"},glass)
    } catch (error) {
        res.status(404).send(`error not updated glaas ${error}`)
    }
})

server.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const glass=await GlassModel.findByIDAndDelete({_id:id},req.body)
        res.status(201).json({"msg":"glass deleting successfully"},glass)
    } catch (error) {
        res.status(404).send(`error not deleting glaas ${error}`)
    }
})




server.listen(PORT,async()=>{
    
    try {
       await connection;
        console.log(`server is connected to server ${PORT} and onnected to the database`)
        
    } catch (error) {
        
        console.log(`error not connected to the database ${error}`)
    }
});


