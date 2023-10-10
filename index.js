const express = require("express");
const cors = require("cors");

const connectDB = require("./config/connectDB");

const app = express();
app.use(cors());

//connect to db
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server started");
});
