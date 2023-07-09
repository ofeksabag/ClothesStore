import axios from "axios";
import GeneralSettings from "../Models/GeneralSettings";
import appConfig from "../Utils/AppConfig";

class AdminService {

    public async updateGeneralSettings(layout: GeneralSettings): Promise<void> {
        const response = await axios.put<GeneralSettings>(appConfig.adminGeneralSettings + layout.layoutId, layout);
        const updatedGeneralSettings = response.data;
    }
    
}

const adminService = new AdminService();

export default adminService;