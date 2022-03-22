import { getRepository, Repository } from "typeorm";
import { ICreateVideoDTO, IVideosRepository } from "../../../repositories/IVideosRepository";
import { Video } from "../entities/Video";

class VideosRepository implements IVideosRepository {
    private repository: Repository<Video>;

    constructor(){
        this.repository = getRepository(Video);
    }

    async create ({name, description, duration, category_id}: ICreateVideoDTO): Promise<Video> {
        const video = this.repository.create({
            name,
            description,
            duration,
            category_id,
        })

        await this.repository.save(video);
        
        return video;
    }

    async findByName(name: string): Promise<Video> {
        const video = await this.repository.findOne({ name });
        return video;
    }

    async findAll(): Promise<Video[]> {
        const videos = await this.repository.find({
            relations: ["category"],
        });
        
        return videos;
    }
}

export{ VideosRepository };