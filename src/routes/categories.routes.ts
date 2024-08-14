import { Router } from 'express';

import { CategoriesController } from '../controllers/categories.controller';
import { ParamsType, validator } from '../middleware/validator.middleware';
import { createdCategoryObject } from '../dtos/categories.dto';


export const categoriesRoutes = Router();

const controller = new CategoriesController()

categoriesRoutes.post(
    '/', 
    validator({
    schema: createdCategoryObject,
    type: ParamsType.BODY,
}),  
    controller.create,
);  
