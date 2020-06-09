//sketch loads the data file, parses it into a single array of n-characters
//

let covid;
let sequence = []; //instantiate a new array to hold the sequence, maybe rename?
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
  // updated to make codons rather than a sequence, covid is the var for dna, sequence is container array
  for (i = 2; i < covid.length; i += 3) {
    sequence.push(covid.charAt(i - 2) + covid.charAt(i - 1) + covid.charAt(i))
  }

  totalChars = sequence.length;

  console.log("The sequence has " + totalChars + " elements.");

  textAlign(CENTER, CENTER); //text will be drawn from center of character
  rectMode(CENTER); //draw rectangle from the center of the rectangle
  textSize(250);
  setInterval(advance, 1500);


  polySynth = new p5.PolySynth();
  polySynth.setADSR(.25, 1, 5);
  reverb = new p5.Reverb();
  reverb.drywet(1);
  reverb.process(polySynth, 3, 2);
  // reverb.wet(.2);
}

function draw() {

  if (element != lastElement) {
    background(0);


    //this needs to play codons not sequence
    for (i = 0; i < element.length; i++) {
      switch (element) {
        //Ala
        case 'GCT':
        case 'GCC':
        case 'GCA':
        case 'GCG':
          fill(255);
          polySynth.play('C3', .5, 0, .25);
          break;
          //Arg
        case 'CGT':
        case 'CGC':
        case 'CGA':
        case 'CGG':
        case 'AGA':
        case 'AGG':
          fill(255);
          polySynth.play('D3', .5, 0, .25);
          break;
          //Asn
        case 'AAT':
        case 'AAC':
          fill(255);
          polySynth.play('E3', .5, 0, .25);
          break;
          //Asp
        case 'GAT':
        case 'GAC':
          fill(255);
          polySynth.play('F3', .5, 0, .25);
          break;
          //Cys
        case 'TGT':
        case 'TGC':
          fill(255);
          polySynth.play('G3', .5, 0, .25);
          break;
          //Gln
        case 'CAA':
        case 'CAG':
          fill(255);
          polySynth.play('A3', .5, 0, .25);
          break;
          //Glu
        case 'GAA':
        case 'GAG':
          fill(255);
          polySynth.play('B3', .5, 0, .25);
          break;
          //Gly
        case 'GGT':
        case 'GGC':
        case 'GGA':
        case 'GGG':
          fill(255);
          polySynth.play('Db3', .5, 0, .25);
          break;
          //His
        case 'CAT':
        case 'CAC':
          fill(255);
          polySynth.play('Eb3', .5, 0, .25);
          break;
          //Ile
        case 'ATT':
        case 'ATC':
        case 'ATA':
          fill(255);
          polySynth.play('Gb3', .5, 0, .25);
          break;
          //START/MET
        case 'ATG':
          fill('red');
          polySynth.play('C4', .5, 0, .25);
          break;
          //Leu
        case 'TTA':
        case 'TTG':
        case 'CTT':
        case 'CTC':
        case 'CTA':
        case 'CTG':
          fill(255);
          polySynth.play('D4', .5, 0, .25);
          break;
          //Lys
        case 'AAA':
        case 'AAG':
          fill(255);
          polySynth.play('E4', .5, 0, .25);
          break;
          //Phe
        case 'TTT':
        case 'TTC':
          fill(255);
          polySynth.play('F4', .5, 0, .25);
          break;
          //Pro
          fill(255);
        case 'CCT':
        case 'CCC':
        case 'CCA':
        case 'CCG':
          fill(255);
          polySynth.play('G4', .5, 0, .25);
          break;
          //Ser
        case 'TCT':
        case 'TCC':
        case 'TCA':
        case 'TCG':
        case 'AGT':
        case 'AGC':
          fill(255);
          polySynth.play('A4', .5, 0, .25);
          break;
          //Thr
        case 'ACT':
        case 'ACC':
        case 'ACA':
        case 'ACG':
          fill(255);
          polySynth.play('B4', .5, 0, .25);
          break;
          //Trp
        case 'TGG':
          polySynth.play('Db4', .5, 0, .25);
          break;
          //Tyr
        case 'TAT':
        case 'TAC':
          fill(255);
          polySynth.play('Eb4', .5, 0, .25);
          break;
          //Val
        case 'GTT':
        case 'GTC':
        case 'GTA':
        case 'GTG':
          fill(255);
          polySynth.play('Gb4', .5, 0, .25);
          break;
          //Stop bit
        case 'TAA':
        case 'TGA':
        case 'TAG':
          fill('blue');
          break;
        default:
          fill(0);
          break;
      }
    }
    lastElement = element;
  }
  textSize(300);
  text(element, width / 2, height / 2);
  // fill(255);
  textSize(20);
  text(index, width / 2, height - 20);
}
// advances the sequ4ence by one element
//updated to go three at a time
function advance() {
  // console.log('advance');
  element = sequence[index];
  index++;
  if (index > totalChars) {
    index = 0;
  }
}
