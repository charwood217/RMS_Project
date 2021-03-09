var mongoose = require('mongoose');
const { DateTime } = require("luxon");

var Schema = mongoose.Schema;

var vehicleReportSchema = new Schema({
    licenseplate: { type: String, required: true, maxlength: 100 },
    licenseplate_state: {type: String, required: false, maxlength: 100 },
    car_make: { type: String, required: true, maxlength: 100 },
    car_year: { type: Number, required: true },
    color_of_car: { type: String, required: true },
    vin: {type: String, required: true},
    value: {type: String, required: true},
    owner: {type: String, required: true},
    officer_serial_number: {type: String, required: true},
});


//Export Model
module.exports = mongoose.model('vehicleReport', vehicleReportSchema);