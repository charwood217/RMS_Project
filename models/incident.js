var mongoose =require('mongoose');

//Export Model
module.exports = mongoose.model('incidents', incidentsSchema);

var mongoose = require('mongoose');
var faker = require('faker');
var Schema = mongoose.Schema;
var IncidentSchema = new Schema({
    incident_type: { type: String, required: true, maxlength: 100 },
    incident_report_number: { type: String, required: true, maxlength: 100 },
    officer_name: { type: String, required: true, maxlength: 100 },
    Badge_number: { type: String, required: true, maxlength: 100 },
    date: { type: date, required:true, maxlength: 5 },
    location_information: { type: String, required: true, maxlength: 100 },
    location_common_name: { type: String, required: true, maxlength: 100 },
    narrative_info: { type: String, required: true, maxlength: 10000000 },
});