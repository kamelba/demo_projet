const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();


// body-parser Middlware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));


//passport Midleware
app.use(passport.initialize());

//passport Config
require("./config/passport")(passport);


//connect bd
const db = "mongodb://localhost:27017/DataBase";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//use route
// app.use("/annonce", require("./routes/annonce"));


app.use("/users", require("./routes/users"));


app.listen(5000, err => {
  if (err) console.log("failed to connect");
  else {
    console.log("server started on port 5000");
  }
});


