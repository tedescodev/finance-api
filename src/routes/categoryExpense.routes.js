const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function({ CategoryExpenseController }) {
  const router = Router();

  router.get("", AuthMiddleware, [ParseIntMiddleware], CategoryExpenseController.getAll);
  router.get("/:categoryId", AuthMiddleware, CategoryExpenseController.get);
  router.post("", AuthMiddleware, CategoryExpenseController.create);
  router.patch("/:categoryId", AuthMiddleware, CategoryExpenseController.update);
  router.delete("/:categoryId", AuthMiddleware, CategoryExpenseController.delete);

  return router;
};
