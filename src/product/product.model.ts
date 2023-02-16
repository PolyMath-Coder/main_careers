import IProduct from './product.interface';

import mongoose, { Schema } from 'mongoose';

const productSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
    categoryId: {
      type: Number,
    },
    productImage: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;
