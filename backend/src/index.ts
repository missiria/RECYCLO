import { Request, Response } from 'express';
import { app } from './config/bootstrap';

const port =  process.env.PORT || 8080;

app.get("/", (req:Request, res:Response):void => {
  res.send("Hello Hackers We using Node.js!")
});

app.listen(port, ():void => {
  console.log(`Server Running here 👉 https://localhost:${port}`);
});