setInterval(setClock, 1000)

var hourHand = document.getElementById("data-hour-hand")
var minuteHand = document.getElementById("data-minute-hand")
var secondHand = document.getElementById("data-second-hand")

function setClock()  {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours())/ 12
    secondHand.style.setProperty("--rotation", secondRatio * 360)
    minuteHand.style.setProperty("--rotation", minuteRatio * 360)
    hourHand.style.setProperty("--rotation", hourRatio * 360)
}

setClock()