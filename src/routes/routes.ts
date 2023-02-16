import { Router } from 'express';
import productRouter from '../product/product.routes';

const apiRouter: Router = Router();

apiRouter.use('/product', productRouter);

export default apiRouter;
