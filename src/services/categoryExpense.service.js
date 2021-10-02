const BaseService = require("./base.service");
let _categoryExpenseRepository = null,
  _expenseRepository = null;

class CommentService extends BaseService {
  constructor({ CategoryExpenseRepository, ExpenseRepository }) {
    super(CategoryExpenseRepository);
    _categoryExpenseRepository = CategoryExpenseRepository;
    _expenseRepository = ExpenseRepository;
  }
}

module.exports = CommentService;
