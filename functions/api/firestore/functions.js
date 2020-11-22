const admin = require('firebase-admin');
const firestore = admin.firestore();

// const exercisesCollection = firestore.collection('exercises')
const { urlize } = require('../../utils/strings')

/**
 * Generic Function: batchWriteArrayToFirestoreCollection
 * @param {*} data - Input data -> Must be an Array (typically of Objects)
 * @param {*} collection - The firestore collection to write
 */
function batchWriteArrayToFirestoreCollection(array, collection) {
    const batch = firestore.batch()
    array.forEach((doc) => {
        const docId = urlize(doc.name)
        var docRef = firestore.collection(collection).doc(docId);
        batch.set(docRef, doc);
    });
    batch.commit()
}

module.exports = { batchWriteArrayToFirestoreCollection }



