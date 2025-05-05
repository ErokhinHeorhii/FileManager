import fs from 'node:fs';
import path from 'node:path';
import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { PathApp } from '../utils/index.js';

export const compress = async (source, destDir) => {
    const inputPath = path.resolve(PathApp.getPath(), source);
    const fileName = path.basename(source) + '.br';
    const outputPath = path.resolve(PathApp.getPath(), destDir, fileName);
    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    const brotli = createBrotliCompress();
    try {
        await pipeline(readStream, brotli, writeStream);
        console.log(`Сompressed to ${outputPath}`);
    } catch (error) {
        console.error('Compression failed:', error);
    }
}; 