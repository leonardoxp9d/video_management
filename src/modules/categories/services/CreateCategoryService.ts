import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
import { AppError } from "../../../shared/errors/AppError";
import { Category } from "../infra/typeorm/entities/Category";


interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<Category> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(
            name
        );

        if (categoryAlreadyExists) {
            throw new AppError("Category already exists!");
        }

        const category = await this.categoriesRepository.create({
            name,
            description
        });

        return category;
    }
}

export { CreateCategoryService };