import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { Category } from "../infra/typeorm/entities/Category";
import { CategoriesRepository } from "../infra/typeorm/repositories/CategoriesRepository";

@injectable()
class GetAllCategoriesService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: CategoriesRepository
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.findAll();

        if (!categories) {
            throw new AppError("No category registered!")
        }

        return categories;
    }
}

export { GetAllCategoriesService };