import Joi from "joi";
import { ValidationError } from "./client-errors";

class DiscountModel {

    public discountId: number;
    public productId: number;
    public discount: number;

    public constructor(discount: DiscountModel) {
        this.discountId = discount.discountId;
        this.productId = discount.productId;
        this.discount = discount.discount;
    }

    private static discountValidationSchema = Joi.object({
        discountId: Joi.number().optional().positive().integer(),
        productId: Joi.number().required().positive().integer(),
        discount: Joi.number().required().positive().max(100)
    });

    public validate(): void {
        const result = DiscountModel.discountValidationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message);
    }

}

export default DiscountModel;