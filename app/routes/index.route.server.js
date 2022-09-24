// Index Routes
import { Router } from 'express';
import { displayHomePage, displayAboutPage, displayContactsPage, displayServicesPage, displayProjectsPage } from '../controllers/index.controller.server.js';


// Instantiating the router
// Router is used to handle multiple routes in a application... Ex. Below '/', '/hello'
const router = Router();

// add middleware to connect application
router.use('/', displayHomePage);
router.use('/hello', displayHomePage);
router.use('/About', displayAboutPage);
router.use('/projects', displayProjectsPage);
router.use('/contacts', displayContactsPage);
router.use('/services', displayServicesPage);

export default router;