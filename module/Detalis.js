var mongoose = require("mongoose")
var detailsSchema = require("../schema/details")

var detail = mongoose.model("details",detailsSchema )

module.exports = detail
