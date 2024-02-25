import {cd, ls, parseInput, up} from "../actions/index.js";

export const parser = async (input) => {
    const {path = ''} = parseInput(input.trim());

    switch (input) {
        case('up'):
            up()
            break;
        case('cd'):
            await cd(path)
            break;
        case('ls'):
            await ls()
            break;
    }

}
