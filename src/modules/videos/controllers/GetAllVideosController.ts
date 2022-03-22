import { Request, Response} from "express";
import { container } from "tsyringe";
import { GetAllVideosService } from "../services/GetAllVideosService";


class GetAllVideosController {
    async handle (request:Request, response: Response): Promise<Response> {
        const getAllVideosService = container.resolve(GetAllVideosService);

        const videos = await getAllVideosService.execute();

        return response.json(videos);
    }
}

export { GetAllVideosController }