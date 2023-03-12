import Joi from "joi";
import { ValidationError } from "./client-errors";

class OrderModel {

    public orderId: number;
    public userId: number;
    public cartId: number;
    public totalPrice: number;
    public city: string;
    public address: string;
    public house: number;
    public zipCode: number;
    public orderDate: string;
    public lastDigits: number;

    public constructor(order: OrderModel) {
        this.orderId = order.orderId;
        this.userId = order.userId;
        this.cartId = order.cartId;
        this.totalPrice = order.totalPrice;
        this.city = order.city;
        this.address = order.address;
        this.house = order.house;
        this.zipCode = order.zipCode;
        this.orderDate = order.orderDate;
        this.lastDigits = order.lastDigits;
    }

    private static orderValidationSchema = Joi.object({
        orderId: Joi.number().optional().positive().integer(),
        userId: Joi.number().required().positive().integer(),
        cartId: Joi.number().required().positive().integer(),
        totalPrice: Joi.number().required().positive().max(99999.99),
        city: Joi.string().required().min(2).max(50),
        address: Joi.string().required().min(4).max(100),
        house: Joi.number().optional().positive().integer().max(999),
        zipCode: Joi.number().required().positive().integer().max(9999999999),
        orderDate: Joi.date().required(),
        lastDigits: Joi.number().required().positive().integer().max(9999)
    });

    public validate(): void {
        const result = OrderModel.orderValidationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message);
    }

}

export default OrderModel;