const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function({ IncomeController }) {
  const router = Router();

  router.get("", AuthMiddleware, [ParseIntMiddleware], IncomeController.getAll);
  router.get("/:incomeId", AuthMiddleware, IncomeController.get);
  router.get("/:userId", AuthMiddleware, IncomeController.getUserIncomes);
  router.post("", AuthMiddleware, IncomeController.create);
  router.patch("/:incomeId", AuthMiddleware, IncomeController.update);
  router.delete("/:incomeId", AuthMiddleware, IncomeController.delete);

  return router;
};
