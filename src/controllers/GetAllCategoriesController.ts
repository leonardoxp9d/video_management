import {Request, Response} from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

class GetAllCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const service = new GetAllCategoriesService();

        const categories = await service.execute();
        
        return response.json(categories);
    }
}

export { GetAllCategoriesController };