const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require('morgan');
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");
const swaggerUI = require("swagger-ui-express");
const { SWAGGER_PATH } = require("../config");
const swaggerDocument = require(SWAGGER_PATH);

module.exports = function({
  VersionRoutes,
  UserRoutes,
  ExpenseRoutes,
  CategoryExpenseRoutes,
  AuthRoutes,
  IncomeRoutes
}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

  apiRoutes.use("/version", VersionRoutes);
  apiRoutes.use("/user", UserRoutes);
  apiRoutes.use("/expense", ExpenseRoutes);
  apiRoutes.use("/categoryExpense", CategoryExpenseRoutes);
  apiRoutes.use("/auth", AuthRoutes);
  apiRoutes.use("/income", IncomeRoutes);

  router.use("/v1/api", apiRoutes);
  router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);
  router.use(morgan('dev'));

  return router;
};
