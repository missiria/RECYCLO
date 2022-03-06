import express from "express";
import { Request, Response } from 'express';

const userRoutes = express.Router();

userRoutes.get("/users", (req:Request, res:Response):void => {
  res.send("Hello Users We using Node.js!")
});

export default userRoutes;