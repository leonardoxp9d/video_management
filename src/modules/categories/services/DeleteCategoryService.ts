import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

@injectable()
class DeleteCategoryService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute(id: string): Promise<void> {

        const category = await this.categoriesRepository.findById(id);


        if (!category) {
            throw new AppError("Category does not exists!");
        }

        await this.categoriesRepository.delete(id);
    }
}

export { DeleteCategoryService };