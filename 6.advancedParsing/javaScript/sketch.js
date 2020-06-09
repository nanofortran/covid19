//parsing for START start (ATG) and stop CODONS (TGA. TGG. TAG)
//and printng out the stems/strings/nucleotidews/?
//TODO: convert to amino acids . . .

//audio has been removed for this sketch . . .

//base on: https://en.wikipedia.org/wiki/DNA_codon_table

let covid;
let sequence = []; //instantiate a new array to hold the sequence
let totalChars;
let cnv;
let index = 0;
let element;
let lastElement;

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
  console.log("The sequence has " + totalChars + " elements.");

  textAlign(CENTER, CENTER); //text will be drawn from center of character
  rectMode(CENTER); //draw rectangle from the center of the rectangle
  textSize(20);
  text("Check the console for output.", width/2, height/2);

}

//Find ATG codons (initiation sites)
function findStart() {
  let count = 0;
  for (let i = 0; i < totalChars; i++) {
    if (sequence[i] === 'A' && sequence[i + 1] === 'T' && sequence[i + 2] === 'G') {
      // print("Starting CODON found at sequence position: " + i);
      count++
    }
  }
  print("Found " + count + " STARTING codons.");
}

//if given an index, return if the index is the beginning of a start (ATG) frame
function startFrame(i) {
  if (sequence[i] === 'A' && sequence[i + 1] === 'T' && sequence[i + 2] === 'G') {
    return true;
  } else {
    return false;
  }
}

//Find TGA, TAG, and TAA codons
function findStops() {
  let count = 0;
  for (let i = 0; i < totalChars; i++) {
    if (sequence[i] === 'T' && sequence[i + 1] === 'G' && sequence[i + 2] === 'A') {
      // print("Stoping CODON (opal) found at sequence position: " + i + " " + sequence[i] + sequence[i + 1] + sequence[i + 2]);
      count++;
    }
    if (sequence[i] === 'T' && sequence[i + 1] === 'A' && sequence[i + 2] === 'G') {
      // print("Stoping CODON (amber) found at sequence position: " + i + " " + sequence[i] + sequence[i + 1] + sequence[i + 2]);
      count++;
    }

    if (sequence[i] === 'T' && sequence[i + 1] === 'A' && sequence[i + 2] === 'A') {
      // print("Stoping CODON (ochre) found at sequence position: " + i + " " + sequence[i] + sequence[i + 1] + sequence[i + 2]);
      count++;
    }
  }
  print("Found " + count + " STOPPING codons.")
}

//if given an index, return TRUE if the index is the beginning of a stop (TAG, TGA, TAA) frame
function stopFrame(i) {
  let stop = false;
  if (sequence[i] === 'T' && sequence[i + 1] === 'G' && sequence[i + 2] === 'A') {
    stop = true;
  }
  if (sequence[i] === 'T' && sequence[i + 1] === 'A' && sequence[i + 2] === 'G') {
    stop = true;
  }
  if (sequence[i] === 'T' && sequence[i + 1] === 'A' && sequence[i + 2] === 'A') {
    stop = true;
  }
  return stop;
}

//if given an index, find the next start/initiation codon and the next stop codons
//doesn't return anything yet, the magic is in the function still . . .
function findFrames(index) {
  let ndx = index;
  let startCodon;
  let stopCodon;
  if (startFrame(ndx)) {
    totalFrames++;
    startCodon = ndx;
    // print("start frame at " + startCodon);
    for (let i = ndx; i < totalChars; i += 3) {
      if (stopFrame(i)) {
        stopCodon = i;
        print("start frame at: " + startCodon + " -- stop frame at: " + stopCodon);
        print(covid.substring(startCodon, stopCodon + 3));
        print(totalFrames); //number of complete frames/lines/nucleotides ?
        break;//came what we are looking for, get out and move on . . .
      }
    }
  }
}

function draw() {
  //>>function to print number of start/stop frames
  // findStart();
  // findStops();

  //>>startFrame() is fed an index and return true if index is beginning of START frame

  // let starts = 0;
  // for (let i = 0; i < totalChars; i++) {
  //   if (startFrame(i)) {
  //     starts++;
  //   }
  // }
  // print(starts + " START frames.");
  //

  //>>stopFrame() is fed an index and return true if index is beginning of a STOP frame

  // let stops = 0;
  // for (let i = 0; i < totalChars; i++) {
  //   if (stopFrame(i)) {
  //     stops++;
  //   }
  // }
  // print(stops + " STOP frames.");

  for (let i = 0; i < totalChars; i++) {
    findFrames(i);
  }

  noLoop();
}
