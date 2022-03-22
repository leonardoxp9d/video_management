import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { Category } from "../infra/typeorm/entities/Category";
import { CategoriesRepository } from "../infra/typeorm/repositories/CategoriesRepository";

interface ICategoryUpdateRequestDTO {
    id: string;
    name: string;
    description: string;
}

@injectable()
class UpdateCategoryService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: CategoriesRepository
    ) {}

    async execute({ id, name, description}: ICategoryUpdateRequestDTO): Promise<Category> {
        const category = await this.categoriesRepository.findById(id);

        if (!category) {
            throw new AppError("Category does not exists!");
        }

        const nameAlreadyExists = await this.categoriesRepository.findByName(name);

        if (nameAlreadyExists) {
            throw new AppError("The name of this category already exists!");
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await this.categoriesRepository.create(category);

        return category;
    }
}

export { UpdateCategoryService };