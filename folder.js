//make folder and file inside the folder folder
const fs = require("fs");
fs.mkdir("tutorial", (err)=>{ //mkdir means make directory
  if(err)
  console.log(err);
  else{
      fs.writeFile("./tutorial/example.txt", "I am here", (err)=>{ //file path,content,3rd argiment
         if(err)
         console.log(err);
         else {
             console.log("file created");
         }
      });

  }
  });


     


//deleting a folder that also has a file

/*const fs = require("fs");
fs.unlink("./tutorial/example.txt", (err)=>{
    if(err)
    console.log(err);
    else{
        fs.rmdir("tutorial",(err)=>{
            if(err)
            console.log(err);
            else{
                console.log("deleted folder");
            }
        });

    }
}); */
