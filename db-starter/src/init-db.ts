import { initTransactionModel } from "./models/transactions";
import { createDatabaseIfNotExists } from "./utils/create-db";
import { createConnection } from "./utils/connect-db";

const run = async()=>{
 const createDatabasesAndTables = async () => {
        const allDB = [{name:'transactions', create:initTransactionModel}]
        try {
          
      
          for (const db of allDB) {
            await createDatabaseIfNotExists(db.name);

            const sequelize = createConnection(db.name)

            await sequelize.authenticate();
            console.log(`connected to ${db.name}`)

            const Model = db.create(sequelize)
            
            await Model.sync({force:true})
            console.log(`Table for ${db.name} created`)

            await sequelize.close();
            console.log(`Connection to ${db.name} closed`);
          }
        } catch (err) {
          console.error('Error creating databases or tables:', err);
        }
      };
      await createDatabasesAndTables()
}

run();