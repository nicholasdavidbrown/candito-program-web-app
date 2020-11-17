/**
 * String variable utils
 */

function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function urlize(s) {
    if (typeof s !== 'string') return ''
    const c = s.split('/').join('-')
    return c.split(' ').join('_').toLowerCase()
}

function unUrlize(s) {
    if (typeof s !== 'string') return ''
    const c = s.split('-').join('/')
    return capitalize(c.split('_').join(' '))
}

export { capitalize, urlize, unUrlize }