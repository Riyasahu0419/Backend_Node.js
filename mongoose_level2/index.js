// const express = require("express")
// const server=express()
// const connection=require('./model/movieModel')
// const database=require('./config/db')
// server.use(express.json())


// server.post("/",async(req,res)=>{
//         const {title,hero,year,rating}=req.body
//         try {
//              const data= new connection({
//                 title,hero,year,rating
//              })
//              await data.save()
//              res.status(200).send("success")
                
//         } catch (error) {
//             res.status(400).send("data not found")    
//         }
// })




// server.listen(7070,async()=>{
//         try {
//             await database
//             console.log("server connected to database")
//         } catch (error) {
//             console.log(`error not connected to the database ${error}`)
//         }
// })



const express = require("express");
const server = express();
const Movie = require('./model/movieModel'); // Renaming for clarity
const database = require('./config/db');
server.use(express.json());


server.get("/",async(req,res)=>{
        const {title}=req.query
        try {
                const newtitle={}
                if(title){
                        newtitle.title=title
                }
             const Alldata= await Movie.find(newtitle)
             res.status(200).send(Alldata)  
        } catch (error) {
                
               res.status(401).send("Failed to save movie data");
        }
})

// server.get("/",async(req,res)=>{
//         try {
//              const data= await Movie.findOne()
//              res.status(200).send(data) 
              
//         } catch (error) {
                
//                 res.status(401).send("Failed to save movie data",error);
//         }
// })


server.post("/", async (req, res) => {
    const { title, hero, year, rating } = req.body;
    try {
        const movie = new Movie({
            title,
            hero,
            year,
            rating
        });
        await movie.save();
        res.status(201).send("Movie data saved successfully");
    } catch (error) {
        console.error("Error saving movie data:", error);
        res.status(400).send("Failed to save movie data");
    }
});

server.listen(7070, async () => {
    try {
        await database;
        console.log("Server connected to database");
    } catch (error) {
        console.error(`Failed to connect to the database: ${error}`);
    }
});

