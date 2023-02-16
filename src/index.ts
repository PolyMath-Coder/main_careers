import express from 'express';
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

app.get('/', (req, res) => {
  res.status(200).json({ status: true });
});

connect();

app.listen(PORT, (): void => {
  console.log(`Server now live at port ${PORT}`);
});
