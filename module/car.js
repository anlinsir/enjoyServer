var mongoose = require("mongoose")
var carsSchema = require("../schema/car")

var car = mongoose.model("cars",carsSchema )

module.exports = car
