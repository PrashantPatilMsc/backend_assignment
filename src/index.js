const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./routes/route.js");

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(bodyParser.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);

//Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL + "/movies", {
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Express Server is running on PORT: ${process.env.port || 3000}`);
});
