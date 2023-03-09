// Importing Proper libraries and functions
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const UserModel = require("./models/User");

//express js
const app = express();

//getting permissions and filters
app.use(express.json());
app.use(cors());

//setting up Mongoose
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://keti:test123@wiki.ghfxak6.mongodb.net/mcp?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

//api for account creation
app.post("/createUser", async (req, res) => {
  console.log("Creating Account");
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user.status);
  console.log("Account Created,--- I think");
});

//api for logging in
app.post("/validate", async (req, res) => {
  const user = await UserModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    console.log("Account exists");
    return res.json({ status: "ok", user: user });
  } else {
    return res.json({ status: "error", user: false });
  }
});

//Updates username
app.post("/editname", async(req, res) => {
  console.log(req.body.username)
  console.log(req.body.id)

  const newuser = req.body.username
  const _id = req.body.id

  const user = await UserModel.findByIdAndUpdate(
        _id,
        {
          username: newuser,
        },
        function (err, result) {
          if (err) console.log(err);
          console.log(result);
        }
      ).clone();
})

app.post("/editpass", async(req, res) => {
  console.log(req.body.password)
  console.log(req.body.id)

  const newpass = req.body.password
  const _id = req.body.id

  const user = await UserModel.findByIdAndUpdate(
        _id,
        {
        password: newpass,
        },
        function (err, result) {
          if (err) console.log(err);
          console.log(result);
        }
      ).clone();
})

//App listening on port 8080
app.listen(8080, (req, res) => {
  console.log("Server is Online");
});
