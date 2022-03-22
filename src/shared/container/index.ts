import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/categories/infra/typeorm/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/categories/repositories/ICategoriesRepository";
import { VideosRepository } from "../../modules/videos/infra/typeorm/repositories/VideosRepository";
import { IVideosRepository } from "../../modules/videos/repositories/IVideosRepository";

container.registerSingleton<ICategoriesRepository>(
   "CategoriesRepository",
   CategoriesRepository
 );
 
container.registerSingleton<IVideosRepository>(
  "VideosRepository",
  VideosRepository
);

 