import { configDotenv } from "dotenv";
import { Sequelize } from "sequelize";

configDotenv()

const username =  process.env.DB_USER || 'admin'
const password = process.env.DB_PASS || 'admin'
const host = process.env.DB_HOST || 'localhost'

export const sequelize = new Sequelize('users', username, password, {
  host,
  dialect: 'postgres',
  logging: true,
});

sequelize
    .authenticate()
    .then(()=>{
        console.log('User DB are connected')
    })
    .catch((error)=>{
        console.error('Unable to connect to User DB', error)
    })