//sketch loads the data file, parses it into a single array of n-characters
//

let covid;
let sequence = []; //instantiate a new array to hold the sequence
let totalChars;
let cnv;
let index = 0;
let element;
let lastElement;

let noteLength = 5

let polySynth, reverb, carrier, modulator;
// let voice;

let voices = [];
let maxVoices = 12;
let currentVoice = 0;

let triple = [];
let triplets = [];

let notes = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

//preload() function will not let program prceed until .txt file is loaded . . .
function preload() {
  covid = loadStrings("data/covid19.txt"); //load .txt as array of strings
}

function setup() {
  cnv = createCanvas(800, 400); //create a canvas, not really used in this sketch
  cnv.parent('data');
  covid = join(covid, ""); //join all array members into one string, no spaces
  //console.log(covid);//dubugger, uncomment to see . . .

  //iterate through covid and push each character into sequence
  for (let i = 0; i < covid.length; i++) {
    sequence.push(covid.charAt(i));
  }

  totalChars = sequence.length;

  for (let i = 0; i < totalChars; i += 3) {
    triplets.push(covid.charAt(i) + covid.charAt(i + 1) + covid.charAt(i + 2));
  }

  console.log("The sequence has " + totalChars + " elements.");

  for (let i = 0; i < maxVoices; i++) {
    // voices.push(new Vox(i));
    voices.push(new p5.MonoSynth()); //push a new MonoSynth into the array of synths
    //set the new 'voice' particulars . . .

    voices[i].oscillator.pan(random(-1, 1));
    voices[i].oscillator.setType('sine');
    voices[i].oscillator.start();
    voices[i].env.set(0.01, 0.2, 0.15, 0.5, 8, 0);
  }

  textAlign(CENTER, CENTER); //text will be drawn from center of character
  rectMode(CENTER); //draw rectangle from the center of the rectangle
  textSize(250);
}

function advance() {
  index++;
  if (index >= totalChars) {
    index = 0;
  }
  // print(index);
}

function mouseClicked() {
  advance();
  // playIt(random(notes));
}

setInterval(advance, 500);


function draw() {

  element = sequence[index];

  if (element != lastElement) {
    background(0);
    fill(255);
    textSize(300);
    text(element, width / 2, height / 2);
    textSize(20);
    text(index, width / 2, height - 20);

    switch (element) {
      case 'A':
        playIt(100); //Hz
        break;
      case 'T':
        playIt(200); //Hz
        break;
      case 'C':
        playIt(300); //Hz
        break;
      case 'G':
        playIt(400); //Hz
        break;
      default:
        break;
    }
    lastElement = element;
  }
}


function playIt(note) {
  currentVoice++;
  if (currentVoice >= maxVoices) {
    currentVoice = 0;
  }
  voices[currentVoice].oscillator.pan(random(-1, 1));
  voices[currentVoice].env.play(voices[currentVoice].oscillator.freq(note));
}
