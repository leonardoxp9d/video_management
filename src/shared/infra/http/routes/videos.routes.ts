import { Router } from "express";
import { CreateVideoController } from "../../../../modules/videos/controllers/CreateVideoController";
import { GetAllVideosController } from "../../../../modules/videos/controllers/GetAllVideosController";

const videosRoutes = Router();

const createVideoController = new CreateVideoController();
const getAllVideosController = new GetAllVideosController();

videosRoutes.post("/", createVideoController.handle);
videosRoutes.get("/", getAllVideosController.handle);

export { videosRoutes };