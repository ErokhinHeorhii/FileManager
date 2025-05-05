import fs from 'node:fs/promises';
import path from 'node:path';
import {PathApp} from "../utils/index.js";

export const mkdir = async (dirName) => {
    const dirPath = path.join(PathApp.getPath(), dirName);
    try {
        await fs.mkdir(dirPath);
        console.log(`Directory '${dirName}' created successfully.`);
    } catch (error) {
        console.error(`Failed to create directory '${dirName}':`, error);
    }
}; 