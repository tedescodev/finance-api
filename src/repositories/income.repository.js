const BaseRepository = require("./base.repository");
let _income = null;

class IncomeRepository extends BaseRepository {
  constructor({ Income }) {
    super(Income);
    _income = Income;
  }
}

module.exports = IncomeRepository;
