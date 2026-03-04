const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const servicesController = require('../controllers/servicesController');
const projectsController = require('../controllers/projectsController');

router.get('/', homeController.showHome);
router.get('/about', aboutController.showAbout);
router.get('/services', servicesController.showServices);
router.get('/projects', projectsController.showProjects);

module.exports = router;