import fs from 'node:fs';
import path from 'node:path';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { PathApp } from '../utils/index.js';

export const decompress = async (source, destDir) => {
    const inputPath = path.resolve(PathApp.getPath(), source);

    let fileName = path.basename(source);
    if (fileName.endsWith('.br')) {
        fileName = fileName.slice(0, -3);
    }
    const outputPath = path.resolve(PathApp.getPath(), destDir, fileName);
    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    const brotli = createBrotliDecompress();
    try {
        await pipeline(readStream, brotli, writeStream);
        console.log(`Decompressed to ${outputPath}`);
    } catch (error) {
        console.error('Decompression failed:', error);
    }
}; 