import { CategoriesRepository } from "../../repository/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoriesUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyRegistered =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyRegistered) {
            throw new Error("Category already registered.");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoriesUseCase };
