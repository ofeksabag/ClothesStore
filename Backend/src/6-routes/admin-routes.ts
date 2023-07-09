import express, { Request, Response, NextFunction } from "express";
import verifyAdmin from "../3-middleware/verify-admin";
import BrandModel from "../4-models/brand-model";
import CategoryModel from "../4-models/category-model";
import DiscountModel from "../4-models/discount-model";
import GeneralSettings from "../4-models/general-settings-model";
import ProductModel from "../4-models/product-model";
import SubcategoryModel from "../4-models/subcategory-model";
import adminService from "../5-services/admin-service";

const router = express.Router();

// POST http://localhost:4000/api/admin/brands
router.post("/admin/brands", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const brand = new BrandModel(request.body);
        const addedBrand = await adminService.addBrand(brand);
        response.status(201).json(addedBrand);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/admin/categories
router.post("/admin/categories", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const category = new CategoryModel(request.body);
        const addedCategory = await adminService.addCategory(category);
        response.status(201).json(addedCategory);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/admin/subcategories
router.post("/admin/subcategories", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const subcategory = new SubcategoryModel(request.body);
        const addedSubcategory = await adminService.addSubcategory(subcategory);
        response.status(201).json(addedSubcategory);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/admin/products
router.post("/admin/products", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.image = request.files?.image;
        const product = new ProductModel(request.body);
        const addedProduct = await adminService.addProduct(product);
        response.status(201).json(addedProduct);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/admin/discounts
router.post("/admin/discounts", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const discount = new DiscountModel(request.body);
        const addedDiscount = await adminService.addDiscount(discount);
        response.status(201).json(addedDiscount);
    }
    catch (err: any) {
        next(err);
    }
});

// PUT http://localhost:4000/api/admin/website/generalSettings/:layoutId
router.put("/admin/website/generalSettings/:layoutId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.layoutId = +request.params.layoutId;
        const generalSettings = new GeneralSettings(request.body);
        const updatedGeneralSettings = await adminService.updateGeneralSettings(generalSettings);
        response.status(200).json(updatedGeneralSettings);
    }
    catch (err: any) {
        next(err);
    }
});

// PUT http://localhost:4000/api/admin/products/:productId
router.put("/admin/products/:productId([0-9]+)", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.productId = +request.params.productId;
        request.body.image = request.files?.image;
        const product = new ProductModel(request.body);
        const updatedProduct = await adminService.updateProduct(product);
        response.status(200).json(updatedProduct);
    }
    catch (err: any) {
        next(err);
    }
});

// DELETE http://localhost:4000/api/admin/brands/:brandId
router.delete("/admin/brands/:brandId([0-9]+)", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const brandId = +request.params.brandId;
        await adminService.deleteBrand(brandId);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

// DELETE http://localhost:4000/api/admin/categories/:categoryId
router.delete("/admin/categories/:categoryId([0-9]+)", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categoryId = +request.params.categoryId;
        await adminService.deleteCategory(categoryId);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

// DELETE http://localhost:4000/api/admin/subcategories/:subcategoryId
router.delete("/admin/subcategories/:subcategoryId([0-9]+)", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const subcategoryId = +request.params.subcategoryId;
        await adminService.deleteSubcategory(subcategoryId);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

// DELETE http://localhost:4000/api/admin/products/:productId
router.delete("/admin/products/:productId([0-9]+)", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const productId = +request.params.productId;
        await adminService.deleteProduct(productId);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;