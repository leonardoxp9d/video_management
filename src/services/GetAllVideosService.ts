import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

class GetAllVideosService {
    async execute(): Promise<Video[]> {
        const repository = getRepository(Video);

        const videos = await repository.find({
            relations: ["category"],
        });

        return videos;
    }
}

export { GetAllVideosService };