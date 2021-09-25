let _expenseService = null;
class HouseController {
  constructor({ ExpenseService }) {
    _expenseService = ExpenseService;
  }

  async get(req, res) {
    const { houseId } = req.params;
    const house = await _expenseService.get(houseId);
    return res.send(house);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const houses = await _expenseService.getAll(pageSize, pageNum);
    return res.send(houses);
  }

  async create(req, res) {
    const { body } = req;
    const createdHouse = await _expenseService.create(body);
    return res.status(201).send(createdHouse);
  }

  async update(req, res) {
    const { body } = req;
    const { houseId } = req.params;
    const updatedHouse = await _expenseService.update(houseId, body);
    return res.send(updatedHouse);
  }

  async delete(req, res) {
    const { houseId } = req.params;
    const deletedHouse = await _expenseService.delete(houseId);
    return res.send(deletedHouse);
  }

  async getUserHouses(req, res) {
    const { houseId } = req.params;
    const houses = await _expenseService.getUserHouses(houseId);
    return res.send(houses);
  }

  async upvoteHouse(req, res) {
    const { houseId } = req.params;
    const house = await _expenseService.upvoteHouse(houseId);
    return res.send(house);
  }

  async downvoteHouse(req, res) {
    const { houseId } = req.params;
    const house = await _expenseService.downvoteHouse(houseId);
    return res.send(house);
  }
}

module.exports = HouseController;
