
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
                break;
        }
        weight = userObject[ref]
        return { name, weight }
    } else if (exercise_id === 'deadliftvariation') {
        return { name: 'Deadlift Variation', weight: 0 }
    } else {
        console.log('cool')
        return { name: 'nice', weight: 20 }
    }

}

export { getExerciseFromId }