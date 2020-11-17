const express = require('express')
const admin = require('firebase-admin');

// const firestore = admin.firestore()

// config
const router = express.Router()

// common authorization on sync endpoints
router.use(async (req, res, next) => {
    // Authorisation function can go here
})

// testing
router.get('/', (req, res) => {
    res.send('Default endpoint active')
})

module.exports = router