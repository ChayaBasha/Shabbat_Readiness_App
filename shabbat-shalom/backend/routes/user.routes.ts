import * as express from 'express';
import { auth } from '../middleware/auth';
import { 
    registerUser, 
    loginUser, 
    getLoggedInUser, 
    logoutAllUser, 
    logoutUser, 
    updateUser } from '../controllers/user.controller';

export const userRoutes = express.Router();

// Register User
userRoutes.post('/register', registerUser);

// Get logged in user information
userRoutes.get('/me', auth, getLoggedInUser);

// Update User. Slightly adapted to only work with password and isAuthor field.
userRoutes.put('/update', auth, updateUser);

// No Delete User function at this time.

// Login User
userRoutes.post('/login', loginUser);

// User logs out from CURRENT device
userRoutes.post('/logout', auth, logoutUser);

// User logs out from ALL devices
userRoutes.post('/logoutAll', auth, logoutAllUser);
