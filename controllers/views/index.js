const router = require("express").Router();

const homeRoutes = require("./home");
const coursesRoutes = require("./courses");

router.use("/", homeRoutes);
router.use("/courses", coursesRoutes);

module.exports = router;
