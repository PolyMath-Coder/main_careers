import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DB_URL = process.env.DB_URL;

const connectToDatabase = () => {
  const options = { autoIndex: false, maxPoolSize: 10 };
  connect(`${DB_URL}`).then(() => {
    console.log(`Database now Connected...`);
  });
};

export default connectToDatabase;
