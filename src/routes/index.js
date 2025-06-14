import express from 'express';

import auth from '../middlewares/auth.js';

import authRouter from './auth.js';
import usersRouter from './users.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);

/**
 * @swagger
 * /:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get current user information
 *     responses:
 *       200:
 *         description: Returns authenticated user info
 */
router.get('/', auth, (req, res) => {
  const response = { user: req.user };
  res.locals.body = response;
  res.json(response);
});

export default router;
