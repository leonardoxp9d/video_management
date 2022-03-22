import { Request, Response} from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { container } from "tsyringe";

class CreateCategoryController {
    async handle (request:Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createCategoryService = container.resolve(CreateCategoryService);

        const category = await createCategoryService.execute({ name, description });

        return response.status(201).json(category);
    }
}

export { CreateCategoryController}