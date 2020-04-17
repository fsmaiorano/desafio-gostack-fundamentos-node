import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

import GetBalanceTransactionService from './GetBalanceTransactionService';

class GetAllTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Transaction[] {
    var transactions = this.transactionsRepository.all();

    if (transactions.length === 0) {
      return transactions;
    }

    return transactions;
  }
}

export default GetAllTransactionService;
