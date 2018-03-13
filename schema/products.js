var mongoose = require("mongoose")

var ProductSchema = mongoose.Schema({
	group_section:Object,
	tabs:Array


})
module.exports = ProductSchema