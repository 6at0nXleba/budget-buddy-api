import { Sequelize } from 'sequelize';

const username =  process.env.DB_USER || 'admin'
const password = process.env.DB_PASS || 'admin'
const host = process.env.DB_HOST || 'localhost'

const sequelize = new Sequelize('transactions', username, password, {
  host,
  dialect: 'postgres',
  logging: true,
});

export default sequelize;
