import { useEffect, useState } from "react";
import websiteService from "../../../Services/WebsiteService";
import notify from "../../../Utils/Notify";
import "./Header.css";

function Header(): JSX.Element {

    const [websiteDescription, setWebsiteDescription] = useState<string>("");
    const [themeColor, setThemeColor] = useState<string>("");
    const [headerLine, setHeaderLine] = useState<string>("");

    useEffect(() => {

        websiteService.getWebsiteDescription()
            .then(description => setWebsiteDescription(description))
            .catch(err => notify.error(err.message));

        document.querySelector('meta[name="description"]').setAttribute("content", websiteDescription);

        websiteService.getThemeColor()
            .then(color => setThemeColor(color))
            .catch(err => notify.error(err.message));

        document.body.style.backgroundColor = themeColor;

        websiteService.getHeaderLine()
            .then(line => setHeaderLine(line))
            .catch(err => notify.error(err.message));

    }, [themeColor, websiteDescription, headerLine]);

    return (
        <div className="Header">
            <div className="Toolbar">{headerLine}</div>
        </div>
    );
}

export default Header;
