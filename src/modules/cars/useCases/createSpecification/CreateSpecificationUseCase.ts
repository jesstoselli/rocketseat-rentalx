import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: SpecificationsRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyRegistered =
            this.specificationsRepository.findByName(name);

        if (specificationAlreadyRegistered) {
            throw new Error("Specification already registered.");
        }

        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
