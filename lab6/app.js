//khai bao
const express = require("express");
const app = express();
const path = require("path");
const { render } = require("pug");
const port = process.env.PORT || 8000;

//set thu muc chua views
app.set("views", path.join(__dirname, "/views"));
//set view engine (template engine)
app.set("view engine", "hbs");

//render ra trang home (index.hbs)
//get: get method
app.get("/", (req, res) => {
    let name = "Greenwich university";
    let address = "2 pham van bach";
    res.render("index", { n: name, a: address});
});
app.get("/city", (req, res) => {
    //let country = "VietNam";
    let cities = ["Hanoi", "HCM", "Da nang", "Can tho"];
    res.render("city", { country: "Vietnam", cities: cities});
});

//chay web server 
app.listen(port, () => {
    console.log("Server is running at: http://localhost:8000");
})