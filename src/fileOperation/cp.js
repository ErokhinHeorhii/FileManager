import path from 'node:path';
import fs from 'node:fs';
import {PathApp} from "../utils/index.js";
import { pipeline } from 'node:stream/promises';


export const cp = async (pathExist, newPath) => {
    try {
        const oldPath = path.resolve(PathApp.getPath(), pathExist);
        const fromName = path.basename(oldPath);
        const to = path.resolve(PathApp.getPath(), newPath, fromName);
        const readStream = fs.createReadStream(fromName);
        const writeStream = fs.createWriteStream(to);
        await pipeline(readStream, writeStream);
    } catch (error) {
        console.log(error);
    }
}
