import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

class DeleteCategoryService {
    async execute(id: string): Promise<void | Error> {
        const repository = getRepository(Category);

        if (!await repository.findOne(id)) {
            return new Error("Category does not exists!");
        }

        await repository.delete(id);
    }
}

export { DeleteCategoryService };