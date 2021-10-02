const BaseService = require("./base.service");
let _incomeRepository = null;

class IncomeService extends BaseService {
  constructor({ IncomeRepository }) {
    super(IncomeRepository);
    _incomeRepository = IncomeRepository;
  }

  async getUserIncomes(author) {
    if (!author) {
      const error = new Error();
      error.status = 400;
      error.message = "userId must be sent";
      throw error;
    }

    return await _incomeRepository.getUserIncomes(author);
  }
}

module.exports = IncomeService;
