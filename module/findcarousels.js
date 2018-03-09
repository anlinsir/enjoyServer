var mongoose = require("mongoose")
var findcarouselSchema = require("../schema/findcarousels")

var findcarousel = mongoose.model("findcols",findcarouselSchema)

module.exports = findcarousel
