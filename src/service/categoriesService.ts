import { CategoryRepository } from "../database/repositories/categories.repository";
import { CreateCategoryDTO } from "../dtos/categories.dto";
import { Category } from "../entities/category.entity"

export class CategoriesService {
    constructor(private categoryRepository: CategoryRepository) {}

    async create({title, color}: CreateCategoryDTO): Promise<Category> {
        const category = new Category({
            title,
            color,
        });


        const createdCategory = await this.categoryRepository.create(category)

        return createdCategory;
    }
}