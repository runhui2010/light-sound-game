const cluePauseTime = 333;
const nextClueWaitTime = 1000;
var clueHoldTime = 1000;
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 1;
var guessCounter = 0;
var strike = 0;
var time = 10;
var timer = 0;

function startGame() {
  time = 10;
  progress = 0;
  strike = 0;
  pattern = [];
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  generatePattern();
  console.log(pattern);
  playClueSequence();
}
function generatePattern() {
  for (let i = 0; i < 8; i++) {
    pattern.push(Math.floor(Math.random() * 6 + 1));
  }
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 580,
  6: 800
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  context.resume();
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  clearTimer();
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    clueHoldTime -= 50;
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  setTimeout(startTime, delay);

  clueHoldTime = 1000;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function startTime() {
  timer = setInterval(countDown, 1000);
}
function countDown() {
  time--;
  document.getElementById("timer").innerHTML = time.toString();
  if (time == -1) {
    clearTimer();
    if (guessCounter < progress + 1) {
      loseGame();
    }
  }
}
function clearTimer() {
  clearInterval(timer);
  time = 10;
  document.getElementById("timer").innerHTML = time.toString();
}
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Game Over. You won.");
}
function lightImg(btn) {
  document.getElementById("button" + btn).classList.add("img");
  setTimeout(clearImg, 1000, btn);
}
function clearImg(btn) {
  document.getElementById("button" + btn).classList.remove("img");
}
function guess(btn) {
  lightImg(btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (guessCounter == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        if (guessCounter == progress) {
        }
        clearTimer();
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if (strike != 2) {
      strike++;
      alert(3 - strike + " more strike");
      playClueSequence();
    } else {
      loseGame();
    }
  }
}
