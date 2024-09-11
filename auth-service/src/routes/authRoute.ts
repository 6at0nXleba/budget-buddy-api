import { Router } from 'express';
import { verifyToken, login, register } from '../controllers/authController';

const router = Router();

router.post('/register', register);

router.post('/login', login);

router.post('/verify-token', verifyToken)

export default router;
