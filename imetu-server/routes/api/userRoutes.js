const express = require("express");
const userController = require("../../controllers/api/userController");
const ROUTES = require("../routes");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get(ROUTES.API.USERS.FIND, userController.getUserById);
router.get(ROUTES.API.USERS.GET.INDEX, userController.getUserById);
router.get(ROUTES.API.USERS.GET.ATTRIBUTE, userController.getUserAttribute);

router.post("/", userController.createUser);


module.exports = router;
