const http = require("http");
const server = http.createServer((req, res) => {
  //req is what client request
  if (req.url === "/") {
    res.write("Hello mehn");
    res.end(); //sends request to client
  }
});

server.listen("3000");
