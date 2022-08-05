// ./src/helpers/getRandomInt.ts

// TODO: Add tests for getRandomInt.ts
// TODO: Add docs for getRandomInt.ts

export default function (min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min)
}