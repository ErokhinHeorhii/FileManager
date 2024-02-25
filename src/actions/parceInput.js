export const parseInput = (str) => {
    const [command, ...rest] = str.split(' ');
    const path = [];
    let temp = '';

    for (let part of rest) {
        const hasQuote = part.match(/'|"/);
        if (hasQuote) {
            if (temp === '') {
                temp = part.slice(1);
            } else {
                temp += ' ' + part.slice(0, -1);
                path.push(temp);
                temp = '';
            }
        } else if (temp !== '') {
            temp += ' ' + part;
        } else {
            path.push(part);
        }
    }

    const source = path.shift();

    return {
        source,
    };
};
