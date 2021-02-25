var home = require('../models/home');
var async = require('async');
var incident = require('../models/incident');
var person = require('../models/person');

const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.vehicle_Populate = function (req, res){
    res.render('vehicle');
};