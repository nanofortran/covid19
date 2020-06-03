//sketch loads the data file, parses it into a single array of n-characters
//

let covid;
let sequence = []; //instantiate a new array to hold the sequence

let totalChars;
let charW = 10; //width of characters in pixels displayed to the canvas
let charH = 10; //height of characters in pixels diplayed to the canvas
let numCols, numRows;

let cnv;


//preload() function will not let program prceed until .txt file is loaded . . .
function preload() {
  covid = loadStrings("data/covid19.txt"); //load .txt as array of strings
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight); //create a canvas, not really used in this sketch
  cnv.parent('data');
  covid = join(covid, ""); //join all array members into one string, no spaces
  //console.log(covid);//dubugger, uncomment to see . . .

  //iterate through covid and push each character into sequence
  for (let i = 0; i < covid.length; i++) {
    sequence.push(covid.charAt(i));
  }
  //console.log(sequence);//dubugger, uncomment to see . . .

  totalChars = sequence.length;

  console.log("The sequence has " + totalChars + " elements.");

  textAlign(CENTER, CENTER); //text will be drawn from center of character
  rectMode(CENTER); //draw rectangle from the center of the rectangle
  textSize(charW);

  numCols = 100;
  numRows = totalChars / numCols;
  resizeCanvas(numCols * charW, (numRows + 1) * charH);
  colorGrid();
}

function draw() {
  // console.log(frameRate());
}


//one function to draw the colorGrid, otherwise frameRate() plummets to 1 Hz
function colorGrid() {
  for (let y = 0; y < numRows; y++) { //
    for (let x = 0; x < numCols; x++) { //120 characters across the canvas

      //evaluate character and assign color via switch statement
      let letter = sequence[numCols * y + x];
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
      noStroke();

      if (numCols * y + x < totalChars) {
        //push the letter down and over by 1/2 of its size to center in grid and pull down +1 in y
        rect(x * charW + charW / 2, y * charH + charH / 2, charW, charH);
        fill(255, 150);
        text(sequence[numCols * y + x], x * charW + charW / 2, y * charH + charH / 2 + 1);
      }
    }
  }
}
