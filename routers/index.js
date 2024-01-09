// Assuming your routes are defined in a file like transactionsRoutes.js

import express from 'express';
import { createTransaction,deleteTransaction,getAllTransactions } from '../controllers';

const router = express.Router();

// Route for creating a transaction
router.post('/transactions', createTransaction);

// Route for deleting a transaction by ID
router.delete('/transactions/:id', deleteTransaction);

// Route for retrieving all transactions
router.get('/transactions', getAllTransactions);

export default router;
