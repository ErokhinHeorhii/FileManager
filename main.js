import readline from 'node:readline/promises';
import {getUserName, PathApp} from "./src/utils/index.js";

const startFileManagerApp = () => {
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
    const username = getUserName() || "SomeBody";

console.log(`Welcome to the File Manager, ${username}`);
console.log(`You are currently in ${PathApp.getPath()}`)

rl.on('close',() => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`)
});

    rl.on('line', async (input) => {
    await lineParser(input);
    console.log(`You are currently in ${PathCache.getPath()}`)

});

}
startFileManagerApp()
