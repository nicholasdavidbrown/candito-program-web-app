/**
 * API Functions for exercises in Firestore database
 */

const { db } = require('../../utils/firebase')
const { urlize } = require('../../utils/strings')

const exerciseCollection = db.collection('exercises')

async function fetchAllExercises() {
    const snapshot = await exerciseCollection.get()
    return snapshot.docs.map(doc => doc.data());
}

/**
 * Adds exercise to application
 */
async function addExercise(name, type, muscles) {
    const docId = urlize(name)
    const musclesArray = muscles.split(",").map(item => item.trim());
    const snapshot = await exerciseCollection.doc(docId).set({
        name, type, muscles: musclesArray
    })
    return snapshot.docs.map(doc => doc.data());
}

export { fetchAllExercises, addExercise }