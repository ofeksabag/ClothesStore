import Joi from "joi";
import { ValidationError } from "./client-errors";

class CartItemsModel {

    public itemId: number;
    public productId: number;
    public cartId: number;
    public amount: number;

    public constructor(cartItem: CartItemsModel) {
        this.itemId = cartItem.itemId;
        this.productId = cartItem.productId;
        this.cartId = cartItem.cartId;
        this.amount = cartItem.amount;
    }

    private static cartItemsValidationSchema = Joi.object({
        itemId: Joi.number().optional().positive().integer(),
        productId: Joi.number().required().positive().integer(),
        cartId: Joi.number().required().positive().integer(),
        amount: Joi.number().required().min(1).max(999)
    });

    public validate(): void {
        const result = CartItemsModel.cartItemsValidationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message);
    }

}

export default CartItemsModel;