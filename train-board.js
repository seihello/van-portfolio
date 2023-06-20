const introductions = [
    "Hello, I'm Seisuke!",
    "Full Stack Developer",
    "Eager to learn new things",
]
let index = 0

export function setInitialArrival() {
    for (let i = 0; i < 3; i++) {
        const eta = i === 0 ? "Now" : `${i * 2 + 1}min`
        const arrivalElement = createArrivalElement(introductions[i], eta)
        arrivalElement.css("top", `${i * 80}px`)
        $("#schedule").append(arrivalElement)
    }
}

export function updateIntroduction() {
    $(".arrival").first().animate(
        { left: '1000px' }, 1000, slideUp
    )
}

function slideUp() {
    $(".arrival").first().remove()

    $(".arrival").first().children(".eta").text("Now")
    $(".arrival").last().children(".eta").text("3min")
    $(".arrival").first().animate({ top: `0px` }, 500)
    $(".arrival").last().animate({ top: `80px` }, 500, insertNewArrival)
}

function insertNewArrival() {
    const arrivalElement = createArrivalElement(introductions[index], "5min")
    arrivalElement.css("top", `160px`)
    arrivalElement.css("left", `-1000px`)
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

function getDestination() {
    switch (Math.floor(Math.random() * 2)) {
        case 0:
            return "King George"
        case 1:
            return "Production Way - University"
    }
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