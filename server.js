const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const items = require("./routes/api/Items");

const app = express();

//Body-parser middleware
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;
//const db = "mongodb://127.0.0.1:27017/mern-shopping";

//Connect to mongodb
mongoose
  .connect()
  .then(() => console.log("mongo connected"))
  .catch(error => console.log(err));
// mongoose
//   .connect(db)
//   .then(() =>
//     console.log("MongoDB database connection established successfully")
//   )
//   .catch(err => console.log(err));

const port = process.env.PORT || 5000;

//Use routes
app.use("/api/items", items);

//server static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () => console.log(`server started on ${port}`));
