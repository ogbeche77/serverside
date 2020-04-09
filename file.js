//create(write) and read file

const fs = require("fs");
//create file, 1st argument is name of file, 2nd is content of file,3rd is call back
fs.writeFile("example.txt", "Hier ist ein beispiel", (err) => {
  if (err) console.log(err);
  else console.log("File created");
  fs.readFile("example.txt", "utf8", (err, file) => {
    //utf8 encoding ensures content is read
    if (err) console.log(err);
    else console.log(file);
  });
});
/*//renaming file
const fs = require("fs");

fs.rename("example.txt", "example3.txt", (err)=>{
if(err)
console.log(err);
else
console.log("file renamed");
});

*/

//adding content to file

/*const fs = require("fs");

fs.appendFile("example3.txt", " its in german", (err)=>{
    if(err)
    console.log(err);
    else
    console.log("sentence added to file");
});
*/
