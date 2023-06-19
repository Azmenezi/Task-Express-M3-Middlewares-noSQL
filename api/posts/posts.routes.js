const express = require("express");
const router = express.Router();
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  fetchPost,
} = require("./posts.controllers");
const upload = require("../../middleware/uploader");

router.param("postId", async (req, res, next, postId) => {
  try {
  } catch (error) {}
});

router.get("/", postsGet);

router.post("/", upload.single("image"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
