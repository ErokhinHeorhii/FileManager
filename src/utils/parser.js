import {parseInput, up} from "../actions/index.js";

export const parser = async (input) => {
    // const {command, source = '', destination = ''} = parseInput(input.trim());

    switch (input) {
        case('up'):
            up()
            break

    }
}
