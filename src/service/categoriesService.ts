import { CategoryRepository } from "../database/repositories/categories.repository";
import { Category } from "../entities/category.entity"

export class CategoriesService {
    constructor(private categoryRepository: CategoryRepository) {}

    async create(): Promise<Category> {
        const category = new Category({
            title: 'Example Category',
            color: '#32FF6A',
        });


        const createdCategory = await this.categoryRepository.create(category)

        return createdCategory;
    }
}