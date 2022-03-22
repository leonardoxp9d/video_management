import { getRepository, Repository } from "typeorm";
import { ICategoriesRepository, ICreateCategoryDTO } from "../../../repositories/ICategoriesRepository";

import { Category } from "../entities/Category";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }
    
  // Método para criar categoria
  async create({ id, name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      id,
      name,
      description,
    });

    await this.repository.save(category);
    
    return category;
  }

  async findById(id: string): Promise<Category> {
    const category = await this.repository.findOne({ id });
    return category;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}

export { CategoriesRepository };
