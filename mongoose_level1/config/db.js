const mongoose=require("mongoose")

const url="mongodb://localhost:27017/glasscompany";

const connection= mongoose.connect(url)


module.exports=connection