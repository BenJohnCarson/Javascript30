"use strict";
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function updateTime() {
    const now = new Date();
    moveHand(now.getSeconds(), secondHand);
    moveHand(now.getMinutes(), minuteHand);
    moveHand(now.getHours(), hourHand, true);
}

function moveHand(time, element, isHour = false) {
    const degrees = setDegrees(time, isHour);
    element.style.transform = `rotate(${degrees}deg)`;
}

function setDegrees(time, isHour) {
    const divisor = isHour ? 12 : 60;
    return ((time / divisor) * 360) + 90;
}

setInterval(updateTime, 1000);
