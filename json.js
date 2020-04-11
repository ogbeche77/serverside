//handling json data using express & body parser
//http post request and body parser, used for form login
//npm body parser used for this project
//jquery data is posted using ajax

const express = require("express"); // when we require express module, we get back function
const path = require("path");
const bodyParser = require("body-parser");
const exp = express();

exp.use("/public", express.static(path.join(__dirname, "static")));
exp.use(bodyParser.urlencoded({ extended: false }));
exp.use(bodyParser.json()); //parse json & attach to request.body

exp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "form1.html"));
});

//database section here
exp.post("/", (req, res) => {
  console.log(req.body);

  res.json({ success: true });
});

exp.listen(3000);
