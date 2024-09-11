import { DataTypes, Sequelize } from "sequelize";

const initTransactionModel =(sequelize: Sequelize)=>{return sequelize.define( 'Transaction', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        account_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        amount: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        type: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        expense_type: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        positive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        regular: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        user_created: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        currency: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false,
      }
})}

export {initTransactionModel}