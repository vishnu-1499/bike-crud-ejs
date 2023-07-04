const mongoose = require("mongoose");
const shema = mongoose.Schema
const data = new shema({
    registerBike:{
        type: String
    },
    bikeName:{
        type: String
    },
    bikeModel:{
        type: String
    },
    branchName:{
        type: String
    },
    bikePrice:{
        type: Number
    },
    date:{
        type: Date
    },
}, { timestamps: true})

module.exports = mongoose.model("Showroom", data)