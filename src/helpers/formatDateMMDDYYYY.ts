// ./src/helpers/formatDateMMDDYYYY.ts

// TODO: Add tests for formatDateMMDDYYYY.ts
// TODO: Add docs for formatDateMMDDYYYY.ts

import padNumber from './padNumber'

export default function (date: Date, separator = '/'): string {
    return [
        padNumber(date.getMonth() + 1),
        padNumber(date.getDate()),
        date.getFullYear(),
    ].join(separator)
}
