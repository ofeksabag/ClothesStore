import express, { Request, Response, NextFunction } from "express";
import CartModel from "../4-models/cart-model";
import CartItemsModel from "../4-models/cartItems-model";
import OrderModel from "../4-models/order-model";
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

// GET http://localhost:4000/api/cartItems/:userId
router.get("/cartItems/:userId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const userId = +request.params.userId;
        await productService.getUserCartItems(userId);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/cart
router.post("/cart", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const cart = new CartModel(request.body);
        const addedCart = await productService.addCart(cart);
        response.status(201).json(addedCart);
    }
    catch(err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/cartItems
router.post("/cartItems", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const cartItem = new CartItemsModel(request.body);
        const addedCartItem = await productService.addCartItem(cartItem);
        response.status(201).json(addedCartItem);
    }
    catch(err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/orders
router.post("/orders", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const order = new OrderModel(request.body);
        const addedOrder = await productService.addOrder(order);
        response.status(201).json(addedOrder);
    }
    catch(err: any) {
        next(err);
    }
});

// PUT http://localhost:4000/api/cartItems/:itemId
router.put("/cartItems/:itemId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.itemId = +request.params.itemId;
        const cartItem = new CartItemsModel(request.body);
        const updatedCartItem = await productService.updateCartItem(cartItem);
        response.status(200).json(updatedCartItem);
    }
    catch (err: any) {
        next(err);
    }
});

// DELETE http://localhost:4000/api/cartItems/:itemId
router.delete("/cartItems/:itemId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const itemId = +request.params.itemId;
        await productService.deleteCartItem(itemId);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;