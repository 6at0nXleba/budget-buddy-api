import { Request, Response, NextFunction } from 'express';
import createHttpClient from '../utils/httpClient';
import { errorCatcher } from '../utils/errorCatcher';

// eslint-disable-next-line consistent-return
export const authenticate = async(req: Request, res: Response, next: NextFunction) => {
  const authPort = process.env.AUTH_PORT||5050;
  const noAuth = process.env.NO_AUTH==='true';
  const authApi = createHttpClient(authPort);
  const token = req.headers.authorization?.split(' ')[1];

  if (noAuth) {
    next();
    return null;
  } else if (!token) {
    return res.status(401).json({ message: 'Token is required' });
  }

  try {
    const response = await authApi.post('auth/verify-token', { token });
    if (response.data.valid) {
      req.body.user = response.data.user;
      next();
    } else {
      return res.status(401).json({ message: response.data.message });
    }

  } catch (error) {
    errorCatcher(error, res, 'Invalid token verify error');
  }
};
