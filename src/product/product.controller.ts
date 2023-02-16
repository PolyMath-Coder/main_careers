import { Request, response, Response } from 'express';
import productService from './product.service';
import catchAsync from 'express-async-handler';
import _ from 'lodash';

import Product from './product.model';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const data = await productService.createProduct(req.body);
  res
    .status(201)
    .json({ status: 'success', message: 'Product now created...', data });
});

const getProduct = catchAsync(async (req: Request, res: Response) => {
  const data = await productService.getProduct(req.params._id);
  res
    .status(200)
    .json({ status: 'success', message: 'Product now retrieved...', data });
});

const getProducts = catchAsync(async (req: Request, res: Response) => {
  const pages = req.query;
  const pager = _.at(req.query, ['page', 'per_page']);
  const thePage = pager[0];
  const limitPerPage = pager[1];
  const pageNumberInFigure = Number(thePage);
  const limitPerPageInFigure = Number(limitPerPage);
  const data = await productService.getProducts(
    pageNumberInFigure,
    limitPerPageInFigure
  );
  res
    .status(201)
    .json({
      status: 'success',
      message: 'All products now retrieved...',
      data,
    });
});
const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const data = await productService.updateProduct(req.query.id, req.body);
  res
    .status(201)
    .json({ status: true, message: 'Product successfully updated...' });
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const data = await productService.deleteProduct(req.params._id);
  res.status(201).json({
    status: true,
    message: `The product with the id ${req.params.id} was just deleted...`,
  });
});

export { createProduct, getProduct, getProducts, updateProduct, deleteProduct };
