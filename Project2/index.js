var express = require("express");
//mongoose for database
var mongoose = require("mongoose");

//my database folder name and file name
var db = require("./database/db.js");
//console.log(db);
db();





//mongoose search mongoose database model
//Defining a Model
const Schema = mongoose.Schema;
const productshema = new Schema({
  name: String,
  price: Number,
  discount: Number
});

// Accessing a Model
const userModel = mongoose.model("products", productshema);

var app = express();


//localhost:9000/users
app.get("/products",async function (req, res) {
    try {
        var result = await userModel.find();
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }
});
//app.get("/users", function (req, res) {
 //res.send("fetch data from database");
//});
app.listen(9066);



app.post("/users", async function (req, res) {
  try {
    var record = new userModel(req.body);
    var ans = await record.save();
    res.send("record inserted");
  } catch (err) {
    res.send(err.message);
  }
});

app.delete("/users", function (req, res) {
  res.send("delete data from database");
});
app.listen(9065);

//mysql
//rout name
//http://localhost:9065/userinfo
app.get("/userinfo", function (req, res) {
  connection.query("select * from emp", function (err, result) {
    if (err) {
      res.send(err.message);
    } else {
      res.send(result);
    }
  });
});

//post method
app.post("/userinfo", function (req, res) {
  console.log(req.body);
  connection.query("Insert into emp set ?", req.body, function (err, result) {
    if (err) {
      res.send(err.message);
    } else {
      res.send("user added");
    }
  });
});