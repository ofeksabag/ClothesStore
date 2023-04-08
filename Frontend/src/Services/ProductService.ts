import axios from "axios";
import SubcategoryModel from "../Models/SubcategoryModel";
import appConfig from "../Utils/AppConfig";

class ProductService {

    public async getAllSubcategories(): Promise<SubcategoryModel[]> {
        const response = await axios.get(appConfig.subcategoryUrl);
        const subcategories = response.data;
        return subcategories;
    }

}

const productService = new ProductService();

export default productService;