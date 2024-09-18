import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';
import userRoutes from './routes/transactionRoutes';
import { configDotenv } from 'dotenv';

const app = express();

// Middleware
app.use(express.json());
if (process.env.NODE_ENV !== 'production') {
    configDotenv({ path: '.env.local' }); // local development
  } else {
    configDotenv(); // env from Docker or .env
  }

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/transactions', userRoutes);

export default app;
