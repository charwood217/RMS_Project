var mongoose = require('mongoose');
const { DateTime } = require("luxon");

var Schema = mongoose.Schema;

var incidentReportSchema = new Schema({
    date_of_occurence: { type: String, required: true, maxlength: 100 },
    report_date: {type: String, required: false, maxlength: 100 },
    incident_type: { type: String, required: true, maxlength: 100 },
    address_of_incident: { type: Number, required: true },
    name_of_location: { type: String, required: true },
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
module.exports = mongoose.model('incidentReport', incidentReportSchema);