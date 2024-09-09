import app from './app';
import sequelize from './config/db';

const PORT = process.env.PORT || 5051;

sequelize.sync({ force: false }).then(() => {
  console.log('Database connected successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});