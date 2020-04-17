import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

class TransactionsRepository {
  private transactions: Transaction[];
  private balance: Balance;

  constructor() {
    this.transactions = [];
    this.balance = { income: 0, outcome: 0, total: 0 };
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    return this.balance;
  }

  public create(transaction: Transaction): Transaction {
    this.transactions.push(transaction);

    if (transaction.type === 'income') {
      this.balance.income += transaction.value;
    } else {
      this.balance.outcome += transaction.value;
    }

    return transaction;
  }
}

export default TransactionsRepository;
