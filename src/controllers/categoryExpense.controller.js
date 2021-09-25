let _categoryExpenseService = null;
class CommentController {
  constructor({ CategoryExpenseService }) {
    _categoryExpenseService = CategoryExpenseService;
  }

  async createComment(req, res) {
    const { body } = req;
    const { houseId } = req.params;
    const { id: userId } = req.user;
    const createdComment = await _categoryExpenseService.createComment(
      body,
      houseId,
      userId
    );
    return res.status(201).send(createdComment);
  }

  async get(req, res) {
    const { commentId } = req.params;
    const comment = await _categoryExpenseService.get(commentId);
    return res.send(comment);
  }

  async update(req, res) {
    const { body } = req;
    const { commentId } = req.params;
    const updatedComment = await _categoryExpenseService.update(commentId, body);
    return res.send(updatedComment);
  }

  async delete(req, res) {
    const { commentId } = req.params;
    const deletedComment = await _categoryExpenseService.delete(commentId);
    return res.send(deletedComment);
  }

  async getHouseComments(req, res) {
    const { houseId } = req.params;
    const comments = await _categoryExpenseService.getHouseComments(houseId);
    return res.send(comments);
  }
}

module.exports = CommentController;
