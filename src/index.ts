import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
import connect from './config/mongoose';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ status: true });
});

connect();

app.listen(PORT, (): void => {
  console.log(`Server now live at port ${PORT}`);
});
