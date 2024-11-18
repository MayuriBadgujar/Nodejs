// Using Node.js `require()`
const mongoose = require("mongoose");

//we can change dbconnect name
async function dbconnect() {
  //this line from mongoose npmjs
  //search  mongoose  and add this line
    //mongoose.connect('mongodb://127.0.0.1:27017/test')
    //test is my database table name
  var connection = await mongoose.connect(
    "mongodb://127.0.0.1:27017/productdetails"
  );
  return connection;
}

module.exports = dbconnect;