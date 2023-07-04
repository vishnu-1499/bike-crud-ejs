const express = require("express");
const router = express.Router()

const list = require("../module/model");
const { set } = require("mongoose");

//Get Method
router.get("/", (req,res)=>{
    try {
        res.send("helloooo")
    } catch (error) {
        res.send("error")
    }
})

//Get Create Method
router.get("/add", (req,res) =>{
    res.render("add")
})

// router.get("/emi/:bikePrice", async(req,res) =>{
//     console.log('value---', res.body);

//     const value = await list.find()
    
//     res.render("emi",{user: value})
// })

router.get("/emi/:id", async(req,res) =>{
   console.log('res---', req.params.id)
   let bikeDBID = req.params.id;
    
    const value = await list.findOne({
        '_id':bikeDBID
    })
    console.log('value---', value);
    res.render("emi",{user: value})
})

//Create Method
router.post("/create", async(req,res) =>{
    const users = new list({
        registerBike: req.body.registerBike,
        bikeName: req.body.bikeName,
        bikeModel: req.body.bikeModel,
        branchName: req.body.branchName,
        bikePrice: req.body.bikePrice,
        date: req.body.date
    })
    try {
        const value = await users.save()
        res.send({message: "Created", value})
        console.log(value);
    } catch (error) {
        res.send({message: "Not Created"})
    }
})

//Read Method
router.get("/read", async(req,res) =>{
    
    try {
        const value = await list.find()
        // console.log('res---', value);
        // res.send({message: "Table Created ", value})
        res.render("index", {set: value})
    } catch (error) {
        res.send({message: "Table NOt Created"})
    }
})

//FindByID Method
router.get("/find/:bikeModel",async(req,res) =>{
    let bikemodel = req.params.bikeModel ;
    try {
        const value = await list.find({type})
        res.send({message: "Value Created ", value})
    } catch (error) {
        res.send({message: "Value NOt Created"})
    }
})

//Get Update Method
router.get("/update/:id",async(req,res) =>{
    let id = req.params.id ;
    try {
        const value = await list.findById(id)
        res.render("update", {user: value})
    } catch (error) {
        res.send({message: "Value NOt Created"})
    }
})

//Update Method
router.post("/update/:id", async(req,res) =>{
    let id = req.params.id;
    const edit = ({
        registerBike: req.body.registerBike,
        bikeName: req.body.bikeName,
        bikeModel: req.body.bikeModel,
        branchName: req.body.branchName,
        bikePrice: req.body.bikePrice,
        date: req.body.date
    })
    try {
        const value = await list.findByIdAndUpdate(id, {$set: edit})
        res.send({message: "Updated", value})
    } catch (error) {
        res.send({message: "Not Updated"})
    }
})

//Delete Method
router.post("/delete/:id", async(req,res) =>{
    let id = req.params.id;

    try {
        const value = await list.findByIdAndDelete(id)
        res.send({message: "Deleted", value})
    } catch (error) {
        res.send({message: "Not Deleted"})
    }
})

module.exports = router;