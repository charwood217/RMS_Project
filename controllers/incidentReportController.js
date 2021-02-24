var home = require('../models/home');
var async = require('async');
var person = require('../models/person');
var vehicele = require('../models/vehicle');

const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.incident_Report_Populate = function (req, res){
    res.render('incidentReport');
};