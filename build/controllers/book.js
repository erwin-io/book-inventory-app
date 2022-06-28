"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// getting all posts
const getPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get some posts
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts = [{ userId: 1, id: 1, title: "title", body: "body" }];
    return res.status(200).json({
        message: posts,
    });
});
// getting a single post
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get the post id from the req
    let id = req.params.id;
    // get the post
    let post = { userId: 1, id: 1, title: "title", body: "body" };
    return res.status(200).json({
        message: post,
    });
});
// updating a post
const updatePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // get the post id from the req.params
    let id = req.params.id;
    // get the data from req.body
    let title = (_a = req.body.title) !== null && _a !== void 0 ? _a : null;
    let body = (_b = req.body.body) !== null && _b !== void 0 ? _b : null;
    // update the post
    // return response
    return res.status(200).json({
        message: { title: title, body: body },
    });
});
// deleting a post
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get the post id from req.params
    let id = req.params.id;
    // delete the post
    // return response
    return res.status(200).json({
        message: "your {" + id + "} deleted successfully",
    });
});
// adding a post
const addPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get the data from req.body
    let title = req.body.title;
    let body = req.body.body;
    // return response
    return res.status(200).json({
        message: { title: title, body: body },
    });
});
exports.default = { getPosts, getPost, updatePost, deletePost, addPost };
