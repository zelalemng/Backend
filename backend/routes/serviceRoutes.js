const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Get all services
router.get('/', serviceController.getAllServices);

// Create a new service
router.post('/', serviceController.createService);

module.exports = router;
