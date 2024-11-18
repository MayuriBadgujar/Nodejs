//mysql code
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cdac"
});
 


var express = require('express');

var mongoose = require("mongoose");

var db = require("./Database/db.js");
var cors = require("cors");
//console.log(db);
db();

//Defining a Model
const Schema = mongoose.Schema;
const usersschema = new Schema({
  name: String,
  age: Number,
  place: String,
});

// Accessing a Model
const userModel = mongoose.model("users", usersschema);


//console.log("Hello world!");

//var express = require("express");
var app = express();

app.use(cors());
app.use(express.json());

//localhost:9000/users
app.get("/users",async function (req, res) {
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
// app.listen(9065);

app.put("/users", function (req, res) {
  res.send("add data from database");
});
// app.listen(9065);



// app.post("/users", function (req, res) {
//   res.send("post data from database");
// });
// // app.listen(9065);



// app.post("/users", function (req, res) {
//     console.log(req.body);
// });
 


app.post("/users",async function (req, res) {
    try {
        var record = new userModel(req.body);
        var ans = await record.save();
        res.send("record inserted");
    }
    catch (err) {
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
        }
        else {
            res.send(result);
        }
    })
});


//post method
app.post("/userinfo", function (req, res) {
    console.log(req.body);
    connection.query("Insert into emp set ?",
        req.body,
        function (err, result) {
            if (err) {
                res.send(err.message);

            }
            else {
                res.send("user added");
            }
        }
    );
});