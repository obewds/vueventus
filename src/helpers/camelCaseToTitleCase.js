// ./src/helpers/camelCaseToTitleCase.js

export default function(str) {

    let temp = str.replace( /([A-Z])/g, " $1").replace(/\s+/g, " ")
    let tempArray = temp.split(' ')
    let casedArray = tempArray.map(str => {
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
    })
    
    return (casedArray.join(' ')).trim()

}
