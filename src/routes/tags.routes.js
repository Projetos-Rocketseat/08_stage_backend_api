const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);
// tagsRoutes.post("/:user_id", tagsController.create);
// tagsRoutes.get("/:id", tagsController.show);
// tagsRoutes.delete("/:id", tagsController.delete);

module.exports = tagsRoutes;
