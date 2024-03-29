// ./src/helpers/stringToCamelCase.ts

export default function(string: string): string {

    // 1st replace everything except alphanumeric characters and whitespace with a space
    // 2nd replace collapses multiple adjacent whitespace to single spaces
    // 3rd/4th replaces converts to camel case
    return string.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
    }).replace(/\s+/g, '')

}
