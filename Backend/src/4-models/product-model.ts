import { UploadedFile } from "express-fileupload";
import Joi from "joi";
import { ValidationError } from "./client-errors";

class ProductModel {

    public productId: number;
    public brandId: number;
    public categoryId: number;
    public subcategoryId: number;
    public name: string;
    public description: string;
    public price: number;
    public imageUrl: string;
    public image: UploadedFile;


    public constructor(product: ProductModel) {
        this.productId = product.productId;
        this.brandId = product.brandId;
        this.categoryId = product.categoryId;
        this.subcategoryId = product.subcategoryId;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.imageUrl = product.imageUrl;
        this.image = product.image;
    }

    private static productValidationSchema = Joi.object({
        productId: Joi.number().optional().positive().integer(),
        brandId: Joi.number().required().positive().integer(),
        categoryId: Joi.number().required().positive().integer(),
        subcategoryId: Joi.number().required().positive().integer(),
        name: Joi.string().required().min(2).max(100),
        description: Joi.string().required().min(10).max(300),
        price: Joi.number().required().positive().max(99999.99),
        image: Joi.object().optional(),
        imageUrl: Joi.string().optional().min(38).max(50),
    });

    public validate(): void {
        const result = ProductModel.productValidationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message);
    }

}

export default ProductModel;