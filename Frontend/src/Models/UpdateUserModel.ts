import { RegisterOptions } from "react-hook-form";
import RoleModel from "./RoleModel";

class UpdateUserModel {

    public userId: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public role: RoleModel;
    public city: string;
    public address: string;
    public house: number;
    public zipCode: number;

    public static firstNameValidation: RegisterOptions = {
        required: { value: true, message: "Missing first name" },
        minLength: { value: 2, message: "First name must be minimum 2 chars" },
        maxLength: { value: 20, message: "First name must be maximum 20 chars" }
    }

    public static lastNameValidation: RegisterOptions = {
        required: { value: true, message: "Missing last name" },
        minLength: { value: 2, message: "Last name must be minimum 2 chars" },
        maxLength: { value: 20, message: "Last name must be maximum 20 chars" }
    }

    public static emailValidation: RegisterOptions = {
        required: { value: true, message: "Missing email" },
        minLength: { value: 10, message: "Email must be minimum 10 chars" },
        maxLength: { value: 40, message: "Email must be maximum 40 chars" }
    }

    public static cityValidation: RegisterOptions = {
        required: { value: true, message: "Missing city" },
        minLength: { value: 4, message: "City must be minimum 2 chars" },
        maxLength: { value: 50, message: "City must be maximum 50 chars" }
    }

    public static addressValidation: RegisterOptions = {
        required: { value: true, message: "Missing address" },
        minLength: { value: 4, message: "Address must be minimum 2 chars" },
        maxLength: { value: 100, message: "Address must be maximum 100 chars" }
    }

    public static houseValidation: RegisterOptions = {
        required: { value: true, message: "Missing house" },
        min: { value: 1, message: "House must be minimum 1" },
        max: { value: 9999, message: "Address must be maximum 4 chars" }
    }

    public static zipCodeValidation: RegisterOptions = {
        required: { value: true, message: "Missing zip code" },
        min: { value: 0, message: "Zip code must be minimum 0" },
        max: { value: 9999999999, message: "Address must be maximum 10 chars" }
    }
    
}

export default UpdateUserModel;