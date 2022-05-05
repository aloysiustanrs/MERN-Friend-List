const express = require("express");
const app = express();
const port = 3001;

const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");

//Connect to database
mongoose.connect("mongodb://localhost:27017/MERNFriendList");

//route to insert data to database
app.get("/insert", async (req, res) => {
  const friend = new FriendModel({ name: "cchhias", age: 22 });
  await friend.save();
  res.send("data inserted");
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

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
