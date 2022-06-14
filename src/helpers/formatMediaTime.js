// ./src/helpers/formatMediaTime.js

export default function (currentTime = 0) {

    let sec_num = parseInt(currentTime, 10)

    let days = Math.floor(parseInt( sec_num / (24 * 3600)))
 
    sec_num = sec_num % (24 * 3600)
    let hours = Math.floor(parseInt(sec_num / 3600))

    sec_num %= 3600
    let minutes = Math.floor(sec_num / 60)

    sec_num %= 60
    let seconds = Math.floor(sec_num)

    if (days < 10) {
        days = "0" + days
    }
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    //let output = hours === '00' ? minutes + ':' + seconds : hours + ':' + minutes + ':' + seconds
    let output = days === '00' ? '' : days + ':'
    output += hours === '00' ? '' : hours + ':'
    output += minutes + ':' + seconds
    
    return output
}
