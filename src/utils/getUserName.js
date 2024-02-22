export const getUserName = () => {
    const args = process.argv.slice(2)
    const userNameArgs = args[args.length - 1]
    if (userNameArgs && userNameArgs.includes('--username=')) {
        return userNameArgs.split('=')[1]
    }
}

