import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controller/postController.js";

// http://localhost:8080/api/posts?limit=2
// Read Request to get all post
router.get("/", getPosts);

// Read Request
router.get("/:id", getPost);

// Create request
router.post("/", createPost);

// Update Request
router.put("/:id", updatePost);

// Delete Request
router.delete("/:id", deletePost);
export default router;
