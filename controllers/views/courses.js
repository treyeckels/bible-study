const router = require("express").Router();
// const { Project, User } = require("../models");
const withAuth = require("../../utils/auth");

router.get("/:id/:content", async (req, res) => {
  let isDiscussion = false;
  let isLiveDiscussion = false;
  let isLiveVideoDiscussion = false;

  switch (req.params.content) {
    case "discussion":
      isDiscussion = true;
      break;
    case "live-discussion":
      isLiveDiscussion = true;
      break;
    case "live-video-discussion":
      isLiveVideoDiscussion = true;
  }
  res.render("courses/course", {
    isDiscussion,
    isLiveDiscussion,
    isLiveVideoDiscussion,
  });
});

module.exports = router;
