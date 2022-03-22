import {Request, Response} from "express";
import { container } from "tsyringe";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

class UpdateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, description } = request.body;

        const updateCategoryService = container.resolve(UpdateCategoryService);

        const category = await updateCategoryService.execute({ id, name, description });
        
        return response.json(category);
    }
}

export { UpdateCategoryController };