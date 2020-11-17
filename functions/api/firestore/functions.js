const admin = require('firebase-admin');
const firestore = admin.firestore();

// const exercisesCollection = firestore.collection('exercises')

/**
 * Generic Function: batchWriteArrayToFirestoreCollection
 * @param {*} data - Input data -> Must be an Array (typically of Objects)
 * @param {*} collection - The firestore collection to write
 */
function batchWriteArrayToFirestoreCollection(array, collection) {
    const batch = firestore.batch()
    array.forEach((doc) => {
        var docRef = firestore.collection(collection).doc();
        batch.set(docRef, doc);
    });
    batch.commit()
}

module.exports = { batchWriteArrayToFirestoreCollection }



