import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

class DeleteCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteCategoryService = container.resolve(DeleteCategoryService);

        await deleteCategoryService.execute(id);

        return response.json({ message: "Category deleted successfully!"});
    }

}

export { DeleteCategoryController };