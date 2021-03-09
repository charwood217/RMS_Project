var home = require('../models/home');
var async = require('async');
var incident = require('../models/incidentReport');

const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.incident_Report_Populate = function (req, res){
    res.render('incidentReport');
};

exports.addData = function(req, res, next){
    const incident = new incident({
       date_of_occurrence: req.body.date_of_occurrence,
       report_date: req.body.report_date,
       incident_type: req.body.incident_type,
       address_of_incident: req.body.address_of_incident,
       name_of_location: req.body.name_of_location,
    });
    incidnet.save();
 //    next();
 };
 
 
 