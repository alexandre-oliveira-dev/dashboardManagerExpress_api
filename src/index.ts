import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { route } from './router';
import mongoose from 'mongoose';

export const app = express();

mongoose.connect(
  'mongodb+srv://alexandredevfrontend:GXu2Pq7nCIe8QL90@dashboardmanagerdb.pokh6lk.mongodb.net/?retryWrites=true&w=majority&appName=dashboardManagerDB',
  ).then().catch(err =>console.log(err))
  mongoose.set('strictQuery', false);

app.use((req: Request, res: Response, next: NextFunction) => {
  express.json()(req, res, next);
});
app.use(cors({origin:'*'}));
app.use(route);


app.get('/', (_req, res) => {
  res.json({
    message: 'Api online',
  });
});

app.listen(5000, () => console.log('online'));
