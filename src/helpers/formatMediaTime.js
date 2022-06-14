// ./src/helpers/formatMediaTime.js

export default function (currentTime = 0) {

    const minutes = "0" + Math.floor(currentTime / 60)
    const seconds = "0" +  Math.floor(currentTime - minutes * 60)

    //return minutes.substr(-2) + ":" + seconds.substr(-2)
    return minutes.substring(-2) + ":" + seconds.substring(-2)
    
}
