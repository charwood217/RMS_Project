var async = require('async');
var assert = require('assert');
var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var router = express.Router();
var person = require('../models/personReport');

var url = "mongodb+srv://admin_C:westmec@rms-cluster.tnyt0.mongodb.net/RMS_project?retryWrites=true&w=majority"
const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.person_Report_Populate = function (req, res, next){
    res.render('personReport');
    next();
};

exports.addData = function (req, res, next) {
    console.log('RUNNING!')
        const person = new PersonReport({
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
    
        mongo.MongoClient.connect(url, (err, db) => {
            if (err) throw err;
            var personReportRef = db.db('RMS_project');
            // var data = person
    
            personReportRef.collection('person').insertOne(person, (err, res) => {
                if (err) throw err;
                console.log(`Document Added for: ${firstname}${lastname}`)
                db.close()
            })
        });
    



// exports.addData = function(req, res, next){
//    const person = new Person({
//        firstname: req.body.first_name,
//        middlename: req.body.middle_name,
//        lastname: req.body.last_name,
//        socialsecurity: req.body.socialsecurity,
//        age: req.body.age,
//        birthdate: req.body.birthdate,
//        phonenumber: req.body.phonenumber,
//        homeaddress: req.body.homeaddress,
//        weight: req.body.weight,
//        height: req.body.height,
//        eyecolor: req.body.eyecolor,
//        race: req.body.race,
//        gender: req.body.race,
//    });
//    person.save();
//    console.log(person);
// //    next();
};


