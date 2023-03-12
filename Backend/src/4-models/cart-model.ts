import Joi from "joi";
import { ValidationError } from "./client-errors";

class CartModel {

    public cartId: number;
    public userId: number;
    public date: string;

    public constructor(cart: CartModel) {
        this.cartId = cart.cartId;
        this.userId = cart.userId;
        this.date = cart.date;
    }

    private static cartValidationSchema = Joi.object({
        cartId: Joi.number().optional().positive().integer(),
        userId: Joi.number().required().positive().integer(),
        date: Joi.date().required()
    });

    public validate(): void {
        const result = CartModel.cartValidationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message);
    }

}

export default CartModel;