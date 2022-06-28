"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/** source/routes/posts.ts */
const express_1 = __importDefault(require("express"));
const book_1 = __importDefault(require("../controllers/book"));
const router = express_1.default.Router();
router.get("/book", book_1.default.getPosts);
router.get("/book/:id", book_1.default.getPost);
router.put("/book/:id", book_1.default.updatePost);
router.delete("/book/:id", book_1.default.deletePost);
router.post("/book", book_1.default.addPost);
module.exports = router;
