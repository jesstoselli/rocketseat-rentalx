import { Request, Response, Router } from "express";
import { CategoriesRepository } from "../cars/repository/CategoriesRepository";
import { CreateCategoriesService } from "../cars/services/CreateCategoriesService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body;

    const createCategoriesService = new CreateCategoriesService(
        categoriesRepository
    );

    createCategoriesService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
    const allCategories = categoriesRepository.list();

    return response.json(allCategories);
});

export { categoriesRoutes };
