import { Router } from "express";
import { SpecificationsRepository } from "../cars/repository/SpecificationsRepository";
import { CreateSpecificationService } from "../cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationsRoutes };
