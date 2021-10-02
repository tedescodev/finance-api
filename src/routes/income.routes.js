const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function({ IncomeController }) {
  const router = Router();

  router.get("", AuthMiddleware, [ParseIntMiddleware], IncomeController.getAll);
  router.get("/:houseId", AuthMiddleware, IncomeController.get);
  router.get("/:userId/all", AuthMiddleware, IncomeController.getUserHouses);
  router.post("", AuthMiddleware, IncomeController.create);
  router.patch("/:houseId", AuthMiddleware, IncomeController.update);
  router.delete("/:houseId", AuthMiddleware, IncomeController.delete);
  router.post("/:houseId/upvote", AuthMiddleware, IncomeController.upvoteHouse);
  router.post("/:houseId/downvote", AuthMiddleware, IncomeController.downvoteHouse);

  return router;
};
