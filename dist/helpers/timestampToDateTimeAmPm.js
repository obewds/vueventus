// ./src/helpers/timestampToDateTimeAmPm.ts
import monthNames from './monthNames';
import padNumber from './padNumber';
export default function (timestamp, format = 'short', language = 'english', am = 'AM', pm = 'PM') {
    var a = new Date(Number(timestamp) * 1000);
    var monthNamesObj = monthNames();
    var months = monthNamesObj[language][format];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hours = a.getHours();
    var minutes = a.getMinutes();
    var seconds = a.getSeconds();
    var amPm = hours >= 12 ? pm : am;
    hours = hours % 12;
    /* c8 ignore start */
    hours = hours === 0 ? 12 : hours;
    /* c8 ignore stop */
    return month + ' ' + padNumber(date) + ', ' + year + ' ' + hours + ':' + padNumber(minutes) + ':' + padNumber(seconds) + ' ' + amPm;
}
//# sourceMappingURL=timestampToDateTimeAmPm.js.map