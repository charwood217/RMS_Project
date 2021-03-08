var mongoose = require('mongoose');
// const { DateTime } = require("luxon");

var Schema = mongoose.Schema;

var personReportSchema = new Schema({
    first_name: { type: String, required: true, maxlength: 100 },
    middle_name: {type: String, required: false, maxlength: 100 },
    last_name: { type: String, required: true, maxlength: 100 },
    phonenumber: { type: Number, required: true },
    city: { type: String, required: true },
    state: {type: String, required: true},
    country: {type: String, required: true},
    height: {type: String, required: true, maxlength: 5},
    weight: {type: String, required: true, maxlength: 4},
    witness: {type: String, required: true},
    victim: {type: String, required: true},
    race: {type: String, required: true},
    gender: {type: String, required: true},


});



//Export Model
module.exports = mongoose.model('personReport', personReportSchema);