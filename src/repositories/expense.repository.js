const BaseRepository = require("./base.repository");
let _expense = null;

class ExpenseRepository extends BaseRepository {
  constructor({ Expense }) {
    super(Expense);
    _expense = Expense;
  }
}

module.exports = ExpenseRepository;
