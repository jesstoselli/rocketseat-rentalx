import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoriesUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController };
