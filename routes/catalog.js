var express = require('express');
var router = express.Router();
// Require controller modules.
var homeController = require('../controllers/homeController');
var incidentController = require('../controllers/incidentController');
var indexController = require('../controllers/indexController');
var personController = require('../controllers/personController');
var vehicleController = require('../controllers/vehicleConrtroller');
//Report 
var incidentReportController = require('../controllers/incidentReportController');
var personReportController = require('../controllers/personReportController');
var vehicleReportController = require('../controllers/vehicleReportController');

router.get('/', indexController.index_Populate);
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/home', homeController.home_Populate);

router.get('/incident', incidentController.incident_Populate);

router.get('/person', personController.person_Populate);

router.get('vehicle', vehicleController.vehicle_Populate);

router.get('/incident-report', incidentReportController.incident_Report_Populate);

router.get('/person-report', personReportController.person_Report_Populate);

router.get('/vehicle-report', vehicleReportController.vehicle_Report_Populate);

router.post('/person-report', personReportController.addData);
module.exports = router;