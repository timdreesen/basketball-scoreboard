let homeScore = 0
let guestScore = 0

function home1() {
    homeScore = homeScore + 1
    document.getElementById("homeScore").innerText = homeScore
    updateLeader()
}
function home2() {
    homeScore = homeScore + 2
    document.getElementById("homeScore").innerText = homeScore
    updateLeader()
}
function home3() {
    homeScore = homeScore + 3
    document.getElementById("homeScore").innerText = homeScore
    updateLeader()
}
function guest1() {
    guestScore = guestScore + 1
    document.getElementById("guestScore").innerText = guestScore
    updateLeader()
}
function guest2() {
    guestScore = guestScore + 2
    document.getElementById("guestScore").innerText = guestScore
    updateLeader()
}
function guest3() {
    guestScore = guestScore + 3
    document.getElementById("guestScore").innerText = guestScore
    updateLeader()
}

function updateLeader() {
     if (homeScore > guestScore) {
        document.querySelector(".scorecardHome").style.borderWidth = "2px";
        document.querySelector(".scorecardGuest").style.borderWidth = "0px";
     }
    if (guestScore > homeScore) {
        document.querySelector(".scorecardHome").style.borderWidth = "0px";
        document.querySelector(".scorecardGuest").style.borderWidth = "2px";
     }
    if (guestScore == homeScore) {
        document.querySelector(".scorecardHome").style.borderWidth = "0px";
        document.querySelector(".scorecardGuest").style.borderWidth = "0px";
     }
}

function reset() {
    homeScore = 0
    guestScore = 0
    document.getElementById("homeScore").innerText = homeScore
    document.getElementById("guestScore").innerText = guestScore
    updateLeader()
}
