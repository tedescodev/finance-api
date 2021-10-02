const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

// models
const { User, CategoryExpense, Expense, Income } = require("../models");

// repositories
const {
  UserRepository,
  ExpenseRepository,
  CategoryExpenseRepository,
  IncomeRepository
} = require("../repositories");

const container = createContainer();

// services
const {
  VersionService,
  UserService,
  ExpenseService,
  CategoryExpenseService,
  AuthService,
  IncomeService
} = require("../services");

// controllers
const {
  VersionController,
  UserController,
  ExpenseController,
  CategoryExpenseController,
  AuthController,
  IncomeController
} = require("../controllers");

// routes
const {
  VersionRoutes,
  UserRoutes,
  ExpenseRoutes,
  CategoryExpenseRoutes,
  AuthRoutes,
  IncomeRoutes
} = require("../routes/index.routes");
const Routes = require("../routes");

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    VersionRoutes: asFunction(VersionRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    ExpenseRoutes: asFunction(ExpenseRoutes).singleton(),
    CategoryExpenseRoutes: asFunction(CategoryExpenseRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    IncomeRoutes: asFunction(IncomeRoutes).singleton(),
  })
  .register({
    VersionController: asClass(VersionController.bind(VersionController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    ExpenseController: asClass(ExpenseController.bind(ExpenseController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CategoryExpenseController: asClass(CategoryExpenseController.bind(CategoryExpenseController)).singleton(),
    IncomeController: asClass(IncomeController.bind(IncomeController)).singleton(),
  })
  .register({
    VersionService: asClass(VersionService).singleton(),
    UserService: asClass(UserService).singleton(),
    CategoryExpenseService: asClass(CategoryExpenseService).singleton(),
    ExpenseService: asClass(ExpenseService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    IncomeService: asClass(IncomeService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    ExpenseRepository: asClass(ExpenseRepository).singleton(),
    CategoryExpenseRepository: asClass(CategoryExpenseRepository).singleton(),
    IncomeRepository: asClass(IncomeRepository).singleton()
  })
  .register({
    User: asValue(User),
    CategoryExpense: asValue(CategoryExpense),
    Expense: asValue(Expense),
    Income : asValue(Income),
  });
  

module.exports = container;
