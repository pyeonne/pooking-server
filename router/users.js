import express from 'express';
import 'express-async-errors';
import { isAdmin, isAuth } from '../middleware/auth.js';
import * as userController from '../controller/user.js';

const router = express.Router();

// * GET /users
router.get('/', userController.getUsers);

// * GET /users/:id
router.get('/:id', userController.getUser);

// * PUT users/:id
router.put('/:id', isAuth, isAdmin, userController.updateUser);

// * DELETE users/:id
router.delete('/:id', isAuth, userController.deleteUser);

export default router;
