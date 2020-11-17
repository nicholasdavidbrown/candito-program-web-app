/**
 * API Functions for exercises in Firestore database
 */

const { db } = require('../../utils/firebase')

const exerciseCollection = db.collection('exercises')

async function fetchAllExercises() {
    const snapshot = await exerciseCollection.get()
    return snapshot.docs.map(doc => doc.data());
}

export { fetchAllExercises }