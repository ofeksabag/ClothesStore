import dal from "../2-utils/dal";
import BrandModel from "../4-models/brand-model";
import CategoryModel from "../4-models/category-model";
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

export default {
    getAllBrands,
    getAllCategories,
    getAllSubcategories,
    getAllProducts
}