import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { json, urlencoded } from 'express';
dotenv.config();
const PORT = process.env.PORT;
import connect from './config/mongoose';
import apiRoutes from './routes/routes';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .json({ status: true, message: 'Welcome to Mainstack Server!' });
});

connect();

app.listen(PORT, (): void => {
  console.log(`Server now live at port ${PORT}`);
});
