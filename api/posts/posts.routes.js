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
    const foundPost = await fetchMovie(postId);
    if (!foundPost) return next({ status: 404, message: "Post not found" });
    req.post = foundPost;
    next();
  } catch (error) {
    return next(error);
  }
});

router.get("/", postsGet);

router.post("/", upload.single("image"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
