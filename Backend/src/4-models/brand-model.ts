import Joi from "joi";
import { ValidationError } from "./client-errors";

class BrandModel {

    public brandId: number;
    public name: string;

    public constructor(brand: BrandModel) {
        this.brandId = brand.brandId;
        this.name = brand.name;
    }

    private static brandValidationSchema = Joi.object({
        brandId: Joi.number().optional().positive().integer(),
        name: Joi.string().required().min(2).max(50)
    });

    public validate(): void {
        const result = BrandModel.brandValidationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message);
    }

}

export default BrandModel;