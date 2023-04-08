import Joi from "joi";
import { ValidationError } from "./client-errors";

class GeneralSettings {

    public layoutId: number;
    public websiteName: string;
    public websiteDescription: string;
    public themeColor: string;
    public headerLine: string;

    public constructor(generalSettings: GeneralSettings) {
        this.layoutId = generalSettings.layoutId;
        this.websiteName = generalSettings.websiteName;
        this.websiteDescription = generalSettings.websiteDescription;
        this.themeColor = generalSettings.themeColor;
        this.headerLine = generalSettings.headerLine;
    }

    private static generalSettingsValidationSchema = Joi.object({
        layoutId: Joi.number().optional().positive().integer(),
        websiteName: Joi.string().required().min(3).max(50),
        websiteDescription: Joi.string().required().min(10).max(200),
        themeColor: Joi.string().required().min(3).max(100),
        headerLine: Joi.string().required().min(3).max(200)
    });

    public validate(): void {
        const result = GeneralSettings.generalSettingsValidationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message);
    }

}

export default GeneralSettings;