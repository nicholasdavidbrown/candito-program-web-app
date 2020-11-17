/**
 * Searching JSON object related functions
 */

function filterObjectByName(array, string) {
    return array.filter(o => {
        return o.name.toLowerCase().includes(string.toLowerCase())
    });
}

export { filterObjectByName }