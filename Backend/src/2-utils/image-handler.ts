import { UploadedFile } from "express-fileupload";
import { v4 as uuid } from "uuid";
import fsPromises from "fs/promises";
import path from "path";
import fs from "fs";

async function saveImage(native: string, image: UploadedFile): Promise<string> {
    const uniqueImageName = createImageName(image.name);
    const absolutePath = native + uniqueImageName;
    await image.mv(absolutePath);
    return uniqueImageName;
}

async function updateImage(native: string, image: UploadedFile, existingImageName: string): Promise<string> {
    await deleteImage(native, existingImageName);
    const uniqueImageName = await saveImage(native, image);
    return uniqueImageName;
}

async function deleteImage(native: string, existingImageName: string): Promise<void> {
    try {
        if(!existingImageName) return;
        await fsPromises.unlink(native + existingImageName);
    }
    catch(err: any) {
        console.error(err.message);
    }
}

function createImageName(originalImageName: string): string {
    const extension = originalImageName.substring(originalImageName.lastIndexOf("."));
    const uniqueImageName = uuid() + extension;
    return uniqueImageName;
}

function getAbsolutePath(fileName: string, imageName: string): string {
    let absolutePath = path.join(__dirname, "..", "1-assets","images", fileName, imageName);
    if(!fs.existsSync(absolutePath)) {
        absolutePath = path.join(__dirname, "..", "1-assets","images", "notFound", "notFound.png");
    }
    return absolutePath;
}

export default {
    saveImage,
    updateImage,
    deleteImage,
    getAbsolutePath
}