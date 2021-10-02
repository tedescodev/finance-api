const BaseRepository = require("./base.repository");
let _income = null;

class IncomeRepository extends BaseRepository {
  constructor({ Income }) {
    super(Income);
    _income = Income;
  }

  async getUserIncomes(author) {
    return await _income.find({ author });
  }
}

module.exports = IncomeRepository;
