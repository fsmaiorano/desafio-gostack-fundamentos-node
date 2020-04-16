import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class GetBalanceTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Transaction[] {
    var transactions = this.transactionsRepository.all();

    var income = transactions.reduce((a, b) => {
      var aa = a;
      var bb = b;

      return aa;
    });

    return transactions;
  }
}

export default GetBalanceTransactionService;
