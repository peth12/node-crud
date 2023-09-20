const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://pethkk12:1234@cluster0.dihhd3p.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connect success"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUserById/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, age: req.body.age })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete(`/deleteUser/:id`, (req, res) => {
    const id = req.params.id;
    UserModel.deleteOne({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
})

const port = 4000;
app.listen(port, () => {
  console.log(`Server Start in Port ${port}`);
});
