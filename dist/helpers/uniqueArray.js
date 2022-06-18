// ./src/helpers/uniqueArray.ts
export default function (array) {
    return array.filter((value, index, self) => self.indexOf(value) === index);
}
//# sourceMappingURL=uniqueArray.js.map