import { Request, Response, Router } from "express";
import { CategoriesRepository } from "../modules/cars/repository/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory/index";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request: Request, response: Response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
    return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
