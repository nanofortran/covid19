//sketch loads the data file, parses it into a single array of n-characters
//

let covid;
let sequence = []; //instantiate a new array to hold the sequence

let charW = 10; //width of characters in pixels displayed to the canvas
let charH = 10; //height of characters in pixels diplayed to the canvas

//preload() function will not let program prceed until .txt file is loaded . . .
function preload() {
  covid = loadStrings("data/covid19.txt"); //load .txt as array of strings
}

function setup() {
  createCanvas(1200, 2500); //create a canvas, not really used in this sketch
  covid = join(covid, ""); //join all array members into one string, no spaces
  //console.log(covid);//dubugger, uncomment to see . . .

  //iterate through covid and push each character into sequence
  for (let i = 0; i < covid.length; i++) {
    sequence.push(covid.charAt(i));
  }
  //console.log(sequence);//dubugger, uncomment to see . . .

  console.log("The sequence has " + sequence.length + " elements.");

  textAlign(CENTER, CENTER); //text will be drawn from center of character

  rectMode(CENTER); //draw rectangle from the center of the rectangle
}

function draw() {
  background(0); //set bg color to black

  fill(255); //subsequent objects will be white

  /*
  0 - - - - - > 120 characters * characterWidth
  |
  |   250 rows of 120 characters = 30,000 characters (sequence.length = 29,903)
  |
  v
  */

  textSize(charW);

  for (let y = 0; y < 250; y++) { //
    for (let x = 0; x < 120; x++) { //120 characters across the canvas

      //evaluate character and assign color via switch statement
      let letter = sequence[120 * y + x];
      switch (letter) {
        case 'A':
          fill('red');
          break;
        case 'T':
          fill('green');
          break;
        case 'C':
          fill('blue');
          break;
        case 'G':
          fill('orange');
          break;
        default:
          fill(0);
          break;
      }
      //push the letter down and over by 1/2 of its size to center in grid
      noStroke();
      text(sequence[120 * y + x], x * charW + charW / 2, y * charH + charH / 2 + 1); //+1 for bug

      //grid
      noFill();
      stroke(255, 50);
      rect(x * charW + charW/2, y * charH + charH/2, charW, charH);
    }
    noLoop();
  }
}
