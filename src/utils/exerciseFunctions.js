
import { firebaseUser } from './firebase'
import { main, accessory, optional } from '../data/exercises'

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

function findExerciseById(exerciseList, exercise_id) {
    for (var i = 0; i < exerciseList.length; i++) {
        if (exerciseList[i].id === exercise_id) {
            return exerciseList[i];
        }
    }
}

function getExerciseFromId(exercise_id, userObject) {

    let name
    let weight
    let ref

    if (exercise_id > 0 && exercise_id < 4) {
        const exercise = main.filter(x => x.id === exercise_id);
        name = titleCase(exercise[0].name)
        switch (exercise_id) {
            case 1:
                ref = 'bench1rm'
                break;
            case 2:
                ref = 'squat1rm'
                break;
            case 3:
                ref = 'deadlift1rm'
                break;
            default:
                return { name: 'Error', weight: 0 }
        }
        weight = userObject[ref]
        return { name, weight }
    } else if (exercise_id === 'deadliftvariation') {
        // TODO: Find the users deadlift variation exercise
        return { name: 'Deadlift Variation', weight: userObject['deadlift1rm'] }
    } else if (exercise_id === 'optional-upper3') {
        const ex_id = userObject['optionalUpper3']
        const chosen = findExerciseById(optional, ex_id)
        return { name: titleCase(chosen.name), weight: 0 }
    } else if (exercise_id === 'optional-upper4') {
        const ex_id = userObject['optionalUpper4']
        const chosen = findExerciseById(optional, ex_id)
        return { name: titleCase(chosen.name), weight: 0 }
    } else {
        console.log('cool')
        return { name: 'Not yet added', weight: '0' }
    }
}

export { getExerciseFromId }