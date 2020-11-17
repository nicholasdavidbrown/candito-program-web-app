/**
 * Authentication credentials for making a /db API call
 */

// Hardcoded for now
const databaseAuthUser = 'admin'
const databaseAuthPassword = 'PowerbuilderNT9698'

const checkDatabaseAuth = (authorization) => {
    if (!authorization) {
        console.log('Unsuccessful authentication attempt, no authorization provided')
        return false
    }

    const formattedAuth = authorization.replace('Basic ', '')
    const decodedAuth = Buffer.from(formattedAuth, 'base64').toString()

    const [username, password] = decodedAuth.trim().split(':')

    if (username === databaseAuthUser && password === databaseAuthPassword) {
        console.log('Authorization success')
        return true
    }

    console.log('Unsuccessful authentication attempt, incorrect credentials provided')
    return false
}

module.exports = { checkDatabaseAuth }