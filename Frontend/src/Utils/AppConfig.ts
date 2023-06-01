class AppConfig {
    // General Settings
    public websiteNameUrl = "http://localhost:4000/api/website/websiteName/";
    public websiteDescriptionUrl = "http://localhost:4000/api/website/websiteDescription/";
    public themeColorUrl = "http://localhost:4000/api/website/themeColor/";
    public headerLineUrl = "http://localhost:4000/api/website/headerLine/";
    public subcategoryUrl = "http://localhost:4000/api/subcategories/";

    // Auth
    public loginUrl = "http://localhost:4000/api/auth/login/";
    public registerUrl = "http://localhost:4000/api/auth/register/";
    public singleUserUrl = "http://localhost:4000/api/auth/users/";
}

const appConfig = new AppConfig();

export default appConfig;