import express, {Request,Response,Application} from 'express';

class App {

  constructor() {
    this.app = express();
  }

  public app: express.Application;
}

const app = new App().app;
const port =  process.env.PORT || 8080;

app.get("/", (req:Request, res:Response):void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(port, ():void => {
  console.log(`Server Running here 👉 https://localhost:${port}`);
});