import { OkPacket } from "mysql";
import appConfig from "../2-utils/app-config";
import dal from "../2-utils/dal";
import imageHandler from "../2-utils/image-handler";
import BrandModel from "../4-models/brand-model";
import CategoryModel from "../4-models/category-model";
import { ResourceNotFoundError } from "../4-models/client-errors";
import ProductModel from "../4-models/product-model";
import SubcategoryModel from "../4-models/subcategory-model";

async function addBrand(brand: BrandModel): Promise<BrandModel> {
    brand.validate();
    const sql = "INSERT INTO brands VALUES(DEFAULT, ?)";
    const result: OkPacket = await dal.execute(sql, brand.name);
    brand.brandId = result.insertId;
    return brand;
}

async function addCategory(category: CategoryModel): Promise<CategoryModel> {
    category.validate();
    const sql = "INSERT INTO category VALUES(DEFAULT, ?)";
    const result: OkPacket = await dal.execute(sql, category.name);
    category.categoryId = result.insertId;
    return category;
}

async function addSubcategory(subcategory: SubcategoryModel): Promise<SubcategoryModel> {
    subcategory.validate();
    const sql = "INSERT INTO subcategory VALUES(DEFAULT, ?, ?)";
    const result: OkPacket = await dal.execute(sql, subcategory.categoryId, subcategory.subcategoryName);
    subcategory.subcategoryId = result.insertId;
    return subcategory;
}

async function addProduct(product: ProductModel): Promise<ProductModel> {
    product.validate();
    product.imageUrl = await imageHandler.saveImage(appConfig.productsImagesUrl, product.image);
    const sql = "INSERT INTO products VALUES(DEFAULT, ?, ?, ?, ?, ?, ?, ?)";
    const result: OkPacket = await dal.execute(sql, product.brandId, product.categoryId, product.subcategoryId, product.name, product.description, product.price, product.imageUrl);
    product.productId = result.insertId;
    delete product.image;
    return product;
}

async function updateProduct(product: ProductModel): Promise<ProductModel> {
    product.validate();
    product.imageUrl = await getProductImageFromDB(product.productId);
    if(product.image) product.imageUrl = await imageHandler.updateImage(appConfig.productsImagesUrl, product.image, product.imageUrl);
    const sql = "UPDATE products SET brandId = ?, categoryId = ?, subcategoryId = ?, name = ?, description = ?, price = ?, imageUrl = ?";
    const result: OkPacket = await dal.execute(sql, product.brandId, product.categoryId, product.subcategoryId, product.name, product.description, product.price, product.imageUrl);
    if(result.affectedRows === 0) throw new ResourceNotFoundError(product.productId);
    delete product.image;
    return product;
}

async function deleteBrand(brandId: number): Promise<void> {
    const sql = "DELETE FROM brands WHERE brandId = ?";
    const result = await dal.execute(sql, brandId);
    if(result.affectedRows === 0) throw new ResourceNotFoundError(brandId);
}

async function deleteCategory(categoryId: number): Promise<void> {
    const sql = "DELETE FROM category WHERE categoryId = ?";
    const result = await dal.execute(sql, categoryId);
    if(result.affectedRows === 0) throw new ResourceNotFoundError(categoryId);
}

async function deleteSubcategory(subcategoryId: number): Promise<void> {
    const sql = "DELETE FROM subcategory WHERE subcategoryId = ?";
    const result = await dal.execute(sql, subcategoryId);
    if(result.affectedRows === 0) throw new ResourceNotFoundError(subcategoryId);
}

async function deleteProduct(productId: number): Promise<void> {
    const sql = "DELETE FROM products WHERE productId = ?";
    const result = await dal.execute(sql, productId);
    if(result.affectedRows === 0) throw new ResourceNotFoundError(productId);
}

async function getProductImageFromDB(productId: number): Promise<string> {
    const sql = "SELECT imageUrl FROM products WHERE productId = ?";
    const products = await dal.execute(sql, productId);
    const product = products[0];
    if (!product) return null;
    return product.imageUrl;
}

export default {
    addBrand,
    deleteBrand,
    addCategory,
    deleteCategory,
    addSubcategory,
    deleteSubcategory,
    addProduct,
    updateProduct,
    deleteProduct
}