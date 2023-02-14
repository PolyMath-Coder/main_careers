import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { defaultFieldResolver } from 'graphql';
dotenv.config();
const DB_URL = process.env.DB_URL;

const connectToDatabase = (): any => {
  const DB_URL = process.env.DB_URL;
  const options = { autoIndex: false, maxPoolSize: 10 };
  mongoose
    .connect(
      'mongodb+srv://Ayoluwa:%40Faithie123@cluster0.nm9b8.mongodb.net/main_careers'
    )
    .then((result) => {
      console.log(`Database now Connected...`);
    });
  const database = mongoose.connection;
  database.on('connected', async () => {
    console.log('Database now Connected...');
  });

  mongoose.connection.on('error', (err): any => {
    console.log('An error occurred while connecting to MongoDB', err);
  });
};

export default connectToDatabase;
