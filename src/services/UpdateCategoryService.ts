import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
};

class UpdateCategoryService {
    async execute({ id, name, description}: CategoryUpdateRequest): Promise<Category | Error> {
        const repository = getRepository(Category);

        const category = await repository.findOne(id);

        if (!category) {
            return new Error("Category does not exists!");
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await repository.save(category);

        return category;
    }
}

export { UpdateCategoryService };