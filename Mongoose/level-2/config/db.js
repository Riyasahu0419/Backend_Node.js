const mongoose=require("mongoose")

const url="mongodb+srv://riyasahu0419:<password>@cluster0.k2fw7gz.mongodb.net/cap_10?retryWrites=true&w=majority&appName=Cluster0";

const connection= mongoose.connect(url)


module.exports=connection