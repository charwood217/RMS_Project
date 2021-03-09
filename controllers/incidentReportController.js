var home = require('../models/home');
var async = require('async');
var incident = require('../models/incidentReport');

const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.incident_Report_Populate = function (req, res){
    res.render('incidentReport');
};