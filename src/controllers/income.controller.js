let _incomeService = null;
class IncomeController {
  constructor({ IncomeService }) {
    _incomeService = IncomeService;
  }

  async get(req, res) {
    const { houseId } = req.params;
    const house = await _incomeService.get(houseId);
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
    const { houseId } = req.params;
    const updatedHouse = await _incomeService.update(houseId, body);
    return res.send(updatedHouse);
  }

  async delete(req, res) {
    const { houseId } = req.params;
    const deletedHouse = await _incomeService.delete(houseId);
    return res.send(deletedHouse);
  }

  async getUserHouses(req, res) {
    const { houseId } = req.params;
    const houses = await _incomeService.getUserHouses(houseId);
    return res.send(houses);
  }

  async upvoteHouse(req, res) {
    const { houseId } = req.params;
    const house = await _incomeService.upvoteHouse(houseId);
    return res.send(house);
  }

  async downvoteHouse(req, res) {
    const { houseId } = req.params;
    const house = await _incomeService.downvoteHouse(houseId);
    return res.send(house);
  }
}

module.exports = IncomeController;
