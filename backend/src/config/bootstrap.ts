import express, {Request,Response,Application} from 'express';

class App {

    constructor() {
      this.app = express();
    }

    public app: express.Application;
  }

  export const app = new App().app;