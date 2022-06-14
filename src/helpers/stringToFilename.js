// ./src/helpers/stringToFilename.js

export default function(str) {

    return str.replace(/[^A-z0-9._-]/gi, '')

}
