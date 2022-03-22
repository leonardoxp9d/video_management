import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { ICategoriesRepository } from "../../categories/repositories/ICategoriesRepository";
import { Video } from "../infra/typeorm/entities/Video";
import { IVideosRepository } from "../repositories/IVideosRepository";

interface IVideoRequestDTO {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}
@injectable()
class CreateVideoService {
    constructor(
        @inject("VideosRepositoy")
        private videosRepositoy: IVideosRepository,

        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute({
        name,
        description,
        duration,
        category_id,
    }: IVideoRequestDTO): Promise<Video> {
        const categoryAlreadyExists = await this.categoriesRepository.findById(category_id);

        if (!categoryAlreadyExists) {
            throw new AppError("Category does not exists!");
        }

        const videoAlreadyExists = await this.videosRepositoy.findByName(name);

        if (videoAlreadyExists) {
            throw new AppError("There is already a video with that name!");
        }

        const video = await this.videosRepositoy.create({ name, description, duration, category_id });

        return video;
    }
}

export { CreateVideoService };