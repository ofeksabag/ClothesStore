import Joi from "joi";
import { ValidationError } from "./client-errors";

class SubcategoryModel {
    public subcategoryId: number;
    public categoryId: number;
    public subcategoryName: string;

    public constructor(subcategory: SubcategoryModel) {
        this.subcategoryId = subcategory.subcategoryId;
        this.categoryId = subcategory.categoryId;
        this.subcategoryName = subcategory.subcategoryName;
    }

    private static subcategoryValidationSchema = Joi.object({
        subcategoryId: Joi.number().optional().positive().integer(),
        categoryId: Joi.number().required().positive().integer(),
        subcategoryName: Joi.string().required().min(2).max(50)
    });

    public validate(): void {
        const result = SubcategoryModel.subcategoryValidationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message);
    }

}

export default SubcategoryModel;