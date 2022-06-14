// ./src/helpers/formatNumber.js

export default function (number) {
    return new Intl.NumberFormat().format(number)
}
