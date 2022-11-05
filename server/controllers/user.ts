require("dotenv").config();
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/User";

const userRouter = express.Router();

interface INewUser {
  username: string;
  password: string;
}

userRouter.post("/", async (request: Request, response: Response) => {
  try {
    const { username, password }: INewUser = request.body;

    if (!username || !password)
      return response.json({ error: "username or/and password are blank" });

    const saltRounds = process.env.SALT;
    const hash = await bcrypt.hash(password, Number(saltRounds));

    const newUser = new User({
      username,
      hash,
    });

    const savedUser = await newUser.save();

    response.json(savedUser);
  } catch (err: any) {
    response.json(err.message);
  }
});

userRouter.get("/", async (request: Request, response: Response) => {
  try {
    const users = await User.find({});

    if (users.length === 0) return response.json({ error: "no users found" });

    response.json(users);
  } catch (err: any) {
    response.json({ error: err.message });
  }
});

userRouter.get("/:id", async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const user = await User.findById(id);

    response.json(user);
  } catch (err: any) {
    response.json({ error: err.message });
  }
});

export default userRouter;
