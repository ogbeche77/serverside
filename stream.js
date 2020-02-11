// allows to read and write data in chunks
const fs = require("fs");
const readStream = fs.createReadStream ("./example3.txt", "utf8");
const writeStream = fs.createWriteStream ("./example1.txt") //send data to new file in real time
readStream.on ("data", (chunk)=>{
    writeStream.write(chunk);
});