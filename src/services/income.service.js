const BaseService = require("./base.service");
let _incomeRepository = null;

class IncomeService extends BaseService {
  constructor({ IncomeRepository }) {
    super(IncomeRepository);
    _incomeRepository = IncomeRepository;
  }

  async getUserHouses(author) {
    if (!author) {
      const error = new Error();
      error.status = 400;
      error.message = "userId must be sent";
      throw error;
    }

    return await _incomeRepository.getUserHouses(author);
  }

  async upvoteHouse(houseId) {
    if (!houseId) {
      const error = new Error();
      error.status = 400;
      error.message = "houseId must be sent";
      throw error;
    }

    const house = await _incomeRepository.get(houseId);

    if (!house) {
      const error = new Error();
      error.status = 404;
      error.message = "house does not exist";
      throw error;
    }

    house.upvotes.push(true);

    return await _incomeRepository.update(houseId, { upvotes: house.upvotes });
  }

  async downvoteHouse(houseId) {
    if (!houseId) {
      const error = new Error();
      error.status = 400;
      error.message = "houseId must be sent";
      throw error;
    }

    const house = await _incomeRepository.get(houseId);

    if (!house) {
      const error = new Error();
      error.status = 404;
      error.message = "house does not exist";
      throw error;
    }

    house.downvotes.push(true);

    return await _incomeRepository.update(houseId, { downvotes: house.downvotes });
  }
}

module.exports = IncomeService;
