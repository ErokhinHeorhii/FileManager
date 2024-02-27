import path from 'node:path';
import fs from 'node:fs/promises';
import {PathApp} from "../utils/index.js";

export const rn = async (pathFile, name) => {
    try {
        const filePath = path.resolve(PathApp.getPath(), pathFile);
        PathApp.setPath(filePath)
        let _path = path.resolve(PathApp.getPath(), '../')
        PathApp.setPath(_path)
        const newNamePath = path.resolve(_path, name);
        await fs.rename(filePath, newNamePath);
    } catch (error) {
        console.log(error)
    }
}
