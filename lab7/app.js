const express = require("express");
const app = express();
const app = require("path");
const port = process.removeAllListeners.PORT || 9000

//cau hinh view va view engine
app.set("view", path,join(__dirname, "/views"));
app.set("view engine", "hbs");

//ket noi data base
const mongoose = require("mongoose");
const MobileModel = require("./models/MobileSchema");
const { join } = require("path");
const url = "mongodb://localhost:27017/Local";
//const url = "mongodb+srv://admin:<admin>@cluster0.nrru4jv.mongodb.net/Cluster0";
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (err) {
      console.log("DB connect error: " + err);
    } else {
      //console.log("DB connect succeed !");
      app.get("/", (req, res) => {
        MobileModel.find((err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      });
    }
  });
//chay server
app.listen(port);