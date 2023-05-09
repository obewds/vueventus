// ./src/helpers/shuffleArray.ts
export default function (array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        // get a random index
        let j = Math.floor(Math.random() * (i + 1));
        // swap elements
        let t = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = t;
    }
    return newArray;
}
//# sourceMappingURL=shuffleArray.js.map