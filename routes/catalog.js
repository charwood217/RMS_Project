var express = require('express');
var router = express.Router();
// Require controller modules.
var homeContrller = require('../controllers/homeControler');
var incidentController = require('../controllers/incidentController');
var indexController = require('../controllers/indexController');
var personController = require('../controllers/personController');
var vehicleController = require('../controllers/vehicleConrtroller');
//Report 
var incidentReportController = require('../controllers/incidentReportController');
var personReportController = require('../controllers/personReportController');
var vehicleReportController = require('../controllers/vehicleReportController');

router.get('/', indexController.index);
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/home', homeContrller.home_Populate);
module.exports = router;