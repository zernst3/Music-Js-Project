const conductor = new BandJS();

conductor.setTimeSignature(4, 4);
conductor.setTempo(120);

let rightHand = conductor.createInstrument("sine", "oscillators");
let leftHand = conductor.createInstrument("triangle", "oscillators");
let highHat = conductor.createInstrument("white", "noises");
let snare = conductor.createInstrument("red", "noises");
highHat.setVolume(10);

// =========================================== Phrase 1

// Instrument

highHat.rest("whole").rest("whole").rest("whole").rest("whole");
snare
  .rest("whole")
  .rest("whole")
  .rest("whole")
  .rest("half")
  .rest("eighth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth");

leftHand
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "B3")
  .note("half", "G#3")
  .rest("eighth");

rightHand
  .rest("half")
  .rest("eighth")
  .note("eighth", "G#4")
  .note("eighth", "C#5")
  .note("quarter", "D#5");

leftHand
  .note("eighth", "B2")
  .note("eighth", "B2")
  .note("eighth", "D#3")
  .note("half", "B2")
  .rest("eighth");

rightHand
  .rest("half")
  .note("eighth", "B4")
  .note("eighth", "C#5")
  .note("quarter", "A#4");

rightHand.rest("whole").rest("half").rest("quarter").rest("eighth");

leftHand
  .note("eighth", "D#3")
  .note("eighth", "D#3")
  .note("eighth", "F#3")
  .note("half", "D#3")
  .note("eighth", "B2");

leftHand
  .note("eighth", "D#3")
  .note("eighth", "D#3")
  .note("eighth", "F#3")
  .note("half", "D#3")
  .rest("eighth");

// =========================================== Phrase 2

// Drums

highHat
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth");

snare
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth");

// Instrument

leftHand
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "B3")
  .note("half", "G#3")
  .rest("eighth");

rightHand
  .rest("half")
  .rest("eighth")
  .note("eighth", "G#4")
  .note("eighth", "C#5")
  .note("quarter", "D#5");

leftHand
  .note("eighth", "B2")
  .note("eighth", "B2")
  .note("eighth", "D#3")
  .note("half", "B2")
  .rest("eighth");

rightHand
  .rest("half")
  .note("eighth", "B4")
  .note("eighth", "C#5")
  .note("quarter", "A#4");

rightHand.rest("whole").rest("half").rest("quarter").rest("eighth");

leftHand
  .note("eighth", "D#3")
  .note("eighth", "D#3")
  .note("eighth", "F#3")
  .note("half", "D#3")
  .note("eighth", "B2");

leftHand
  .note("eighth", "D#3")
  .note("eighth", "D#3")
  .note("eighth", "F#3")
  .note("half", "D#3")
  .rest("eighth");

// =========================================== Phrase 3

// Drums

highHat
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth");

snare
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth");

// Instrument

leftHand
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "B3")
  .note("half", "G#3")
  .rest("eighth");

rightHand
  .rest("half")
  .rest("eighth")
  .note("eighth", "G#4")
  .note("eighth", "C#5")
  .note("quarter", "D#5");

leftHand
  .note("eighth", "B2")
  .note("eighth", "B2")
  .note("eighth", "D#3")
  .note("half", "B2")
  .rest("eighth");

rightHand
  .rest("half")
  .note("eighth", "B4")
  .note("eighth", "C#5")
  .note("quarter", "A#4");

rightHand
  .rest("half")
  .rest("quarter")
  .rest("eighth")
  .note("half", "F#4")
  .note("quarter", "B4")
  .note("quarter", "A#4");

leftHand
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3");

// =========================================== Phrase 3

// Drums

highHat
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth");

snare
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth");

// Instrument

rightHand
  .note("half", "A#4")
  .note("quarter", "A#4")
  .note("eighth", "B4")
  .note("half", "C#5")
  .rest("eighth")
  .note("eighth", "D#5")
  .note("eighth", "C#5")
  .note("quarter", "B4")
  .note("half", "B4")
  .note("quarter", "A#4")
  .note("eighth", "B4")
  .note("half", "G#4")
  .rest("quarter")
  .rest("eighth")
  .note("quarter", "C#5");

leftHand
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")

  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "G#3");

// =========================================== Phrase 4

// Drums

highHat
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth");

snare
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth");

// Instrument

rightHand
  .note("whole", "A#4")
  .note("half", "A#4")
  .note("half", "B4")
  .note("whole", "C#5")
  .rest("whole");

leftHand
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")
  .note("eighth", "F#3")

  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3")
  .note("eighth", "E3");

// =========================================== Phrase 5

// Drums

highHat
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth")
  .note("sixteenth")
  .rest("sixteenth");

snare
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth")
  .rest("quarter")
  .note("sixteenth")
  .rest("sixteenth")
  .rest("eighth");

// Instrument

rightHand.rest("whole").rest("whole").rest("whole").rest("whole");

leftHand
  .note("eighth", "G#3")
  .note("eighth", "G#3")
  .note("eighth", "B3")
  .note("half", "G#3")
  .rest("eighth");

leftHand
  .note("eighth", "B2")
  .note("eighth", "B2")
  .note("eighth", "D#3")
  .note("half", "B2")
  .rest("eighth");

leftHand
  .note("eighth", "D#3")
  .note("eighth", "D#3")
  .note("eighth", "F#3")
  .note("half", "D#3")
  .note("eighth", "B2");

leftHand
  .note("eighth", "D#3")
  .note("eighth", "D#3")
  .note("eighth", "F#3")
  .note("half", "D#3")
  .rest("eighth");

const player = conductor.finish();

const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
  player.play();
});

const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", () => {
  player.pause();
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => {
  player.stop();
});
