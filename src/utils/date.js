
function addZ(n) { return n < 10 ? '0' + n : '' + n; }

function convertDateToString(dateObject) {
    return `${dateObject.getFullYear()}-${addZ(dateObject.getMonth() + 1)}-${addZ(dateObject.getDate())}`
}

function setToMonday(dateString) {
    const date = new Date(dateString)

    const day = date.getDay()

    switch (day) {
        case 0:
            date.setDate(date.getDate() + 1);
            break;
        case 1:
            break;
        case 2:
            date.setDate(date.getDate() - 1);
            break;
        case 3:
            date.setDate(date.getDate() - 2);
            break;
        case 4:
            date.setDate(date.getDate() - 3);
            break;
        case 5:
            date.setDate(date.getDate() - 4);
            break;
        case 6:
            date.setDate(date.getDate() - 5);
            break;
        default:
            break;
    }

    return convertDateToString(date)
}

function getNumberToMakeFirstDayOfWeek(date) {
    const day = date.getDay()

}

function findCurrentWeek(currentDate, startDateString) {
    const startDate = new Date(startDateString)
    startDate.setDate(startDate.getDate() - startDate.getDay());

    console.log(startDate)
    var t2 = startDate.getTime();
    var t1 = currentDate.getTime();

    return parseInt((t1 - t2) / (24 * 3600 * 1000 * 7) + 1);
}

export { convertDateToString, setToMonday, findCurrentWeek }