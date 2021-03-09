var mongoose = require('mongoose');
// const { DateTime } = require("luxon");

var Schema = mongoose.Schema;

var personReportSchema = new Schema({
    firstname: { type: String, required: true, maxlength: 100 },
    middlename: {type: String, required: false, maxlength: 100 },
    lastname: { type: String, required: true, maxlength: 100 },
    socialsecurity: { type: Number, required: true },
    age: { type: String, required: true },
    birthdate: {type: String, required: true},
    phonenumber: {type: String, required: true},
    homeaddress: {type: String, required: true, maxlength: 5},
    weight: {type: String, required: true, maxlength: 4},
    height: {type: String, required: true},
    eyecolor: {type: String, required: true},
    race: {type: String, required: true},
    gender: {type: String, required: true},


});



//Export Model
module.exports = mongoose.model('personReport', personReportSchema);