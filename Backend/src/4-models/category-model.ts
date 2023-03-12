import Joi from "joi";
import { ValidationError } from "./client-errors";

class CategoryModel {
    public categoryId: number;
    public name: string;

    public constructor(category: CategoryModel) {
        this.categoryId = category.categoryId;
        this.name = category.name;
    }

    private static categoryValidationSchema = Joi.object({
        categoryId: Joi.number().optional().positive().integer(),
        name: Joi.string().required().min(2).max(50)
    });

    public validate(): void {
        const result = CategoryModel.categoryValidationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message);
    }

}

export default CategoryModel;