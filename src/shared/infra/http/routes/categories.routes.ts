import { Router } from "express";
import { CreateCategoryController } from "../../../../modules/categories/controllers/CreateCategoryController";
import { GetAllCategoriesController } from "../../../../modules/categories/controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "../../../../modules/categories/controllers/DeleteCategoryController";
import { UpdateCategoryController } from "../../../../modules/categories/controllers/UpdateCategoryController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();
const deleteCategoryController = new DeleteCategoryController();
const updateCategoryController = new UpdateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", getAllCategoriesController.handle);
categoriesRoutes.delete("/:id", deleteCategoryController.handle);
categoriesRoutes.put("/:id", updateCategoryController.handle);

export { categoriesRoutes };