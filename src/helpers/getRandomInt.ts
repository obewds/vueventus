// ./src/helpers/getRandomInt.ts

export default function (min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    // The maximum and minimum are both inclusive
    return Math.floor(Math.random() * (max - min + 1) + min)
}
