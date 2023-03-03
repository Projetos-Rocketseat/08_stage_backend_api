const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRouters = Router();

const usersController = new UsersController();

usersRouters.post("/", usersController.create);
usersRouters.put("/:id", ensureAuthenticated, usersController.update);

module.exports = usersRouters;
