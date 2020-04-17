import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(transaction: Transaction): Transaction {
    if (transaction === null) {
      throw Error('Invalid transaction');
    }

    var balance = this.transactionsRepository.getBalance();

    if (
      transaction.type === 'outcome' &&
      balance.income < balance.outcome + transaction.value
    ) {
      throw Error('invalid income value');
    }

    return this.transactionsRepository.create(transaction);
  }
}

export default CreateTransactionService;
