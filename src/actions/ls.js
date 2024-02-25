import fs from 'node:fs/promises';
import {PathApp} from "../utils/index.js";

export const ls = async () => {
    const currentPath = PathApp.getPath();
    const content = await fs.readdir(currentPath, { withFileTypes: true});
console.log(content)
    const directories = content.filter(item => item.isDirectory())
        .sort((a,b) => a.name-b.name)
        .map(item => ({ name: item.name, type: 'directory'}));
    const files = content.filter(item => item.isFile())
        .sort((a,b) => a.name-b.name)
        .map(item => ({ name: item.name, type: 'file'}));

    console.table([ ...directories, ...files,]);
};
