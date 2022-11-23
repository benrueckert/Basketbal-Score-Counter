currentHomeCount = document.getElementById("home-counter").textContent;
currentHomeCount = Number(currentHomeCount);

function add1PointHome() {
    currentHomeCount += 1;
    document.getElementById("home-counter").textContent = currentHomeCount;
}

function add2PointsHome() {
    currentHomeCount += 2;
    document.getElementById("home-counter").textContent = currentHomeCount;
}

function add3PointsHome() {
    currentHomeCount += 3;
    document.getElementById("home-counter").textContent = currentHomeCount;
}

currentGuestCount = document.getElementById("guest-counter").textContent;
currentGuestCount = Number(currentGuestCount);

function add1PointGuest() {
    currentGuestCount += 1;
    document.getElementById("guest-counter").textContent = currentGuestCount;
}

function add2PointsGuest() {
    currentGuestCount += 2;
    document.getElementById("guest-counter").textContent = currentGuestCount;
}

function add3PointsGuest() {
    currentGuestCount += 3;
    document.getElementById("guest-counter").textContent = currentGuestCount;
}

function resetHomeScore() {
    document.getElementById("home-counter").textContent = 0;
    currentHomeCount = 0;
}

function resetGuestScore() {
    document.getElementById("guest-counter").textContent = 0;
    currentGuestCount = 0;
}