/** source/routes/posts.ts */
import express from "express";
import controller from "../controllers/book";
const router = express.Router();

router.get("/book", controller.getPosts);
router.get("/book/:id", controller.getPost);
router.put("/book/:id", controller.updatePost);
router.delete("/book/:id", controller.deletePost);
router.post("/book", controller.addPost);

export = router;
