//>>function to print number of start/stop frames
// findStart();
// findStops();

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

//if given an index, find the next start/initiation codon and the next stop codons
// //doesn't return anything yet, the magic is in the function still . . .
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

//printAA() prints out the amino acid for a given three-letter codon
function printAA(c){
  print("The codon " + cc + " translates to: " + makeAA(cc).name + ", short name " + makeAA(cc).short + ", represented by the abbreviation " + makeAA(cc).brev + ". The amino acid is " + makeAA(cc).prop + " with an occurance probability of " + makeAA(cc).prob + ".");
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

// findFrames(index) {
//   let ndx = index;
//   let startCodon;
//   let stopCodon;
//   if (startFrame(ndx)) {
//     totalFrames++;
//     startCodon = ndx;
//     // print("start frame at " + startCodon);
//     for (let i = ndx; i < totalChars; i++) {
//       if (stopFrame(i)) {
//         stopCodon = i;
//         print("start frame at: " + startCodon + " -- stop frame at: " + stopCodon);
//         print(covid.substring(startCodon, stopCodon + 2));
//         print(totalFrames); //number of complete frames/lines/nucleotides ?
//         break; //came what we are looking for, get out and move on . . .
//       }
//     }
//   }
//   // print(this.seq[index] + this.seq[index + 1] + this.seq[index + 2]);
//   this.start += 3; //and skip to the next 3 elements
// }
