import { Video } from "../infra/typeorm/entities/Video";

interface ICreateVideoDTO {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}
  
interface IVideosRepository {
    create({ name, description, duration, category_id }: ICreateVideoDTO): Promise<Video>;
    findByName(name: string): Promise<Video>;
    findAll(): Promise<Video[]>;
}

export { IVideosRepository, ICreateVideoDTO };