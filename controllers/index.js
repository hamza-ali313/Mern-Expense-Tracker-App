import Transaction from '../models/transaction.js';

const createTransaction = async (req, res, next) => {
  const { text, amount } = req.body;
  const transaction = new Transaction({
    text: text,
    amount: amount
  });
  try {
    const newTransaction = await transaction.save();
    res.json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction', error: error.message });
  }
};

const deleteTransaction = async (req, res, next) => {
  const transactionId = req.params.id;
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
    if (!deletedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json({ message: 'Transaction deleted successfully', deletedTransaction });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting transaction', error: error.message });
  }
};

const getAllTransactions = async (req, res, next) => {
  try {
    const allTransactions = await Transaction.find();
    res.json(allTransactions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving transactions', error: error.message });
  }
};

export { createTransaction, deleteTransaction, getAllTransactions };
