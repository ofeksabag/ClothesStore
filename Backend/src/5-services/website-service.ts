import dal from "../2-utils/dal";

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

export default {
    getWebsiteName,
    getWebsiteDescription,
    getThemeColor,
    getHeaderLine
}