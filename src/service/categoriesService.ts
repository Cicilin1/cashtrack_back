import { Category } from "../entities/category.entity"

export class CategoriesService {
    async create(): Promise<Category> {
        const category = new Category({
            title: 'Example Category',
            color: '#32FF6A',
        });

        return category;
    }
}