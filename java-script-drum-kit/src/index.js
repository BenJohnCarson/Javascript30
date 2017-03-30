"use strict";

function playEffect(e) {
    const elements = getElements(e);
    const audio = elements.audioEl;
    const key = elements.keyEl;
    playSound(audio);
    addPlaying(key);
}

function playSound(audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function addPlaying(key) {
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    removePlaying(this);
}

function removePlaying(key) {
    key.classList.remove('playing');
}

function getElements(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    return {
        audioEl: audio,
        keyEl: key
    };
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playEffect);
