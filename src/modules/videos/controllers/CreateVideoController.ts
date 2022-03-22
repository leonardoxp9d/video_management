import { Request, Response} from "express";
import { container } from "tsyringe";
import { CreateVideoService } from "../services/CreateVideoService";


class CreateVideoController {
    async handle (request:Request, response: Response): Promise<Response> {
        const { name, description, duration, category_id } = request.body;

        const createVideoService = container.resolve(CreateVideoService);

        const video = await createVideoService.execute({ name, description, duration, category_id });
        
        return response.status(201).json(video);
    }
}

export { CreateVideoController}