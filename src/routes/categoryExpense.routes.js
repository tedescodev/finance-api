const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = function({ CategoryExpenseController }) {
  const router = Router();

  router.get("/:commentId/unique", AuthMiddleware, CategoryExpenseController.get);
  router.get("/:houseId", AuthMiddleware, CategoryExpenseController.getHouseComments);
  router.post("/:houseId", AuthMiddleware, CategoryExpenseController.createComment);
  router.patch("/:commentId", AuthMiddleware, CategoryExpenseController.update);
  router.delete("/:commentId", AuthMiddleware, CategoryExpenseController.delete);

  return router;
};
