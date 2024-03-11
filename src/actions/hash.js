import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {PathApp} from "../utils/index.js";

export const hash =  (source)=>{
    try {
        const fileStream =  fs.createReadStream(source, 'utf8');
        const hashFor = createHash('sha256')
        hashFor.setEncoding('hex');
        fileStream.on('end', () => {
            hashFor.end();
            const digest = hashFor.read();
            console.log(digest);
        });
        fileStream.pipe(hashFor);
    } catch (err) {
        console.error(err);
    }
}
