require("dotenv").config();

const http = require("http");
// const route = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db.connect");
const route = require("./routes");

const app = express();

// cors

const options = {
  origin: "*",
};
app.use(cors(options));

// cookie
app.use(cookieParser());

// body parser 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/v1", route);

//database connection
connectDB();
// ejs 
// app.set("view engine", "ejs");

// app.get("/login", (req, res) => {
//   res.render("./login.ejs");
// });

// app.get("/register", (req, res) => {
//   res.render("./register.ejs");
// });

// app.get("/addproduct", (req, res) => {
//   res.render("./addproduct.ejs");
// }); 

// serser
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started");
});
