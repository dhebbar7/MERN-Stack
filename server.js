const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/Items");

const app = express();

//Body-parser middleware
app.use(bodyParser.json());

//DB config
// const db = require("./config/keys").mongoURI;
const db = "mongodb://127.0.0.1:27017/mern-shopping";

//Connect to mongodb
// mongoose
//   .connect()
//   .then(() => console.log("mongo connected"))
//   .catch(error => console.log(err));
mongoose
  .connect(db)
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

//Use routes
app.use("/api/items", items);

app.listen(port, () => console.log(`server started on ${port}`));
