import { Sequelize } from "sequelize";
require('dotenv').config({ path: '../../../docker-compose/.env' });

const port = process.env.PORT || 5432
const username =  process.env.DATABASE_USER || 'admin'
const password = process.env.DATABASE_PASS || 'admin'
const host = process.env.DATABASE_HOST || 'localhost'

export const createConnection = (dbName: string) => {
    return new Sequelize(dbName, username, password, {
      host: host,
      dialect: 'postgres',
      port: Number(port),
    });
  };