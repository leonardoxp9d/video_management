import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { Video } from "../infra/typeorm/entities/Video";
import { IVideosRepository } from "../repositories/IVideosRepository";

@injectable()
class GetAllVideosService {
    constructor(
        @inject("VideosRepository")
        private videosRepository: IVideosRepository
    ) {}

    async execute(): Promise<Video[]> {
        const videos = await this.videosRepository.findAll();

        if (videos.length === 0) {
            throw new AppError("No videos registered!");
        }

        return videos;
    }
}

export { GetAllVideosService };