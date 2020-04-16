import { Router } from 'express';
import { uuid } from 'uuidv4';

import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import GetAllTransactionService from '../services/GetAllTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    var getAllTransactionService = new GetAllTransactionService(
      transactionsRepository,
    );

    return getAllTransactionService.execute();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    var { title, value, type } = request.body;
    const transaction = new Transaction({ title, value, type });

    var createTransactionService = new CreateTransactionService(
      transactionsRepository,
    );

    var createdTransaction = createTransactionService.execute(transaction);

    return response.status(200).json(createdTransaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
