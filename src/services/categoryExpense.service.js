const BaseService = require("./base.service");
let _categoryExpenseRepository = null,
  _expenseRepository = null;

class CommentService extends BaseService {
  constructor({ CategoryExpenseRepository, ExpenseRepository }) {
    super(CategoryExpenseRepository);
    _categoryExpenseRepository = CategoryExpenseRepository;
    _expenseRepository = ExpenseRepository;
  }

  async getHouseComments(houseId) {
    if (!houseId) {
      const error = new Error();
      error.status = 400;
      error.message = "houseId must be sent";
      throw error;
    }

    const house = await _expenseRepository.get(houseId);

    if (!house) {
      const error = new Error();
      error.status = 404;
      error.message = "house does not exist";
      throw error;
    }

    const { comments } = house;
    return comments;
  }

  async createComment(comment, houseId, userId) {
    if (!houseId) {
      const error = new Error();
      error.status = 400;
      error.message = "houseId must be sent";
      throw error;
    }

    const house = await _expenseRepository.get(houseId);

    if (!house) {
      const error = new Error();
      error.status = 404;
      error.message = "house does not exist";
      throw error;
    }

    const createdComment = await _categoryExpenseRepository.create({
      ...comment,
      author: userId
    });
    house.comments.push(createdComment);

    return await _expenseRepository.update(houseId, { comments: house.comments });
  }
}

module.exports = CommentService;
