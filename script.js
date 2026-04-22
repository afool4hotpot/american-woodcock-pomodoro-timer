const startFocus = document.getElementById('start-focus');
const endFocus = document.getElementById('end-focus');
const endBreak = document.getElementById('end-break');
const reset = document.getElementById('reset');
const timerDisplay = document.getElementById('timer');
const midButtons = document.getElementById('midbuttons');
const woodcock = document.getElementById('woodcockpng');
const volToggle = document.getElementById('voltoggle');
const startBreak = document.getElementById('start-break');

let minutes = 25;
let seconds = 0;
let timer = null;
let meep = null;

function startFocusTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    if (meep){
        meep.pause();
        meep.currentTime = 0;
    }
    startFocus.style.display = 'none';
    midButtons.style.display = 'flex';
    endFocus.style.display = 'block';
    reset.style.display = 'block';
    endBreak.style.display = 'none';
    woodcock.src = 'assets/woodcock-cropped.gif';
    timer =setInterval(() => {
         seconds --;
        if (seconds === -1){
            minutes --;
            seconds = 59;
        }
        if (minutes === -1){
            minutes = 0;
            seconds = 0;
           
        }
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (minutes === 0 && seconds === 0){
            clearInterval(timer);
            woodcock.src = 'assets/woodcock-idle-cropped.png';
            meep = new Audio('assets/woodcock.mp3');
            meep.loop = true;
            meep.play();
            startFocus.style.display = 'none';
            midButtons.style.display = 'flex';
            endFocus.style.display = 'block';
            reset.style.display = 'none';
            endBreak.style.display = 'none';
        }
    }, 1000);
}

function startBreakTimer(){
    clearInterval(timer);
    minutes = 5;
    seconds = 0;
    startFocus.style.display = 'none';
    midButtons.style.display = 'none';
    endFocus.style.display = 'none';
    reset.style.display = 'none';
    endBreak.style.display = 'block';
    startBreak.style.display = 'none';
    if (meep){
        meep.pause();
        meep.currentTime = 0;
    }
    
    woodcock.src = 'assets/woodcock-cropped.gif';
    timer =setInterval(() => {
         seconds --;
        if (seconds === -1){
            minutes --;
            seconds = 59;
        }
        if (minutes === -1){
            minutes = 0;
            seconds = 0;
           
        }
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (minutes === 0 && seconds === 0){
            clearInterval(timer);
            woodcock.src = 'assets/woodcock-idle-cropped.png';
            meep = new Audio('assets/woodcock.mp3');
            meep.loop = true;
            meep.play();
            endBreak.style.display = 'none';
            startFocus.style.display = 'block';
        }
    }, 1000);
}

function resetTimer(){
    startFocus.style.display = 'block';
    midButtons.style.display = 'none';
    endFocus.style.display = 'none';
    reset.style.display = 'none';
    endBreak.style.display = 'none';
    if (meep){
        meep.pause();
        meep.currentTime = 0;
    }
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    timerDisplay.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
    woodcock.src = 'assets/woodcock-idle-cropped.png';
    midButtons.style.display = 'none';
    endBreak.style.display = 'none';
    startFocus.style.display = 'block';
}

function toggleVolume(){
    if (meep){
        if (meep.isMuted){
            meep.muted = false;
            volToggle.src = 'assets/volon.png';
        } else {
            meep.muted = true;
            volToggle.src = 'assets/voloff.png';
        }
    } else {
        if (volToggle.src.includes('volon.png')){
            volToggle.src = 'assets/voloff.png';
        } else {
            volToggle.src = 'assets/volon.png';
        }
    }
}

function moveToBreak(){
    clearInterval(timer);
    startFocus.style.display = 'none';
    midButtons.style.display = 'none';
    endFocus.style.display = 'none';
    reset.style.display = 'none';
    endBreak.style.display = 'none';
    woodcock.src = 'assets/woodcock-idle-cropped.png';

    if (meep){
        meep.pause();
        meep.currentTime = 0;
    }

    startBreak.style.display ='block';
    minutes = 5;
    seconds = 0;

    timerDisplay.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
}

startFocus.addEventListener('click', startFocusTimer);
endFocus.addEventListener('click', moveToBreak);
endBreak.addEventListener('click', resetTimer);
reset.addEventListener('click', resetTimer);
volToggle.addEventListener('click', toggleVolume);
startBreak.addEventListener('click', startBreakTimer);

document.querySelector('.nav img:nth-child(3)').addEventListener('click', toggleVolume);

document.querySelector('.nav img:first-child').addEventListener('click', () => {
    window.electronAPI.closeWindow();
});
document.querySelector('.nav img:nth-child(2)').addEventListener('click', () => {
    window.electronAPI.minimizeWindow();
});