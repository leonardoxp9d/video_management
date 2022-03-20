import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


type CategoryRequest = {
    name: string;
    description: string;
}

class CreateCategoryService {

    async execute({ name, description }: CategoryRequest): Promise<Category | Error> {
        const repository = getRepository(Category);

        // SELECT * FROM CATEGORIES WHERE NAME = "NAME" LIMIT 1
        if (await repository.findOne({ name })) {
            return new Error ("Category already exists!");
        }

        const category = repository.create({
            name,
            description
        });

        await repository.save(category);

        return category;
    }
}

export { CreateCategoryService };