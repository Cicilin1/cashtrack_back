import { StatusCodes } from "http-status-codes";
import { CategoryRepository } from "../database/repositories/categories.repository";
import { CreateCategoryDTO } from "../dtos/categories.dto";
import { Category } from "../entities/category.entity"
import { AppError } from "../errors/error.app";

export class CategoriesService {
    constructor(private categoryRepository: CategoryRepository) {}

    async create({title, color}: CreateCategoryDTO): Promise<Category> {
        const foundCategory = await this.categoryRepository.findByTitle(title)

        if(foundCategory){
            throw new AppError('Category already exists!', StatusCodes.BAD_REQUEST)
        }

        const category = new Category({
            title,
            color,
        }); 

        const createdCategory = await this.categoryRepository.create(category);
        return createdCategory;
    }
}