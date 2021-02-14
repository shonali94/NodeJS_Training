var mongoose = require('mongoose');

var departmentSchema = mongoose.Schema({
    name: String,
    location: String
})

module.exports = mongoose.model("Department", departmentSchema);
