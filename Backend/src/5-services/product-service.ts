import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import BrandModel from "../4-models/brand-model";
import CartModel from "../4-models/cart-model";
import CartItemsModel from "../4-models/cartItems-model";
import CategoryModel from "../4-models/category-model";
import { ResourceNotFoundError } from "../4-models/client-errors";
import OrderModel from "../4-models/order-model";
import ProductModel from "../4-models/product-model";
import SubcategoryModel from "../4-models/subcategory-model";

async function getAllBrands(): Promise<BrandModel[]> {
    const sql = "SELECT * FROM brands ORDER BY name";
    const brands = await dal.execute(sql);
    return brands;
}

async function getAllCategories(): Promise<CategoryModel[]> {
    const sql = "SELECT * FROM category";
    const categories = await dal.execute(sql);
    return categories;
}

async function getAllSubcategories(): Promise<SubcategoryModel[]> {
    const sql = "SELECT C.name AS categoryName, S.name AS subcategoryName FROM subcategory AS S JOIN category AS C ON S.categoryId = C.categoryId ORDER BY C.name, S.name";
    const subcategories = await dal.execute(sql);
    return subcategories;
}

async function getAllProducts(): Promise<ProductModel[]> {
    const sql = "SELECT * FROM products";
    const products = await dal.execute(sql);
    return products;
}

async function getUserCartItems(userId: number): Promise<CartItemsModel[]> {
    const sql = "SELECT * FROM cartItems AS CI JOIN cart AS C ON CI.cartId = C.cartId WHERE C.userId = ?";
    const cartItems = await dal.execute(sql, userId);
    return cartItems;
}

async function addCart(cart: CartModel): Promise<CartModel> {
    cart.validate();
    const sql = "INSERT INTO cart VALUES(DEFAULT, ?, ?)";
    const result: OkPacket = await dal.execute(sql, cart.userId, cart.date);
    cart.cartId = result.insertId;
    return cart;
}

async function addCartItem(cartItem: CartItemsModel): Promise<CartItemsModel> {
    cartItem.validate();
    const sql = "INSERT INTO cartItems VALUES(DEFAULT, ?, ?, ?)";
    const result: OkPacket = await dal.execute(sql, cartItem.productId, cartItem.cartId, cartItem.amount);
    cartItem.itemId = result.insertId;
    return cartItem;
}

async function addOrder(order: OrderModel): Promise<OrderModel> {
    order.validate();
    const sql = "INSERT INTO orders VALUES(DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const result: OkPacket = await dal.execute(sql, order.userId, order.cartId, order.totalPrice, order.city, order.address, order.house, order.zipCode, order.orderDate, order.lastDigits);
    order.orderId = result.insertId;
    return order;
}

async function updateCartItem(cartItem: CartItemsModel): Promise<CartItemsModel> {
    cartItem.validate();
    const sql = "UPDATE cartItems SET productId = ?, cartId = ?, amount = ? WHERE cartId = ?";
    const result: OkPacket = await dal.execute(sql, cartItem.productId, cartItem.cartId, cartItem.amount, cartItem.cartId);
    if(result.affectedRows === 0) throw new ResourceNotFoundError(cartItem.itemId);
    return cartItem;
}

async function deleteCartItem(itemId: number): Promise<void> {
    const sql = "DELETE FROM cartItems WHERE itemId = ?";
    const result = await dal.execute(sql, itemId);
    if(result.affectedRows === 0) throw new ResourceNotFoundError(itemId);
}

export default {
    getAllBrands,
    getAllCategories,
    getAllSubcategories,
    getAllProducts,
    getUserCartItems,
    addCart,
    addCartItem,
    addOrder,
    updateCartItem,
    deleteCartItem
}