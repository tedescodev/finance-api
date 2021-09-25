const BaseRepository = require("./base.repository");
let _categoryExpense = null;

class HouseRepository extends BaseRepository {
  constructor({ CategoryExpense }) {
    super(CategoryExpense);
    _categoryExpense = CategoryExpense;
  }

  async getUserHouses(author) {
    return await _categoryExpense.find({ author });
  }
}

module.exports = HouseRepository;
