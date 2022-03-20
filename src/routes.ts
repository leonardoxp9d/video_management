import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

const routes = Router();

const createCategoryController = new CreateCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();
const deleteCategoryController = new DeleteCategoryController();
const updateCategoryController = new UpdateCategoryController();

const createVideoController = new CreateVideoController();
const getAllVideosController = new GetAllVideosController();

routes.post("/categories", createCategoryController.handle);
routes.get("/categories", getAllCategoriesController.handle);
routes.delete("/categories/:id", deleteCategoryController.handle);
routes.put("/categories/:id", updateCategoryController.handle);

routes.post("/videos", createVideoController.handle);
routes.get("/videos", getAllVideosController.handle);

export { routes };