import readline from 'node:readline/promises';
import {getUserName, parser, PathApp} from "./src/utils/index.js";

const startFileManagerApp = () => {
    const rl = readline.createInterface({input: process.stdin, output: process.stdout});
    const username = getUserName() || "007";

    console.log(`Welcome to the File Manager, ${username}`);
    console.log(`You are currently in ${PathApp.getPath()}`)

    rl.on('close', () => {
        console.log(`\nThank you for using Fiuple Manager, ${username}, goodbye!`)
    });

    rl.on('line', async (input) => {
        await parser(input);
        console.log(`You are currently in ${PathApp.getPath()}`)
    });
}
startFileManagerApp()
