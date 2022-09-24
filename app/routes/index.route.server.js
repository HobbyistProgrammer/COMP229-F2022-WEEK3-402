// Index Routes
import { Router } from 'express';
import { HelloWorld } from '../controllers/index.controller.server.js';


// Instantiating the router
// Router is used to handle multiple routes in a application... Ex. Below '/', '/hello'
const router = Router();

// add middleware to connect application
router.use('/hello', HelloWorld);
router.use('/', HelloWorld);

export default router;