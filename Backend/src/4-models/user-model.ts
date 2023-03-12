import Joi from "joi";
import { ValidationError } from "./client-errors";
import RoleModel from "./role-model";

class UserModel {

    public userId: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role: RoleModel;
    public city: string;
    public address: string;
    public house: number;
    public zipCode: number;

    public constructor(user: UserModel) {
        this.userId = user.userId;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
        this.city = user.city;
        this.address = user.address;
        this.house = user.house;
        this.zipCode = user.zipCode;
    }

    private static registerValidationSchema = Joi.object({
        userId: Joi.number().optional().positive().integer(),
        firstName: Joi.string().required().min(2).max(20),
        lastName: Joi.string().required().min(2).max(20),
        email: Joi.string().required().min(10).email(),
        password: Joi.string().required().min(4),
        role: Joi.number().optional(),
        city: Joi.string().required().min(2).max(50),
        address: Joi.string().required().min(4).max(100),
        house: Joi.number().optional().positive().integer().max(999),
        zipCode: Joi.number().required().positive().integer().max(9999999999)
    });

    public validate(): void {
        const result = UserModel.registerValidationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message);
    }

}

export default UserModel;