import express from 'express'
import { validateUser } from '../middleware/authMiddleware.js'
import { loginController, registerController, subscribe } from '../controllers/authController.js';

const route = express.Router();

///subscribeToNewsletter
route.post('/subscribe', validateUser, subscribe)

///login
route.post('/login', validateUser, loginController)

///signup
route.post('/signup', validateUser, registerController)


export default route;

