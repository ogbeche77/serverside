const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream("./index.html");
res.writeHead(200, {"Content-type" : "text/html"});
/* const readStream = fs.createReadStream("./web14.jpeg");
res.writeHead(200, {"Content-type" : "image/jpeg"});
*/
readStream.pipe(res);


});
server.listen("3000");