let _incomeService = null;
class IncomeController {
  constructor({ IncomeService }) {
    _incomeService = IncomeService;
  }

  async get(req, res) {
    const { incomeId } = req.params;
    const income = await _incomeService.get(incomeId);
    return res.send(income);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const incomes = await _incomeService.getAll(pageSize, pageNum);
    return res.send(incomes);
  }

  async getUserIncomes(req, res) {
    const { userId } = req.params;
    const incomes = await _incomeService.getUserIncomes(userId);
    return res.send(incomes);
  }

  async create(req, res) {
    const { body } = req;
    const createdIncome = await _incomeService.create(body);
    return res.status(201).send(createdIncome);
  }

  async update(req, res) {
    const { body } = req;
    const { incomeId } = req.params;
    const updatedIncome = await _incomeService.update(incomeId, body);
    return res.send(updatedIncome);
  }

  async delete(req, res) {
    const { incomeId } = req.params;
    const deletedIncome = await _incomeService.delete(incomeId);
    return res.send(deletedIncome);
  }
}

module.exports = IncomeController;
