import { Request, Response } from 'express';
import { Transaction } from '../models/transactionModel';

//? Get all existing transactions
export const getAllTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};

//? Get one transaction by ID
export const getTransactionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const transaction = await Transaction.findByPk(id);

    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transaction', error });
  }
};

//? Creates transaction
export const createTransaction = async (req: Request, res: Response) => {
  const {
    account_id,
    amount,
    type,
    expense_type,
    positive,
    regular,
    user_created,
    currency,
  } = req.body;

  try {
    const newTransaction = await Transaction.create({
      account_id,
      amount,
      type,
      expense_type,
      positive,
      regular,
      user_created,
      currency,
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction', error });
  }
};

//? Updates transaction by ID 
export const updateTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    account_id,
    amount,
    type,
    expense_type,
    positive,
    regular,
    user_created,
    currency,
  } = req.body;

  try {
    const transaction = await Transaction.findByPk(id);

    if (transaction) {
      Object.assign(transaction,[
        account_id,
        amount,
        type,
        expense_type,
        positive,
        regular,
        user_created,
        currency,
      ]) 

      await transaction.save();

      res.json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating transaction', error });
  }
};

//? Delete by ID
export const deleteTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findByPk(id);

    if (transaction) {
      await transaction.destroy();
      res.json({ message: 'Transaction deleted successfully' });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting transaction', error });
  }
};
