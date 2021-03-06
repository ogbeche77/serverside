//http post request and body parser, used for form login
//npm body parser used for this project

const express = require("express"); // when we require express module, we get back function
const path = require("path");
const bodyParser = require("body-parser");
const exp = express();

exp.use("/public", express.static(path.join(__dirname, "static")));
exp.use(bodyParser.urlencoded({ extended: false }));

exp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "form.html"));
});

exp.post("/", (req, res) => {
  console.log(req.body);
  //database section here
  res.send("login successful");
});

exp.listen(3000);
