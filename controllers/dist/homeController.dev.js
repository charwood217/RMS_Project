"use strict";

var home = require('../models/home');

var async = require('async');

var incident = require('../models/incident');

var person = require('../models/person');

var vehicele = require('../models/vehicle');

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult; //Populate Hom3


exports.home_Populate = function (req, res) {
  res.render('home', {
    title: 'Home Page'
  });
};