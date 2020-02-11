const http = require("http");
const server = http.createServer((req,res)=>{ //req is what client request
    res.write("I am home");
    res.end();
});

server.listen("3000");