import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import GeneralSettings from "../4-models/general-settings-model";
import { ResourceNotFoundError } from "../4-models/client-errors";

async function getWebsiteName(): Promise<string> {
    const sql = "SELECT websiteName FROM layout";
    const websiteName = await dal.execute(sql);
    return websiteName;
}

async function getWebsiteDescription(): Promise<string> {
    const sql = "SELECT websiteDescription FROM layout";
    const websiteDescription = await dal.execute(sql);
    return websiteDescription;
}

async function getThemeColor(): Promise<string> {
    const sql = "SELECT themeColor FROM layout";
    const themeColor = await dal.execute(sql);
    return themeColor;
}

async function getHeaderLine(): Promise<string> {
    const sql = "SELECT headerLine FROM layout";
    const headerLine = await dal.execute(sql);
    return headerLine;
}

async function getLayout(layoutId: number): Promise<GeneralSettings> {
    const sql = "SELECT * FROM layout WHERE layoutId = ?";
    const layout = await dal.execute(sql, layoutId);
    return layout;
}

export default {
    getWebsiteName,
    getWebsiteDescription,
    getThemeColor,
    getHeaderLine,
    getLayout
}