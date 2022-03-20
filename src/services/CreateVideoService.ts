import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

class CreateVideoService {
    async execute({
        name,
        description,
        duration,
        category_id
    }: VideoRequest): Promise<Video| Error> {
        const repositoryVideo = getRepository(Video);
        const repositoryCategory = getRepository(Category);

        if (!(await repositoryCategory.findOne(category_id))) {
            return new Error("Category does not exists!");
        }

        const video = repositoryVideo.create({ name, description, duration, category_id })

        await repositoryVideo.save(video);

        return video;
    }
}

export { CreateVideoService };