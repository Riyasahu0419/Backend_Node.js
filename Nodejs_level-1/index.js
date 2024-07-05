const fs = require("fs");

// readfile
    fs.readFile("./test.txt", { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    })
    
// append text
   fs.appendFile("./test.txt",'\nthis is another msg which i appending there\n',(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log("Content appended to the file 'test.txt'")
    }
  })
  
  // deleted file
  fs.unlink('./test2.txt',(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log(" file 'test2.txt' deleted")
    }
    
  })
  
  // createing new file

  fs.writeFile('newfile','hello newfile',(err)=>{
     if(err){
       console.log(err)
     }else{
       console.log("File 'newfile' created")
     }
     
    })
    
    // reanaming file name
    fs.rename('./test1.txt','./new.txt',(err)=>{
      
      if(err){
        console.log(err)
      }else{
        console.log("File 'test.txt' renamed to 'new.txt'")
      }
    })

    // list directory
    fs.readdir('./index.js',(err)=>{
      if(err){
        console.log(err)
      }else{
        console.log("A list of all files and directories in the current directory")
      }
      
   })

    


