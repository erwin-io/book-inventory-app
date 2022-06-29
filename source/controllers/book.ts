/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

interface Post {
  userId: Number;
  id: Number;
  title: String;
  body: String;
}

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  // get some posts
  let result: AxiosResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  let posts: [Post] = [{ userId: 1, id: 1, title: "title", body: "body" }];
  return res.status(200).json({
    message: posts,
  });
};

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from the req
  let id: string = req.params.id;
  // get the post
  let post: Post = { userId: 1, id: 1, title: "title", body: "body" };
  return res.status(200).json({
    message: post,
  });
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from the req.params
  let id: string = req.params.id;
  // get the data from req.body
  let title: string = req.body.title ?? null;
  let body: string = req.body.body ?? null;
  // update the post
  // return response
  return res.status(200).json({
    message: { title: title, body: body },
  });
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from req.params
  let id: string = req.params.id;
  // delete the post
  // return response
  return res.status(200).json({
    message: "{" + id + "} deleted successfully ????????????????",
  });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the data from req.body
  let title: string = req.body.title;
  let body: string = req.body.body;
  // return response
  return res.status(200).json({
    message: { title: title, body: body },
  });
};

export default { getPosts, getPost, updatePost, deletePost, addPost };
