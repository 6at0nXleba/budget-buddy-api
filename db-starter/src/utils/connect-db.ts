import { Sequelize } from "sequelize";


const port = process.env.DB_PORT || 5432
const username =  process.env.DB_USER || 'admin'
const password = process.env.DB_PASS || 'admin'
const host = process.env.DB_HOST || 'postgres'

export const createConnection = (dbName: string) => {
    return new Sequelize(dbName, username, password, {
      host: host,
      dialect: 'postgres',
      port: Number(port),
    });
  };