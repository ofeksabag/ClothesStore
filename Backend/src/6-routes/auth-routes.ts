import express, { Request, Response, NextFunction } from "express";
import CredentialsModel from "../4-models/credentials-model";
import UserModel from "../4-models/user-model";
import authService from "../5-services/auth-service";
import verifyLoggedIn from "../3-middleware/verify-logged-in";
import UpdateUserModel from "../4-models/update-user-model";

const router = express.Router(); // Capital R

// POST http://localhost:4000/api/auth/register
router.post("/auth/register", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = new UserModel(request.body);
        const token = await authService.register(user);
        response.status(201).json(token);
    }
    catch(err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/auth/login
router.post("/auth/login", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const credentials = new CredentialsModel(request.body);
        const token = await authService.login(credentials);
        response.json(token);
    }
    catch(err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/auth/users/:userId
router.get("/auth/users/:userId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const userId = +request.params.userId;
        const user = await authService.getSingleUser(userId);
        delete user.password;
        delete user.role;
        response.json(user);
    }
    catch(err: any) {
        next(err);
    }
});

// PUT http://localhost:4000/api/auth/users/:userId
router.put("/auth/users/:userId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.userId = +request.params.userId;
        const user = new UpdateUserModel(request.body);
        const updatedUser = await authService.updateUser(user);
        response.status(200).json(updatedUser);
    }
    catch(err: any) {
        next(err);
    }
});

export default router;