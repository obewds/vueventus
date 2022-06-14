// ./src/helpers/stringToCamelCase.js

export default function(str) {

    return str.replace(/[\W_]+/g, '').replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
    }).replace(/\s+/g, '')

}
