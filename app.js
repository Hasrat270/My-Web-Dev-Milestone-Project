const path = require("path");

const express = require("express");

const db = require("./data/database");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.set("view engine", "ejs"); // setting ejs
app.set("views", path.join(__dirname, "views")); // engine

app.use(express.static("public")); // access static files
app.use(express.urlencoded({ extended: false }));

app.use(authRoutes);

db.connectToDatabase()
  .then(function () {
    app.listen(3000, function () {
      console.log("Server Listening on : http://localhost:3000/signup");
    });
  })
  .catch(function (error) {
    console.log("Failed to connect to database!");
    console.log(error);
  });
