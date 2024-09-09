import { Router } from 'express';
import { createTransaction, getAllTransactions, getTransactionById, deleteTransaction, updateTransaction } from '../controllers/transactionController';

const router = Router();

router.get('/', getAllTransactions);
router.get('/:id', getTransactionById);
router.post('/', createTransaction)
router.delete('/:id', deleteTransaction);
router.put('/:id', updateTransaction);

export default router;
