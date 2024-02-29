import path from 'node:path';
import fs from 'node:fs';
import { rm } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import {PathApp} from "../utils/index.js";
export const mv= async (pathExist, newPath)=>{
    console.log(pathExist, newPath )
    try {
        const oldPath = path.resolve(PathApp.getPath(), pathExist);
        const fromName = path.basename(oldPath);
        const to = path.resolve(PathApp.getPath(), newPath, fromName);
        const readStream = fs.createReadStream(fromName);
        const writeStream = fs.createWriteStream(to);
        await pipeline(readStream, writeStream);
        await rm(fromName);
    } catch (error) {
        console.log(error);
    }
}
