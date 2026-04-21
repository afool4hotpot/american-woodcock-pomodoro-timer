const startFocus = document.getElementById('start-focus');
const startBreak = document.getElementById('start-break');
const endBreak = document.getElementById('end-break');
const reset = document.getElementById('reset');
const timerDisplay = document.getElementById('timer');
const midButtons = document.getElementById('midbuttons');
const woodcock = document.getElementById('woodcockpng');

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
    startBreak.style.display = 'block';
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
            startBreak.style.display = 'block';
            reset.style.display = 'none';
            endBreak.style.display = 'none';
        }
    }, 1000);
}

function startBreakTimer(){
    clearInterval(timer);
    startFocus.style.display = 'none';
    midButtons.style.display = 'none';
    startBreak.style.display = 'none';
    reset.style.display = 'none';
    endBreak.style.display = 'block';
    if (meep){
        meep.pause();
        meep.currentTime = 0;
    }
    minutes = 5;
    seconds = 0;
    startBreak.style.display = 'none';
    endBreak.style.display = 'block';
    
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
    startBreak.style.display = 'none';
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

startFocus.addEventListener('click', startFocusTimer);
startBreak.addEventListener('click', startBreakTimer);
endBreak.addEventListener('click', resetTimer);
reset.addEventListener('click', resetTimer);

document.querySelector('.nav img:first-child').addEventListener('click', () => {
    window.electronAPI.closeWindow();
});
document.querySelector('.nav img:last-child').addEventListener('click', () => {
    window.electronAPI.minimizeWindow();
});