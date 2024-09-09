import { Sequelize } from 'sequelize';
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config({ path: '../../../docker-compose/.env' });

// const port = process.env.PORT || 5432
const username =  process.env.DATABASE_USER || 'admin'
const password = process.env.DATABASE_PASS || 'admin'
const host = process.env.DATABASE_HOST || 'localhost'

const sequelize = new Sequelize('transactions', username, password, {
  host,
  dialect: 'postgres',
  logging: true,
});

export default sequelize;
