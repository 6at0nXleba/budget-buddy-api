import { DataTypes, Model } from "sequelize";
import sequelize from './../config/db';

export class Transaction extends Model {
  public id!:number
  public account_id!: number;
  public amount!: number;
  public type!:number;
  public expense_type!:number;
  public positive!:boolean;
  public regular!:boolean;
  public user_created!:number;
  public currency!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!:Date;
}

Transaction.init(
  {
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
    },
  },
  {
    sequelize,
    tableName: 'transactions',
    modelName: 'Transaction',
  }
);