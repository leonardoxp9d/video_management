import {Request, Response} from "express";
import { container } from "tsyringe";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

class GetAllCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllCategoriesService = container.resolve(GetAllCategoriesService);

        const categories = await getAllCategoriesService.execute();
        
        return response.json(categories);
    }
}

export { GetAllCategoriesController };