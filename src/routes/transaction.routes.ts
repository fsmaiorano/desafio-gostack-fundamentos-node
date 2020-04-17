import { Router } from 'express';
import { uuid } from 'uuidv4';

import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import GetAllTransactionService from '../services/GetAllTransactionService';
import GetBalanceTransactionService from '../services/GetBalanceTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    var getAllTransactionService = new GetAllTransactionService(
      transactionsRepository,
    );

    var getBalanceTransactionService = new GetBalanceTransactionService(
      transactionsRepository,
    );

    var transactions = getAllTransactionService.execute();
    var balance = getBalanceTransactionService.execute(transactions);

    var result = { transactions, balance };

    return response.status(200).json(result);
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
