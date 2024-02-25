import path from 'node:path';
import {PathApp} from "../utils/index.js";

export const cd = async (inputPath) => {
    console.log('inputPath',inputPath)
    try {
        let _path = path.resolve(PathApp.getPath(), inputPath);
        console.log('_path',_path)
        // process.chdir(_path)
        PathApp.setPath(_path);
    } catch (error) {
        console.log('invalid address');
    }
};


