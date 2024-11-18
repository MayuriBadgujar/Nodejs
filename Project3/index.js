// Import the Express library
//Express provides tools for building web servers and APIs quickly and easily
const express = require("express");
const mongoose = require("mongoose");
const db = require("./database/db.js");
const nodemailer = require("nodemailer");
db();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mayuribadgujar1998@gmail.com",
    pass: "zbta yluk yawl vrsr",
  },
});

const Schema = mongoose.Schema;

const userschema = new Schema({
  Name: String,
  Email: String,
  mobile: Number,
});

const usermodel = mongoose.model("newusers", userschema);

// Create an Express application
var app = express();
app.use(express.json());

app.use(express.urlencoded());

app.get("/add", function (req, res) {
  res.render("adduser.ejs");
});

app.get("/show", async function (req, res) {
  // res.render("showuser.ejs");

  try {
    var result = await usermodel.find();
    res.render("showuser.ejs", { data: result });
  } catch (err) {
    res.send(err.message);
  }
});

app.post("/useraction", async function (req, res) {
  //console.log(req.body);
  try {
    var record = new usermodel(req.body);
    await record.save();
    main(req.body.Email);
    res.redirect("/show");
  } catch (err) {
    res.send(err.message);
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main(emailid) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "<harshalgosavi334@gmail.com>", // sender address
    to: emailid, // list of receivers
    subject: "JS Application", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

// Start the server and listen on a specific port (e.g., 3000)
app.listen(9000);
