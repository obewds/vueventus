// ./src/helpers/uniqueArray.js

export default function(array) {
    return array.filter((value, index, self) => self.indexOf(value) === index)
}
