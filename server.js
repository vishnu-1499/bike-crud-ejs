const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs")
const path = require("path")
const router = require("./router/route")

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect("mongodb+srv://clariscovignesh6:Clarisco2023@cluster0.dez28zp.mongodb.net/Harivishnu",
{ useNewUrlParser: true, useUnifiedTopology: true },
console.log("DB Connected Suessfully...."));

app.set("view engine", "ejs")
app.use("/",router)

app.listen(5000, (req,res) =>{
    console.log("Running on PORT 5000");
})