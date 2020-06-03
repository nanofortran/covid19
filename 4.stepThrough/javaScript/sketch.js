//sketch loads the data file, parses it into a single array of n-characters
//

let covid;
let sequence = []; //instantiate a new array to hold the sequence
let totalChars;
let cnv;
let index = 0;
let element;
let lastElement;

let polySynth, reverb;


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

  console.log("The sequence has " + totalChars + " elements.");

  textAlign(CENTER, CENTER); //text will be drawn from center of character
  rectMode(CENTER); //draw rectangle from the center of the rectangle
  textSize(250);
  setInterval(advance, 250);


  polySynth = new p5.PolySynth();
  polySynth.setADSR(.25, 1, 1);
  reverb = new p5.Reverb();
  reverb.drywet(1);
  reverb.process(polySynth, 3, 2);
  // reverb.wet(.2);
}

function draw() {

  if (element != lastElement) {
    background(0);
    fill(255);
    textSize(300);
    text(element, width / 2, height / 2);
    textSize(20);
    text(index, width / 2, height - 20);

    switch (element) {
      case 'A':
        polySynth.play('D4', .5, 0, .25);
        break;
      case 'T':
        polySynth.play('A5', .5, 0, .25);
        break;
      case 'C':
        polySynth.play('E5', .5, 0, .25);
        break;
      case 'G':
        polySynth.play('Bb4', .5, 0, .25);
        break;
      default:
        fill(0);
        break;
    }
    lastElement = element;
  }
}

function advance() {
  // console.log('advance');
  element = sequence[index];
  index++;
  if (index > totalChars) {
    index = 0;
  }
}
