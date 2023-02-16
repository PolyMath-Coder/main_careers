import { Router } from 'express';
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from './product.controller';

const productRouter: Router = Router();

productRouter.post('/create', createProduct);
productRouter.get('/all/products', getProducts);

productRouter.get('/:_id', getProduct);
productRouter.put('/update', updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;
