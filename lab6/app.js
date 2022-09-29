//khai bao
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

//set thu muc chua views
app.set("view", path.join(__dirname, "/views"));
//set view engine (template engine)
app.set("view engine", "hbs");

//render ra trang home (index.hbs)
//get: get method
app.get("/", (req, res) => {app.render("index");});

//chay web server 
app.listen(port, () => {
    console.log("Server is running at: http://localhost:8000");
})