import fs from 'node:fs/promises';
import path from 'node:path';
import {PathApp} from "../utils/index.js";

export const add = async (name) => {
    const pathFile= path.join(PathApp.getPath(), name);
    try {
        await fs.writeFile(pathFile, '', { flag: 'wx' });
    } catch(e) {
        throw new Error('FS operation failed');
    }
}


