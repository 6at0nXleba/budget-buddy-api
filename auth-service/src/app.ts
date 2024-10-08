import express from 'express';
import authRoutes from './routes/authRoute';
import { configDotenv } from 'dotenv';
import { sequelize } from './config/db';

if (process.env.NODE_ENV !== 'production') {
  configDotenv({ path: '.env.local' }); // local development
} else {
  configDotenv(); // env from Docker or .env
}

const app = express();
const PORT = process.env.AUTH_PORT || 5050;

app.use(express.json());
app.use('/auth', authRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Database connected successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});