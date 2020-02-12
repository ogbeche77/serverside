//to make our webpage dynamic

const express = require("express"); // when we require express module, we get back function
const path = require("path");
const exp = express();

exp.use("/public",express.static(path.join(__dirname,"static")));
exp.set("view engine", "ejs");
exp.get("/",(req,res)=>{
res.render("index");
});

exp.listen(3000);


