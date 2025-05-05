import fs from 'node:fs/promises';
import path from 'node:path';
import {PathApp} from "../utils/index.js";

export const rm = async (filePath) => {
    const absPath = path.resolve(PathApp.getPath(), filePath);
    try {
        await fs.rm(absPath);
        console.log(`'${filePath}' deleted successfully.`);
    } catch (error) {
        console.error(`Failed to delete '${filePath}':`, error);
    }
}; 