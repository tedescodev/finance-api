const BaseRepository = require("./base.repository");
let _expense = null;

class CommentRepository extends BaseRepository {
  constructor({ Expense }) {
    super(Expense);
    _expense = Expense;
  }
}

module.exports = CommentRepository;
