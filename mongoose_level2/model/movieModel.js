const mongoose=require("mongoose")
const movieSchema=mongoose.Schema({
        title:String,
        hero:String,
        year:Number,
        rating:Number
},{versionKey:false})

const movieModel=mongoose.model("movie",movieSchema)

module.exports=movieModel
