// ./src/helpers/formatMediaTime.ts
export default function (currentTime) {
    let sec_num = parseInt(String(currentTime), 10);
    let days = Math.floor(parseInt(String(Number(sec_num) / (24 * 3600))));
    sec_num = sec_num % (24 * 3600);
    let hours = Math.floor(parseInt(String(Number(sec_num) / 3600)));
    sec_num %= 3600;
    let minutes = Math.floor(sec_num / 60);
    sec_num %= 60;
    let seconds = Math.floor(sec_num);
    let sDays = days < 10 ? "0" + days : days;
    let sHrs = hours < 10 ? "0" + hours : hours;
    let sMins = minutes < 10 ? "0" + minutes : minutes;
    let sSecs = seconds < 10 ? "0" + seconds : seconds;
    let output = sDays === '00' ? '' : sDays + ':';
    output += sHrs === '00' ? '' : sHrs + ':';
    output += sMins + ':' + sSecs;
    return output;
}
//# sourceMappingURL=formatMediaTime.js.map