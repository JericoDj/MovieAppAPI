const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");
const { verify } = require("../auth");

// Add comment to a movie (should be POST for adding)
router.patch("/movie/:movieId/comment", verify, commentController.addMovieComment);

// Get comments from a movie
router.get("/movie/:movieId/comments", commentController.getMovieComments);

module.exports = router;
