// pipes takes a readable stream and sends to it destination(writable)
const fs = require("fs");
const readStream = fs.createReadStream ("./example3.txt", "utf8");
const writeStream = fs.createWriteStream ("./example2.txt")
readStream.pipe(writeStream);