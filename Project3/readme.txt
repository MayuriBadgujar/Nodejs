start the project first go to cmd and type following line

npm init -y
//package -lock json created

npm i express mongoose ejs
//

open cmd
1.for server mongodb 
1.1       d C:\Program Files\MongoDB\Server\4.2\bin
1.2       mongod.exe

2.client
2.1       cd C:\Program Files\MongoDB\Server\4.2\bin
2.2       mongo d


after that in package.json 

"scripts": {
    "start": "nodemon index.js"
  }


we use nodemon index.js for update my file word by word no need to run again again


********************************

after that create index.js
in that file write down following code

const express = require('express');
const mongoose = require('mongoose');


***************************

after create folder database
craete file db.js
go to npmjs website
search mongoose for connecting to the database
go to installing


const mongoose = require('mongoose');

//in overview
await mongoose.connect('mongodb://127.0.0.1/my_database');







                                         ****
                                         db.js
     const mongoose = require("mongoose");


async function dbconnection() {
    var connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/userdetails"
    );
    return connection;
}

module.exports = dbconnection;                                    




***************************************************
index.js

const db = require('./database/db.js');
db(); //its function


var app = express(); //undefined

app.use(express.json());  //our app is undefined datatatype to change that function we use this line



*******************************
create views folder
in that folder 
create 2 Files    adduser.ejs     showuser.ejs  menu.ejs

in menu.ejs
go to bootstraps website and put both lines add here
 search nav#
 paste code

 go to adduser
 <div class="container">
    <h1>Add user</h1>
</div>

go to showuser
<div class="container">
    <h1>Show user</h1>
</div>

//in template we embed js and html

in adduser and showuser.ejs
<%-include('menu')%> - for ejas


in index.jsapp.get('/add', function (req, res) {
    res.render('adduser.ejs');
});


app.get("/show", function (req, res) {
  res.render("showuser.ejs");
});

app.listen(9000);

 *******************
 in cmd type             npm start

 ****************
 go to browser
1st brow.
 localhost:9000/add
2nd brow.
 localhost:9000/show

adduser form created and  table s in showuser


  <li class="nav-item">
          <a class="nav-link" href="/add">Add User</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/show">Show User</a>
        </li>



        index.js
        create schema
        const Schema = mogoose.Schema;
        const userschema = new Schema(  {
        Name: String,
        Email: String,
        mobile:Number
    });
   


    //in mongoose last ch is s plural
    const usermodel = mongoose.model("newusers", userschema);//newuser is collection


show dbs

use userdetails

db.createCollection('newusers');

show collections

use newusers

db.newusers.insert([{
 "Name":"Mayuri",
 "Email":"mayu@gmail.com",
 "Mobile No":1234567898}
 ,
 {
 "Name":"Ananya",
 "Email":"anu@gmail.com",
 "Mobile No":1234567898}])
;

 db.newusers.find();




 in adduser
 <form action="/useraction" method="Post">

 index.js
 app.post("/useraction", function (req, res) {
     console.log(req.body);
})




//form related data will be fetch by using this url
app.use(express.urlencoded());

//if we not add this line then in terminal output is {}{}{

}


index.js

app.post("/useraction", async function (req, res) {
  //console.log(req.body);
  try {
    var record = new usermodel(req.body);
    await record.save();
    res.redirect("/show");
  } catch (err) {
    res.send(err.message);
  }
});





nodemailer search on chrome copy that link paste in cmd
npm install nodemailer

add this line to top
const nodemailer=require("nodemailer");





user: "mayuribadgujar1998@gmail.com",
pass: "zbta yluk yawl vrsr",