const router = require("express").Router();
// const { Project, User } = require("../models");
const withAuth = require("../../utils/auth");

router.get("/:id", async (req, res) => {
  res.render("courses/course");
});

module.exports = router;
