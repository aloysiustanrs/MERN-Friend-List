const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");
require("dotenv").config();

app.use(cors()); //to let us connect frontend to backend
app.use(express.json()); //to get JSON

//Connect to database
mongoose.connect(
  "mongodb+srv://aloy2312:<Password>@cluster0.dxph1.mongodb.net/MERNFriendList?retryWrites=true&w=majority"
);

//get data from frontend and send to database
app.post("/addfriend", async (req, res) => {
  //req.body is the data send from front end
  const name = req.body.name;
  const age = req.body.age;

  const friend = new FriendModel({ name: name, age: age });
  await friend.save();
  res.send(friend);
});

app.get("/read", async (req, res) => {
  FriendModel.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.put("/update", async (req, res) => {
  const newAge = req.body.newAge;
  const id = req.body.id;

  try {
    await FriendModel.findById(id, (error, friendToUpdate) => {
      friendToUpdate.age = Number(newAge);
      friendToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }

  res.send("updated");
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await FriendModel.findByIdAndRemove(id).exec();
  res.send("item deleted");
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`App is running`);
});
