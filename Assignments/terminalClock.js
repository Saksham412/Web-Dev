
function clock(){
    const currentTime = new Date()

    const currentHour = currentTime.getHours()
    const currentMin = currentTime.getMinutes()
    const currentSec = currentTime.getSeconds()

    const formatedHour = currentHour<10?'0'+currentHour:currentHour
    const formatedMin = currentMin<10?'0'+currentMin:currentMin
    const formatedSec = currentSec<10?'0'+currentSec:currentSec

    const timestr = `${formatedHour}:${formatedMin}:${formatedSec}`

    process.stdout.write('\x1B[2J\x1B[0f');
    console.log(timestr)

}

setInterval(clock,1*1000)

clock()