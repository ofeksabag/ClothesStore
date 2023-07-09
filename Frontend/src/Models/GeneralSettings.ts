import { RegisterOptions } from "react-hook-form";

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

    public static websiteNameValidation: RegisterOptions = {
        required: { value: true, message: "Missing website name" },
        minLength: { value: 2, message: "Website name must be minimum 2 chars" },
        maxLength: { value: 50, message: "Website name must be maximum 50 chars" }
    }

    public static websiteDescriptionValidation: RegisterOptions = {
        required: { value: true, message: "Missing website description" },
        minLength: { value: 5, message: "Website description must be minimum 2 chars" },
        maxLength: { value: 200, message: "Website description must be maximum 50 chars" }
    }

    public static websiteThemeColorValidation: RegisterOptions = {
        required: { value: true, message: "Missing theme color description" },
        minLength: { value: 2, message: "Website theme color must be minimum 2 chars" },
        maxLength: { value: 100, message: "Website theme color must be maximum 50 chars" }
    }

    public static websiteHeaderLineValidation: RegisterOptions = {
        required: { value: true, message: "Missing theme color description" },
        minLength: { value: 2, message: "Website theme color must be minimum 2 chars" },
        maxLength: { value: 200, message: "Website theme color must be maximum 50 chars" }
    }

}

export default GeneralSettings;