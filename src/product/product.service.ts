import Product from './product.model';
import ApiError from '../helpers/error';

const createProduct = async (data: object) => {
  try {
    const rawData = JSON.parse(JSON.stringify(data));
    return await Product.create(rawData);
  } catch (error) {
    throw new Error('Unable to create product');
  }
};

const getProducts = async (page: number, per_page: number) => {
  try {
    const products_per_page = per_page || 10;
    const product_page = page || 1;
    const skip = (product_page - 1) * products_per_page;
    return await Product.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(products_per_page);
  } catch (error) {
    throw new Error('Unable to retrieve all products...');
  }
};

const getProduct = async (id: string) => {
  try {
    return await Product.findById(id);
  } catch (error) {
    throw new Error('Unable to get product...');
  }
};

const updateProduct = async (id: any, data: object) => {
  try {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error('Unable to update product...');
  }
};

const deleteProduct = async (id: any) => {
  try {
    return await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Unable to delete product...');
  }
};

export default {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
