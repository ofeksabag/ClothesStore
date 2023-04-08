import express, { Request, Response, NextFunction } from "express";
import websiteService from "../5-services/website-service";

const router = express.Router();

// GET http://localhost:4000/api/website/websiteName
router.get("/website/websiteName", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const websiteName = await websiteService.getWebsiteName();
        response.json(websiteName);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/website/websiteDescription
router.get("/website/websiteDescription", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const websiteDescription = await websiteService.getWebsiteDescription();
        response.json(websiteDescription);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/website/themeColor
router.get("/website/themeColor", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const themeColor = await websiteService.getThemeColor();
        response.json(themeColor);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/website/headerLine
router.get("/website/headerLine", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const headerLine = await websiteService.getHeaderLine();
        response.json(headerLine);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;