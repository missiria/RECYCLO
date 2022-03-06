// Node
import bodyParser from 'body-parser';
import logger from 'morgan';
import { Request, Response } from 'express';

// Config
import { app } from './config/bootstrap';

// Middleware
import errorHandler from './middleware/error';

// Routes
import usersRoutes from './routes/user.routes';

const port =  process.env.PORT || 8888;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req:Request, res:Response):void => {
  res.send("Hello Hackers We using Node.js!")
});

app.use(errorHandler);
app.use(usersRoutes);

app.listen(port, ():void => {
  console.log(`Server Running here 👉 http://localhost:${port}`);
});