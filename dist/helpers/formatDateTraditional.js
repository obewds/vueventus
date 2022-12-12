// ./src/helpers/formatDateTraditional.ts
import monthNames from './monthNames';
export default function (date, format = 'long', language = 'english') {
    return monthNames()[language][format][date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}
//# sourceMappingURL=formatDateTraditional.js.map