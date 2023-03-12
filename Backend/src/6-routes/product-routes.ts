import express, { Request, Response, NextFunction } from "express";
import productService from "../5-services/product-service";

const router = express.Router();

// GET http://localhost:4000/api/brands
router.get("/brands", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const brands = await productService.getAllBrands();
        response.json(brands);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/categories
router.get("/categories", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categories = await productService.getAllCategories();
        response.json(categories);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/subcategories
router.get("/subcategories", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const subcategories = await productService.getAllSubcategories();
        response.json(subcategories);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/products
router.get("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await productService.getAllProducts();
        response.json(products);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;