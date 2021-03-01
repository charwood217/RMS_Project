var mongoose =require('mongoose');

//Export Model
module.exports = mongoose.model('vehicle', vehicleSchema);

var mongoose = require('mongoose');
var faker = require('faker');
var Schema = mongoose.Schema;
var VehicleSchema = new Schema({
    license_plate: { type: String, required: true, maxlength: 100 },
    color_of_car: { type: String, required: true, maxlength: 100 },
    year: { type: String, required: true, maxlength: 4 },
    make: { type: String, required: true, maxlength: 100 },
    body_type: { type: String, required: true, maxlength: 100 },
    model: { type: String, required: true, maxlength: 100 },
    additonal_details: { type: String, required: true, maxlength: 100 },
    vin: { type: String, required: true, maxlength: 100 },
    registered_owners: { type: String, required: true, maxlength: 100 },
    incidents_that_it_is_attached_to: { type: String, required: true, maxlength: 100 },
    value : {type: String, required: true, maxlength : 100},
});