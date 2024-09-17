import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { routes } from './routes';
import logger from './middleware/logger';
import { authenticate } from './middleware/authenticate';

const app = express();

app.use(cors());
app.use(express.json());

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.use(authenticate);

app.use('/api', routes);

export default app;
