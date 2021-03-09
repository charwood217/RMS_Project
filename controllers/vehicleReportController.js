var home = require('../models/home');
var async = require('async');
var incident = require('../models/incident');
var person = require('../models/person');
var vehicele = require('../models/vehicle');

const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.vehicle_Report_Populate = function (req, res, next){
    res.render('vehicleReport');
    next();
};

exports.addData = function(req, res, next){
    const vehicle = new vehicele({
        licenseplate: req.body.licenseplate,
        licenseplate_state: req.licenseplate_state,
        car_make: req.body.car_make,
        car_color: req.body.car_color,
        vin: req.body.vin,
        value: req.body.value,
        owners: req.body.owners,
    });
    vehicle.save();
 //    next();
 };