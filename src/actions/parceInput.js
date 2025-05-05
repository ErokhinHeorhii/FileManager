export const parseInput = (str) => {

    const [command, ...rest] = str.split(' ');
    const pathes = [];
    let temp = '';

    for (let part of rest) {
        const hasQuote = part.match(/'|"/);
        if (hasQuote) {
            if (temp === '') {
                temp = part.slice(1);
            } else {
                temp += ' ' + part.slice(0, -1);
                pathes.push(temp);
                temp = '';
            }
        } else if (temp !== '') {
            temp += ' ' + part;
        } else {
            pathes.push(part);
        }
    }

    const source = pathes.shift();
    const inputName = pathes.shift();
    return {
        command,
        source,
        inputName
    }
};
