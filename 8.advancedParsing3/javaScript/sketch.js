let covid;
let sequence = []; //instantiate a new array to hold the sequence
let totalChars;
let cnv;
let index = 0;
let element;
let lastElement;

let rib1;
let nucleotide1, codon1, amino1;
let pastMillis;
const interval = 5000;

let totalFrames = 0; //for counting total frmes in a a stem . . .

let fade;

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
  textSize(20);
  text("Check the console for output.", width / 2, height / 2);

  rib1 = new Ribosome(sequence, true, 0, interval);

  nuc = new Textual(interval);
  nuc.setPos(width / 2, height * .75);
  nuc.setSize(40);
  nuc.setFade(.05, .1);

  cod = new Textual(interval);
  cod.setPos(width / 2, height / 2);
  cod.setSize(80);
  cod.setFade(.9, 1);

  fade = new Fader();
  fade.setFade(0, 500, 1, 1200, .5, 1000, 0, 2000);

  pastMillis = 0;
  background(0);
}

function mouseClicked() {
  fade.trigger();
}

function draw() {
  background(0);

  fade.update();


  //handling advancing of the ribosome (if interval has passed, make a change)
  if (millis() - pastMillis > interval) {
    // amino1.setText("");
    //it turns out getNucleotideNow() is ready to go from start = 0 and only
    //changes each advance()
    nuc.setText(rib1.getNucleotideNow());

    //but update must be called to build the triple (bug?) and accurately read
    //getTripleNow() so we must call getUpdate to have triple align in time with
    //getNucleotideNow() . . . other wise it lags one cycle/advance behind
    rib1.update();

    cod.setText(rib1.getTripletNow());

    // if (makeAA(rib1.getTripletNow()).name) {
    //   amino1.setText(rib1.currentProtein.name);
    // }
    // if (rib1.currentFrame) {
    //   print(makeAA(rib1.currentFrame).name);
    //   // amino1.setText(makeAA(rib1.currentFrame).name);
    // }
    rib1.advance(); //advnce ribosome

    pastMillis = millis(); //reset timer
  }

  nuc.display();
  cod.display();
  // print(nucleotide1.opa);

  // codon1.setOpa(map(millis() - pastMillis, 0, interval, 0, 255));
  // codon1.display();
  //
  // if (rib1.getTripletNow().length > 2) {
  //   amino1.setOpa(map(millis() - pastMillis, 0, this.interval, 0, 255));
  //   amino1.display();
  // }


}
