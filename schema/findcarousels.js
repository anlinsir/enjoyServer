var mongoose = require("mongoose")

var FindCarouselSchema = mongoose.Schema({
	img:String,
	text1:String,
	text2:String,
	text3:String,
	href:String
})
module.exports = FindCarouselSchema