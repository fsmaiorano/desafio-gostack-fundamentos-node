import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

class GetBalanceTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(transactions: Transaction[]): Balance {
    var balance = this.transactionsRepository.getBalance();

    var income = transactions
      .filter(x => x.type === 'income')
      .map(y => y.value)
      .reduce((accumulator: number, current: number) => {
        return accumulator + current;
      });

    var outcome = transactions
      .filter(x => x.type === 'outcome')
      .map(y => y.value)
      .reduce((accumulator: number, current: number) => {
        return accumulator + current;
      });

    var total = income - outcome;

    balance = { income, outcome, total };

    return balance;
  }
}

export default GetBalanceTransactionService;
