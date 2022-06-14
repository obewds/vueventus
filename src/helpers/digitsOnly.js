// ./src/helpers/digitsOnly.js

export default function(str) {

    var temp = str.replace( /([A-Z])/g, " $1")
    
    return temp.charAt(0).toUpperCase() + temp.slice(1)

}
