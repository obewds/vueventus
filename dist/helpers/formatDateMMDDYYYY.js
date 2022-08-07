// ./src/helpers/formatDateMMDDYYYY.ts
import padNumber from './padNumber';
export default function (date, separator = '/') {
    return [
        padNumber(date.getMonth() + 1),
        padNumber(date.getDate()),
        date.getFullYear(),
    ].join(separator);
}
//# sourceMappingURL=formatDateMMDDYYYY.js.map