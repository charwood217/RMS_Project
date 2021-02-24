var index = require('index');
var async = require('async');

const { body,validationResult } = require('express-validator');

//Populate Hom3
exports.index_Populate = function (req, res){
    res.render('index',);
};