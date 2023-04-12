class AppConfig {
    public websiteNameUrl = "http://localhost:4000/api/website/websiteName/";
    public websiteDescriptionUrl = "http://localhost:4000/api/website/websiteDescription/";
    public themeColorUrl = "http://localhost:4000/api/website/themeColor/";
    public headerLineUrl = "http://localhost:4000/api/website/headerLine/";
    public subcategoryUrl = "http://localhost:4000/api/subcategories/";

    public loginUrl = "http://localhost:4000/api/auth/login/";
    public registerUrl = "http://localhost:4000/api/auth/register/";
}

const appConfig = new AppConfig();

export default appConfig;