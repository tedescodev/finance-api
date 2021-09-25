const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function({ ExpenseController }) {
  const router = Router();

  router.get("", AuthMiddleware, [ParseIntMiddleware], ExpenseController.getAll);
  router.get("/:houseId", AuthMiddleware, ExpenseController.get);
  router.get("/:userId/all", AuthMiddleware, ExpenseController.getUserHouses);
  router.post("", AuthMiddleware, ExpenseController.create);
  router.patch("/:houseId", AuthMiddleware, ExpenseController.update);
  router.delete("/:houseId", AuthMiddleware, ExpenseController.delete);
  router.post("/:houseId/upvote", AuthMiddleware, ExpenseController.upvoteHouse);
  router.post("/:houseId/downvote", AuthMiddleware, ExpenseController.downvoteHouse);

  return router;
};
