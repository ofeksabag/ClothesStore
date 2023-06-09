import express from "express";
import expressFileUploaded from "express-fileupload";
import cors from "cors";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import authRoutes from "./6-routes/auth-routes";
import productRoutes from "./6-routes/product-routes";
import adminRoutes from "./6-routes/admin-routes";
import websiteRoutes from "./6-routes/website-routes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(expressFileUploaded());

server.use("/api", authRoutes);
server.use("/api", productRoutes);
server.use("/api", adminRoutes);
server.use("/api", websiteRoutes);

server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));