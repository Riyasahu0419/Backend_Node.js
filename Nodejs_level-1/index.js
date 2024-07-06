const fs=require("fs")
function readfile(file){
  // readfile
      fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      })
  }


  // append text
  function appendfile(file){

    fs.appendFile(file,'\nthis is another msg which i appending there\n',(err)=>{
      if(err){
        console.log(err)
      }else{
        console.log("Content appended to the file 'test.txt'")
      }
    })
  }

  // deleted file
  function deletefile(file){
    fs.unlink(file,(err)=>{
      if(err){
        console.log(err)
      }else{
        console.log(" file 'test.txt' deleted")
      }
      
    })
  }


  // createing new file
function createfile(file){

  fs.writeFile(file,'hello newfile',(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log("File 'newfile' created")
    }
    
  })
}
   
   // reanaming file name
   function renamefile(file){

     fs.rename(file,'./new.txt',(err)=>{
       
       if(err){
         console.log(err)
        }else{
          console.log("File 'test.txt' renamed to 'new.txt'")
        }
      })
    }

   // list directory
   function listdirec(file){
     fs.readdir(file,(err)=>{
       
       if(err){
         console.log(err)
        }else{
          console.log("A list of all files and directories in the current directory")
        }
        
      })
    }
      
  const operation = process.argv[2];
  const file = process.argv[3];
  if(operation=="read"){
      readfile(file)
  }
  else if(operation=="append"){
      appendfile(file)
  }
  else if(operation=="delete"){
      deletefile(file)
  }
  else if(operation=="create"){
      createfile(file)
  }
  else if(operation=="rename"){
      renamefile(file)
  }
  else if(operation=="list"){
      listdirec(file)
  }

  