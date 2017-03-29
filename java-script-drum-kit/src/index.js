// "use strict";

function playEffect(e) {
    elements = getElements(e);
    audio = elements.audioEl;
    key = elements.keyEl;
    playSound(audio);
    playButton(key);
}

function playSound(audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function playButton(key) {
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
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
