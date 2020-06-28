let covid;
let sequence = []; //instantiate a new array to hold the sequence
let totalChars;
let cnv;
let index = 0;
let element;
let lastElement;

let rib, nuc, cod1, cod2, cod3, amino;
let splash;
let synth, synth2, rev;

let myFont;


let toggle = false;

//preload() function will not let program prceed until .txt file is loaded . . .
function preload() {
  covid = loadStrings("data/covid19.txt"); //load .txt as array of strings
  myFont = loadFont('data/Datalegreya-Dot.otf');
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
  textSize(20);
  text("Check the console for output.", width / 2, height / 2);

  rib = new Ribosome(sequence, true, 0);

  splash = new Text();

  nuc = new Text();
  nuc.setFades(1, 500, 1, 2500, 0, 2000);
  nuc.setPos(width / 2, height / 2 + 100);
  nuc.setSize(40);

  cod1 = new Text;
  cod2 = new Text;
  cod3 = new Text;
  cod1.setFades(0, 1000, 1, 500, 1, 13000, 0, 500);
  cod2.setFades(0, 1000, 1, 500, 1, 8000, 0, 500);
  cod3.setFades(0, 1000, 1, 500, 1, 3000, 0, 500);

  cod1.setPos(width / 2 - 60, height / 2 + 20);
  cod2.setPos(width / 2, height / 2 + 20);
  cod3.setPos(width / 2 + 60, height / 2 + 20);
  cod1.setSize(60);
  cod2.setSize(60);
  cod3.setSize(60);

  amino = new Text();
  amino.setFades(0, 2000, 1, 1000, 1, 1500, 0, 500);
  amino.setPos(width / 2, height / 2 - 80);
  amino.setSize(80);

  synth = new PSynth(6);
  synth.setEnv(.01, 0.15, .15, 0.1, .1, 0);
  synth.setType('sine');

  synth2 = new PSynth(12);
  synth2.setEnv(3, 0.25, 4, 0.25, 8, 0);
  synth2.setType('sine');

  // rev = new p5.Reverb();


  background(0);
  textFont(myFont);
  // showNucleotides();
}

function mouseClicked() {
  if (toggle === false) {
    setInterval(showNucleotides, 5100);
    toggle = true;
  }
}


function draw() {

  background(0);
  nuc.display();

  cod1.display();
  cod2.display();
  cod3.display();

  amino.display();

  // gene.display();
}

function showNucleotides() {
  print(millis())
  nuc.setText(rib.getNucleotideNow());
  nucleotidePlay(rib.getNucleotideNow());
  nuc.trigger();
  rib.update();
  showCodon();
}

function nucleotidePlay(n) {
  switch (n) {
    case 'G':
      synth.trigger(100);
      break;
    case 'A':
      synth.trigger(200);
      break;
    case 'T':
      synth.trigger(300);
      break;
    case 'C':
      synth.trigger(400);
      break;
  }
}

function codonChordPlay(n) {
  switch (n) {
    //singles
    case 'G':
      synth2.trigger(150);
      break;
    case 'A':
      synth2.trigger(300);
      break;
    case 'T':
      synth2.trigger(450);
      break;
    case 'C':
      synth2.trigger(600);
      break;

      // G-doubles
    case 'GG':
      synth2.trigger(150);
      break;
    case 'GA':
      synth2.trigger(200);
      break;
    case 'GT':
      synth2.trigger(250);
      break;
    case 'GC':
      synth2.trigger(300);
      break;

      //A-doubles
    case 'AG':
      synth2.trigger(300);
      break;
    case 'AA':
      synth2.trigger(350);
      break;
    case 'AT':
      synth2.trigger(400);
      break;
    case 'AC':
      synth2.trigger(450);
      break;

      //T-doubles
    case 'TG':
      synth2.trigger(450);
      break;
    case 'TA':
      synth2.trigger(500);
      break;
    case 'TT':
      synth2.trigger(550);
      break;
    case 'TC':
      synth2.trigger(600);
      break;

      // C-doubles
    case 'CG':
      synth2.trigger(300);
      break;
    case 'CA':
      synth2.trigger(350);
      break;
    case 'CT':
      synth2.trigger(400);
      break;
    case 'CC':
      synth2.trigger(450);
      break;
  }
}

function showCodon() {
  // console.log(rib.getTripletNow())
  // console.log('cod1 is running is:' + cod1.running());
  // console.log('cod2 is running is:' + cod2.running());
  // console.log('cod3 is running is:' + cod3.running());


  if (!cod1.running() && rib.getTripletNow().length === 1) {
    cod1.setText(rib.getTripletNow().charAt(0));
    cod1.trigger();
    codonChordPlay(rib.getTripletNow());
  }
  if (!cod2.running() && rib.getTripletNow().length === 2) {
    cod2.setText(rib.getTripletNow().charAt(1));
    cod2.trigger();
    print(rib.getTripletNow())
    codonChordPlay(rib.getTripletNow());
  }

  if (!cod3.running() && rib.getTripletNow().length === 3) {
    cod3.setText(rib.getTripletNow().charAt(2));
    cod3.trigger();
    codonChordPlay(rib.getTripletNow().charAt(1) + rib.getTripletNow().charAt(2));

    showAmino();
  }

}

function showAmino() {
  amino.setText(makeAA(rib.currentFrame).name);
  amino.trigger();
}
