const express = require("express");
const storyController = require("../../controllers/api/storyController");
const ROUTES = require("../routes");

const router = express.Router();

router.get("/", storyController.index);
router.get("/count", storyController.count);
router.get(ROUTES.API.STORY.FIND, storyController.show);
router.get(ROUTES.API.STORY.GET.INDEX, storyController.show);

router.post("/", storyController.create);


module.exports = router;
