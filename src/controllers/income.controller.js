let _incomeService = null;
class IncomeController {
  constructor({ IncomeService }) {
    _incomeService = IncomeService;
  }

  async get(req, res) {
    const { incomeId } = req.params;
    const house = await _incomeService.get(incomeId);
    return res.send(house);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const houses = await _incomeService.getAll(pageSize, pageNum);
    return res.send(houses);
  }

  async create(req, res) {
    const { body } = req;
    const createdHouse = await _incomeService.create(body);
    return res.status(201).send(createdHouse);
  }

  async update(req, res) {
    const { body } = req;
    const { incomeId } = req.params;
    const updatedHouse = await _incomeService.update(incomeId, body);
    return res.send(updatedHouse);
  }

  async delete(req, res) {
    const { incomeId } = req.params;
    const deletedHouse = await _incomeService.delete(incomeId);
    return res.send(deletedHouse);
  }

  async getUserIncomes(req, res) {
    const { incomeId } = req.params;
    const houses = await _incomeService.getUserIncomes(incomeId);
    return res.send(houses);
  }
}

module.exports = IncomeController;
