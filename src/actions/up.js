import path from 'node:path';
import {PathApp} from "../utils/index.js";

export const up = () => {
    const currentPath = PathApp.getPath();
    const parentDir = path.resolve(currentPath, '../');
    const rootDir = path.parse(currentPath).root;
    console.log(rootDir)
    if (rootDir !== currentPath) {
        PathApp.setPath(parentDir);
    }
}
