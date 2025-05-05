import { homedir } from 'node:os';

class PathClass {
    constructor(home) {
        this._path = home();
    }
    setPath(newPath) {
        this._path = newPath;
    }
    getPath() {
        return this._path;
    }
}
export const PathApp = new PathClass(homedir);
