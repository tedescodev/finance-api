const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

// models
const { User, CategoryExpense, Expense } = require("../models");

// repositories
const {
  UserRepository,
  ExpenseRepository,
  CategoryExpenseRepository
} = require("../repositories");

const container = createContainer();

// services
const {
  VersionService,
  UserService,
  ExpenseService,
  CategoryExpenseService,
  AuthService
} = require("../services");

// controllers
const {
  VersionController,
  UserController,
  ExpenseController,
  CategoryExpenseController,
  AuthController
} = require("../controllers");

// routes
const {
  VersionRoutes,
  UserRoutes,
  ExpenseRoutes,
  CategoryExpenseRoutes,
  AuthRoutes
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
    AuthRoutes: asFunction(AuthRoutes).singleton()
  })
  .register({
    VersionController: asClass(VersionController.bind(VersionController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    ExpenseController: asClass(ExpenseController.bind(ExpenseController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CategoryExpenseController: asClass(CategoryExpenseController.bind(CategoryExpenseController)).singleton()
  })
  .register({
    VersionService: asClass(VersionService).singleton(),
    UserService: asClass(UserService).singleton(),
    CategoryExpenseService: asClass(CategoryExpenseService).singleton(),
    ExpenseService: asClass(ExpenseService).singleton(),
    AuthService: asClass(AuthService).singleton()
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    ExpenseRepository: asClass(ExpenseRepository).singleton(),
    CategoryExpenseRepository: asClass(CategoryExpenseRepository).singleton()
  })
  .register({
    User: asValue(User),
    CategoryExpense: asValue(CategoryExpense),
    Expense: asValue(Expense)
  });
  

module.exports = container;
