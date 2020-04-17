//http post request and body parser, used for form login
//npm body parser used for this project

const express = require("express"); // when we require express module, we get back function
const path = require("path");
const Joi = require("joi");
const bodyParser = require("body-parser");
const exp = express();

exp.use("/public", express.static(path.join(__dirname, "static")));
exp.use(bodyParser.urlencoded({ extended: false }));

exp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "form.html"));
});

exp.post("/", (req, res) => {
  console.log(req.body);
  //schema used to set rules & detect validity of the email/password
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    pasword: Joi.string().min(5).max(10).required(),
  });
  Joi.validate(req.body, schema, (err, result) => {
    if (err) {
      res.send("error occured");
    }
    res.send("posted successfully");
  });
});

exp.listen(3000);
