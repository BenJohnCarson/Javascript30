"use strict";
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const offset = 90;



function updateTime() {
    const now = new Date();
    moveHand(now.getSeconds(), secondHand);
    moveHand(now.getMinutes(), minuteHand);
    moveHand(now.getHours(), hourHand, true);
}

function moveHand(time, element, isHour = false) {
    const degrees = setDegrees(time, isHour);
    if (degrees <= offset) {
        element.style.transition = "0s";
        element.style.transform = `rotate(${degrees}deg)`;
    } else {
        element.style.transition = "";
        element.style.transform = `rotate(${degrees}deg)`;
    }
}

function setDegrees(time, isHour) {
    const divisor = isHour ? 12 : 60;
    return ((time / divisor) * 360) + offset;
}

setInterval(updateTime, 1000);
