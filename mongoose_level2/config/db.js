const mongoose=require("mongoose")

const url=mongoose.connect("mongodb://localhost:27017/Store")

module.exports=url