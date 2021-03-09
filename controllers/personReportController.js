var async = require('async');
var assert = require('assert');
var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var router = express.Router();
var Person = require('../models/person');

var url = "mongodb://localhost:3001/personReport";
const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.person_Report_Populate = function (req, res, next){
    res.render('personReport');
    next();
};

exports.addData = function(req, res, next){
   const person = new Person({
       first_name: req.body.first_name,
       middle_name: req.body.middle_name,
       last_name: req.body.last_name,
       phonenumber: req.body.phonenumber,
       city: req.body.city,
       state: req.body.state,
       country: req.body.country,
       height: req.body.height,
       witness: req.body.height,
       victim: req.body.victim,
       race: req.body.race,
       gender: req.body.race,
   });
   person.save();
//    next();
};


