var async = require('async');
var assert = require('assert');
var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var router = express.Router();
var Person = require('../models/personReport');

var url = "mongodb://localhost:3001/personReport";
const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.person_Report_Populate = function (req, res, next){
    res.render('personReport');
    next();
};

exports.addData = function(req, res, next){
   const person = new Person({
       firstname: req.body.first_name,
       middlename: req.body.middle_name,
       lastname: req.body.last_name,
       socialsecurity: req.body.socialsecurity,
       age: req.body.age,
       birthdate: req.body.birthdate,
       phonenumber: req.body.phonenumber,
       homeaddress: req.body.homeaddress,
       weight: req.body.weight,
       height: req.body.height,
       eyecolor: req.body.eyecolor,
       race: req.body.race,
       gender: req.body.race,
   });
   person.save();
   console.log(person);
//    next();
};


