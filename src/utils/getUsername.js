export const getUsername = () => {
    const args = process.argv.slice(2)
    const userNameArgs = args[args.length - 1]
    if (userNameArgs && userNameArgs.includes('--username=')) {
        return name = userNameArgs.split('=')[1] || 'SomeBody'
    }
}

