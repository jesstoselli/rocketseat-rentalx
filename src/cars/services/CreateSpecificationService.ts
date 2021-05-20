import { SpecificationsRepository } from "../repository/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
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

export { CreateSpecificationService };
