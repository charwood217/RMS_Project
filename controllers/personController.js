var home = require('../models/home');
var async = require('async');
var incident = require('../models/incident');
var vehicele = require('../models/vehicle');

const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.person_Populate = function (req, res){
    res.render('person');
};