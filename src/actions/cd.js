import path from 'node:path';
import {PathApp} from "../utils/index.js";

export const cd = (inputPath) => {
    try {
        let _path = path.resolve(PathApp.getPath(), inputPath);
        PathApp.setPath(_path);
    } catch (error) {
        console.log('invalid address');
    }
};


