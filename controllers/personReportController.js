var async = require('async');
var assert = require('assert');
var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var router = express.Router();

var url = "mongodb://localhost:3001/personReport";
const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.person_Report_Populate = function (req, res){
    res.render('personReport');
};

exports.getData = function(req, res, next){
   
};


//Pulls data from mongo Data Base
// exports.getData = function(req, res, next){
//     var resultArray = [];
//     mongo.connect(url, function(err, db){
//         assert.equal(null, err);
//         var cursor = db.collection('person').find();
//         cursor.forEach(function(doc, err){
//         assert.equal(null, err);
//         resultArray.push(doc);
//         }, function(){
//            db.close();
//            res.render('personReport', {items: resultArray}); 
//         });
//     });
// });
// exports.getData = function(req, res, next){
//     var resultArray = [];
//     var pull = db.RMS.person.find({});
//     pull.forEach(function(doc, err){
//         resultArray.push(doc)
//     }, function(){
//         res.render('personReport', {items: resultArray});
//     });
// };

// //Inserts data into the mongo Data Base
// router.post('/person', function(req, res, next){
//     var item = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name

//     };
//     mongo.connect(url, function(err, db){
//         assert.equal(null, err);
//         db.collection('person').insertOne(item, function(err, result){
//             assert.equal(null, err);
//             console.log('Item Inserted');
//             db.close();
//         })
//     })

//     res.redirect('/')
// });