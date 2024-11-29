require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const cors = require("cors");
const MongoStore = require("connect-mongo")(session);

const indexfile = require("./router/index");



// App Engine
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("public", express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cookieParser());

app.use("/", indexfile);

// Development Server

const dbURI = `mongodb+srv://name:password@cluster0.0tq4xsw.mongodb.net/bms?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(7777);
    console.log("MongoDB connected...");
  })
  .catch((err) => console.log(err));
