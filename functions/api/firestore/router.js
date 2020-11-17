const express = require('express')

// const firestore = admin.firestore()
const { checkDatabaseAuth } = require('../auth/dbAuth')

const { createDefaultExerciseBody } = require('../../business/exercises')
const { batchWriteArrayToFirestoreCollection } = require('./functions')

// config
const router = express.Router()

// common authorization on sync endpoints
router.use(async (req, res, next) => {
    console.log('Database API call triggered (Pre-Auth)')
    const { authorization } = req.headers
    const authorized = checkDatabaseAuth(authorization)

    if (!authorized) {
        res.sendStatus(401);
    }
    return next()
})

router.get('/', (req, res) => {
    console.log('DB endpoint triggered!')
    res.send('DB endpoint active')
})

/**
 * Adds the Default JSON of Exercises to the exercises collection in Firestore
 */
router.get('/add_default_exercises', async (req, res) => {
    const collection = 'exercises'
    try {
        const array = await createDefaultExerciseBody()
        const res = await batchWriteArrayToFirestoreCollection(array, collection)
        console.log(res)
    } catch (e) {
        console.error(e)
        res.sendStatus(500)
        return false
    }
    res.status(200).send('Default exercises added to database')
    return true
})

module.exports = router