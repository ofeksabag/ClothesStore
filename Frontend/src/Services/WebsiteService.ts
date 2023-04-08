import axios from "axios";
import appConfig from "../Utils/AppConfig";

class WebsiteService {

    public async getWebsiteName(): Promise<string> {
        const response = await axios.get(appConfig.websiteNameUrl);
        const websiteName = response.data[0].websiteName;
        return websiteName;
    }

    public async getWebsiteDescription(): Promise<string> {
        const response = await axios.get(appConfig.websiteDescriptionUrl);
        const websiteDescription = response.data[0].websiteDescription;
        return websiteDescription;
    }

    public async getThemeColor(): Promise<string> {
        const response = await axios.get(appConfig.themeColorUrl);
        const themeColor = response.data[0].themeColor;
        return themeColor;
    }

    public async getHeaderLine(): Promise<string> {
        const response = await axios.get(appConfig.headerLineUrl);
        const headerLine = response.data[0].headerLine;
        return headerLine;
    }

}

const websiteService = new WebsiteService();

export default websiteService;