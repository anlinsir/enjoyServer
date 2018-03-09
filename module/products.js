var mongoose = require("mongoose")
var ProductSchema = require("../schema/products")

var product = mongoose.model("products",ProductSchema)

module.exports = product
