import { Document } from 'mongoose';

export default interface IProduct extends Document {
  name: {
    type: string;
  };
  description: {
    type: string;
  };
  quantity: {
    type: number;
  };
  price: {
    type: number;
  };
}
