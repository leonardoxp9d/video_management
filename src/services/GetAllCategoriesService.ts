import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

class GetAllCategoriesService {
    async execute(): Promise<Category[]> {
        const repository = getRepository(Category);

        const categories = await repository.find();

        return categories;
    }
}

export { GetAllCategoriesService };