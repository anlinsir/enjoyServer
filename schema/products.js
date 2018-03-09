var mongoose = require("mongoose")

var ProductSchema = mongoose.Schema({
	trace_meta:String,
	desc:String,
	enjoy_url:String,
	entity_name:String,
	group:String,
	id:String,
	original_price:String,
	price:String,
	tag:String,
	title:String,
	type:String,
	url:String,
	url_type:String,
	header:Object


})
module.exports = ProductSchema