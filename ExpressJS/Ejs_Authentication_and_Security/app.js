require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
// const md5 = require("md5"); // replaced with bcrypt hashing and salting alg
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/userDb", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

//encrypting password without hashing
// userSchema.plugin(encrypt, {
//   secret: process.env.SECRET,
//   encryptedFields: ["password"],
// });
const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    const newUser = new User({
      email: req.body.username,
      password: hash,
    });
    newUser.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(hash);
        res.render("secrets");
      }
    });
  });
});
app.post("/login", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  console.log(password);
  User.findOne({ email: email }, (err, foundUser) => {
    if (err) {
      console.log(password);

      console.log(err);
    } else {
      if (foundUser) {
        console.log("******************************");
        bcrypt.compare(password, foundUser.password, function (err, result) {
          console.log(result);
          if (result === true) {
            console.log(password);
            res.render("secrets");
          }
        });
      }
    }
  });
});
app.listen(3000);
