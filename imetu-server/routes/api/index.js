const express = require("express");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const storyRoutes = require("./storyRoutes");
const ROUTES = require("../routes");

const router = express.Router();

router.use(ROUTES.API.USERS.INDEX, userRoutes);
router.use(ROUTES.API.AUTH.INDEX, authRoutes);
router.use(ROUTES.API.STORY.INDEX, storyRoutes);


router.use((req, res) => {
  res.status(404).json({ error: "Endpoint Not Found" });
});

module.exports = router;
