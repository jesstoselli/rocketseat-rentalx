import { Request, Response } from "express";
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";

class CreateCategoryController {
    constructor(private createCategoriesService: CreateCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoriesService.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController };
