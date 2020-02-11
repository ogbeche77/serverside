const express = require("express"); // when we require express module, we get back function
const path = require("path");
const exp = express();
exp.use("/public",express.static(path.join(__dirname,"static")));

exp.get("/",(req,res)=>{
res.sendFile (path.join(__dirname,"static","index.html"));

});
    
exp.listen(3000);
