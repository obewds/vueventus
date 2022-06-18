// ./src/helpers/formatNumber.ts

export default function (number: number): string {
    return new Intl.NumberFormat().format(number)
}
