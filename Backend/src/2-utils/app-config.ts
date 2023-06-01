class AppConfig {

    public port = 4000;
    public mysqlHost = "localhost";
    public mysqlUser = "root";
    public mysqlPassword = "";
    public mysqlDatabase = "clothesStore";

    public productsImagesUrl = "./src/1-assets/images/products/";

}

const appConfig = new AppConfig();

export default appConfig;