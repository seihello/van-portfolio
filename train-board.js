const introductions = [
    "Hello, I'm Seisuke!",
    "Full Stack Developer",
    "Eager to learn new things",
]
let index = 0

export function setInitialArrival() {
    for (let i = 0; i < 3; i++) {
        const eta = i === 0 ? "Now" : `${getETA(i+1)}min`
        const arrivalElement = createArrivalElement(introductions[i], eta)
        arrivalElement.css("top", `${i * 33}%`)
        $("#schedule").append(arrivalElement)
    }
}

export function updateIntroduction() {
    $(".arrival").first().animate(
        { left: '100%' }, 1000, slideUp
    )
}

function slideUp() {
    $(".arrival").first().remove()

    $(".arrival").first().children(".eta").text("Now")
    $(".arrival").last().children(".eta").text(`${getETA(2)}min`)
    $(".arrival").first().animate({ top: `0%` }, 500)
    $(".arrival").last().animate({ top: `33%` }, 500, insertNewArrival)
}

function insertNewArrival() {
    const arrivalElement = createArrivalElement(introductions[index], `${getETA(3)}min`)
    arrivalElement.css("top", `66%`)
    arrivalElement.css("left", `-100%`)
    $("#schedule").append(arrivalElement)
    $(".arrival").last().animate({ left: `0px` }, 500)
    
    index = index === introductions.length - 1 ? 0 : index + 1
}

function createArrivalElement(destination, eta) {
    const arrivalElement = $(`
      <div class="arrival">
        <img class="train-icon" src="train.png">
        <div class="destination">${destination}</div>
        <div class="eta">${eta}</div>
      </div>
    `)
    return arrivalElement
}

export function updateClock() {
    const currentDate = new Date()
    $("#current-time").text(`${toAMPM(currentDate.getHours(), currentDate.getMinutes())}`)
}

function toAMPM(hour, minute) {
    if (minute < 10) {
        minute = "0" + minute
    }
    if (hour === 0) {
        return `${12}:${minute}a.m.`
    }
    else if (hour < 12) {
        return `${hour}:${minute}a.m.`
    }
    else if (hour === 12) {
        return `${12}:${minute}p.m.`
    }
    else if (hour > 12) {
        return `${hour - 12}:${minute}p.m.`
    }
}

function getETA(line) {
    switch(line) {
        case 2:
            return Math.floor(Math.random() * 2) + 3
            break;
        case 3:
            return Math.floor(Math.random() * 6) + 5
            break;
    }
}