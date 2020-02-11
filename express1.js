const express = require("express"); // when we require express module, we get back function
const exp = express();
exp.get("/",(req,res)=>{
res.send ("Hi my friend")
});

exp.get("/home",(req,res)=>{
    res.send ("Hi my friend, are you home?")
    });

    exp.get("/home/:name/:age", (req,res)=>{
        console.log(req.params);
        console.log(req.query);// useful for optional setting 
        res.send(req.params.name + " : " + req.params.age );
    });
    
exp.listen(3000);
