let covid;
let sequence = []; //instantiate a new array to hold the sequence
let totalChars;
let cnv;
let index = 0;
let element;
let lastElement;

let rib1;


let totalFrames = 0; //for counting total frmes in a a stem . . .

//preload() function will not let program prceed until .txt file is loaded . . .
function preload() {
  covid = loadStrings("data/covid19.txt"); //load .txt as array of strings

}

function setup() {
  cnv = createCanvas(400, 400); //create a canvas, not really used in this sketch
  cnv.parent('data');
  covid = join(covid, ""); //join all array members into one string, no spaces
  //console.log(covid);//dubugger, uncomment to see . . .

  //iterate through covid and push each character into sequence
  for (let i = 0; i < covid.length; i++) {
    sequence.push(covid.charAt(i));
  }

  totalChars = sequence.length;

  rib1 = new Ribosome(sequence, true, 0);

  console.log("The sequence has " + totalChars + " elements.");

  textAlign(CENTER, CENTER); //text will be drawn from center of character
  rectMode(CENTER); //draw rectangle from the center of the rectangle
  textSize(20);
  text("Check the console for output.", width / 2, height / 2);


}

// //if given an index, find the next start/initiation codon and the next stop codons
// //doesn't return anything yet, the magic is in the function still . . .
// function findFrames(index) {
//   let ndx = index;
//   let startCodon = 0;
//   let stopCodon = 0;
//   if (startFrame(ndx)) {
//     totalFrames++;
//     startCodon = ndx;
//     // print("start frame at " + startCodon);
//     for (let i = ndx; i < totalChars; i += 3) {
//       if (stopFrame(i)) {
//         stopCodon = i;
//         print("start frame at: " + startCodon + " -- stop frame at: " + stopCodon);
//         print(covid.substring(startCodon, stopCodon + 3));
//         print(totalFrames); //number of complete frames/lines/nucleotides ?
//         break; //came what we are looking for, get out and move on . . .
//       }
//     }
//   }
// }


setInterval(doIt, 20);

function doIt() {
  if (rib1) {
    rib1.update();
  }
}

function draw() {
  // noLoop();
}
