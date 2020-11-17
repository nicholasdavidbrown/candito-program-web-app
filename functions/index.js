const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express')
const cors = require('cors')

const app = express()
const bodyParser = require('body-parser')

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://powerbuilder-app-23043.firebaseio.com"
});

// CORS options (applied to express app) IF REQUIRED
const corsOptions = {
    origin: functions.config().cors.origin,
}
app.use(cors(corsOptions))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

// Exposing unique server functions
// exports.name = require('./api/file').name

// App functions
app.use('/api/db', require('./api/db/default'))

app.get('/api/hello_world', (req, res) => {
    console.log('Hello World!')
    return res.send('Hello World!')
})

exports.app = functions.region('australia-southeast1').https.onRequest(app)

// if (process.env.TEST_MODE === 'local') {
//     logger.info('Listening with node')
//     logger.trace(functions.config())
//     app.listen(5000)
// }
