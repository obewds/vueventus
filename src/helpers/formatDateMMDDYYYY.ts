// ./src/helpers/formatDateMMDDYYYY.ts

import padNumber from './padNumber'

export default function (date: Date, separator = '/'): string {
    return [
        padNumber(date.getMonth() + 1),
        padNumber(date.getDate()),
        date.getFullYear(),
    ].join(separator)
}
