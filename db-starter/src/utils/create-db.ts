import {Client} from 'pg'

const port = process.env.DB_PORT || 5432
const username =  process.env.DB_USER || 'admin'
const password = process.env.DB_PASS || 'admin'
const host = process.env.DB_HOST || 'localhost'

export const createDatabaseIfNotExists = async (dbName: string) => {
    const client = new Client({
      user:username,
      host,
      password,
      port:Number(port),
      database: 'postgres',  // connect to system db
    });
  
    await client.connect();
    try {
      const res = await client.query(`SELECT 1 FROM pg_database WHERE datname='${dbName}'`);
      if (res.rows.length === 0) {
        await client.query(`CREATE DATABASE ${dbName}`);
        console.log(`Database ${dbName} created successfully.`);
      } else {
        console.log(`Database ${dbName} already exists.`);
      }
    } catch (err) {
      console.error(`Error creating database ${dbName}:`, err);
    } finally {
      await client.end();
    }
  };