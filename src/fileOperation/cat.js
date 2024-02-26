import { createReadStream } from 'node:fs';
import path from 'node:path';
import {PathApp} from "../utils/index.js";


export const cat = async (filePath) => {
    try {
        const readStream = createReadStream(filePath);
        PathApp.setPath(filePath);
        readStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
        readStream.on('end', () => {
            process.stdout.write('\n');
        });
        readStream.on('error', (err) => {
            console.table(err);
        });
    } catch(error){
        console.table(error)
    }
};


