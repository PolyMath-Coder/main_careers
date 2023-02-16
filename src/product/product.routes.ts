import { Router } from 'express';
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
} from './product.controller';
// const productRouter = express.Router();
const productRouter: Router = Router();

productRouter.post('/create', createProduct);
productRouter.get('/all/products', getProducts);

productRouter.get('/:_id', getProduct);
productRouter.put('/', updateProduct);

export default productRouter;
