const express=require("express")
const connection=require("./config/db")
const GlassModel=require("./models/glass.model")

const server=express();
const PORT=3030;
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







// const mongoose=require("mongoose")

// const glassSchema=mongoose.Schema({
//     color:String,
//     material:String,
//     size:Number,
//     brand:{type:String, required:true}
// },{
//     versionKey:false
// })

// const GlassModel=mongoose.model("glass",glassSchema)

// const main=async()=>{
//     try{
//         const connection= await mongoose.connect(url)
//         console.log(`server is connected to server`)
//         // await GlassModel.insertMany([{color: "Red", material: "Cotton", size: 42, brand: "Nike"},{color: "Blue", material: "Denim", size: 38, brand: "Levi's"},{color: "Black", material: "Leather", size: 40, brand: "Gucci"},
//         //     {color: "White", material: "Polyester", size: 36, brand: "Adidas"}])
        
//         const glass = new GlassModel({
//             color: "Gray",
//             material: "Silk", 
//             size: 44, 
//             brand: "Armani"
//         });
//         await glass.save()
//         console.log("data added successfully")
        
//         connection.disconnect()
        
//     }catch(error){
        
//         console.log(`error not connected to the database ${error}`)
//     }

// }

// main()