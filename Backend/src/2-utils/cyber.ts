import crypto from "crypto";
import { Request } from "express";
import jwt, { JsonWebTokenError, Jwt } from "jsonwebtoken";
import { AuthenticationError } from "../4-models/client-errors";
import RoleModel from "../4-models/role-model";
import UserModel from "../4-models/user-model";

const secretKey = "OS - ClothesStore";

function createNewToken(user: UserModel): string {
    delete user.password;
    const container = { user }
    const options = { expiresIn: "3h" };
    const token = jwt.sign(container, secretKey, options);
    return token;
}

function verifyToken(request: Request): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        try {
            const header = request.header("authorization");

            if (!header) {
                reject(new AuthenticationError("Invalid token"));
                return;
            }

            const token = header.substring(7);

            if (!token) {
                reject(new AuthenticationError("Invalid token"));
                return;
            }

            jwt.verify(token, secretKey, (err: JsonWebTokenError) => {
                if (err) {
                    reject(new AuthenticationError("Invalid token"));
                    return;
                }
                resolve(true);
            });
        }
        catch (err: any) {
            reject(err);
        }
    });
}

async function verifyAdmin(request: Request): Promise<boolean> {
    await verifyToken(request);
    const user: UserModel = getUserFromToken(request);
    return +user.role === +RoleModel.Admin;
}

function getUserFromToken(request: Request): UserModel {
    const header = request.header("authorization");
    const token = header.substring(7);
    const user: UserModel = (jwt.decode(token) as any).user;
    return user;
}

function hashPassword(plainText: string): string {
    if (!plainText) return null;
    const salt = "OS-ClothesStore";
    const hashedPassword = crypto.createHmac("sha512", salt).update(plainText).digest("hex");
    return hashedPassword;
}

export default {
    createNewToken,
    verifyToken,
    hashPassword,
    verifyAdmin,
    getUserFromToken
}