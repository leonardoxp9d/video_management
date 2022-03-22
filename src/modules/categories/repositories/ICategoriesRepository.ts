import { Category } from "../infra/typeorm/entities/Category";

interface ICreateCategoryDTO {
    id?: string;
    name: string;
    description: string;
}
  
interface ICategoriesRepository {
    create({id, name, description}: ICreateCategoryDTO): Promise<Category>;
    findById(id: string): Promise<Category>;    
    findByName(name: string): Promise<Category>;
    findAll(): Promise<Category[]>;
    delete(id: string): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };