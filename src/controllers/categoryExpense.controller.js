let _categoryExpenseService = null;
class CommentController {
  constructor({ CategoryExpenseService }) {
    _categoryExpenseService = CategoryExpenseService;
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const categorys = await _categoryExpenseService.getAll(pageSize, pageNum);
    return res.send(categorys);
  }

  async get(req, res) {
    const { categoryId } = req.params;
    const category = await _categoryExpenseService.get(categoryId);
    return res.send(category);
  }

  async create(req, res) {
    const { body } = req;
    const createdCategory = await _expenseService.create(body);
    return res.status(201).send(createdCategory);
  }

  async update(req, res) {
    const { body } = req;
    const { categoryId } = req.params;
    const updatedCategory = await _categoryExpenseService.update(categoryId, body);
    return res.send(updatedCategory);
  }

  async delete(req, res) {
    const { categoryId } = req.params;
    const deletedCategory = await _categoryExpenseService.delete(categoryId);
    return res.send(deletedCategory);
  }
}

module.exports = CommentController;
