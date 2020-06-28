//1. A nucleotide is {G, T, C, A} referred to as 'n' in an array of 'nucleotides'
//2. A 'triplet' is three 'nucleotides' in succession {[n], [n + 1], [n + 2]}, comprising a
//'codon' refered to as a 'c'
//3. An amino acid is a set of 'codon' deliminted by a start codon of

//if given an index, return if the index is the beginning of a start (ATG) frame
function startFrame(i) {
  if (sequence[i] === 'A' && sequence[i + 1] === 'T' && sequence[i + 2] === 'G') {
    return true;
  } else {
    return false;
  }
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

//renders codons/triplets into Amino Acids, returning an object containing
//name, short(name), (a)brev(iation), prop(erty), and prob(ability) of occurance
//there are 25 Amino Acids available
function makeAA(c) {
  let aa = "";

  //phenylalanine
  if (c === "TTT" || c === "TTC") {
    aa = {
      name: "phenylalanine",
      short: "phe",
      brev: "F",
      prop: "nonpolar",
      prob: .03125
    };
  }

  //luecine
  if (c === "TTA" || c === "TTG" || c === "CTT" || c === "CTC" || c === "CTA" || c === "CTG") {
    aa = {
      name: "luecine",
      short: "leu",
      brev: "L",
      prop: "nonpolar",
      prob: .09375
    };
  }

  //isoluecine
  if (c === "ATT" || c === "ATC" || c === "ATA") {
    aa = {
      name: "isoluecine",
      short: "ile",
      brev: "I",
      prop: "nonpolar",
      prob: .046875
    };
  }

  //methionine - initiation site
  if (c === "ATG") {
    aa = {
      name: "methionine",
      short: "met",
      brev: "M",
      prop: "nonpolar",
      prob: .015625
    };
  }

  //valine
  if (c === "GTT" || c === "GTC" || c === "GTA" || c === "GTG") {
    aa = {
      name: "valine",
      short: "val",
      brev: "V",
      prop: "nonpolar",
      prob: .0625
    };
  }

  //serine
  if (c === "TCT" || c === "TCC" || c === "TCA" || c === "TCG" || c === "AGT" || c === "AGC") {
    aa = {
      name: "serine",
      short: "ser",
      brev: "S",
      prop: "polar",
      prob: .0625
    };
  }

  //proline
  if (c === "CCT" || c === "CCC" || c === "CCA" || c === "CCG") {
    aa = {
      name: "proline",
      short: "pro",
      brev: "P",
      prop: "nonpolar",
      prob: .0625
    };
  }

  //threonine
  if (c === "ACT" || c === "ACC" || c === "ACA" || c === "ACG") {
    aa = {
      name: "threonine",
      short: "thr",
      brev: "T",
      prop: "polar",
      prob: .0625
    };
  }

  //alanine
  if (c === "GCT" || c === "GCC" || c === "GCA" || c === "GCG") {
    aa = {
      name: "alanine",
      short: "ala",
      brev: "A",
      prop: "nonpolar",
      prob: .0625
    };
  }

  //tyrosine
  if (c === "TAT" || c === "TAC") {
    aa = {
      name: "tyrosine",
      short: "tyr",
      brev: "Y",
      prop: "nonpolar",
      prob: .03125
    };
  }

  //stop (ochre)
  if (c === "TAA") {
    aa = {
      name: "ochre",
      short: "och",
      brev: "STOP",
      prop: "stop",
      prob: .015625
    };
  }

  //stop (amber)
  if (c === "TAG") {
    aa = {
      name: "amber",
      short: "amb",
      brev: "STOP",
      prop: "stop",
      prob: .015625
    };
  }

  //histadine
  if (c === "CAT" || c === "CAC") {
    aa = {
      name: "histadine",
      short: "his",
      brev: "H",
      prop: "basic",
      prob: .03125
    };
  }

  //glutamine
  if (c === "CAA" || c === "CAG") {
    aa = {
      name: "glutamine",
      short: "gln",
      brev: "Q",
      prop: "polar",
      prob: .03125
    };
  }

  //asparagine
  if (c === "AAT" || c === "AAC") {
    aa = {
      name: "asparagine",
      short: "asn",
      brev: "N",
      prop: "polar",
      prob: .03125
    };
  }

  //lysine
  if (c === "AAA" || c === "AAG") {
    aa = {
      name: "lysine",
      short: "lys",
      brev: "K",
      prop: "basic",
      prob: .015625
    };
  }

  //aspartic acid
  if (c === "GAT" || c === "GAC") {
    aa = {
      name: "aspartic acid",
      short: "asp",
      brev: "D",
      prop: "acidic",
      prob: .015625
    };
  }

  //glutamic acid
  if (c === "GAA" || c === "GAG") {
    aa = {
      name: "glutamic acid",
      short: "glu",
      brev: "D",
      prop: "acidic",
      prob: .015625
    };
  }

  //cysteine
  if (c === "TGT" || c === "TGC") {
    aa = {
      name: "cysteine",
      short: "cys",
      brev: "C",
      prop: "polar",
      prob: .015625
    };
  }

  //stop (opal)
  if (c === "TGA") {
    aa = {
      name: "opal",
      short: "opa",
      brev: "STOP",
      prop: "stop",
      prob: .015625
    };
  }

  //tryptophan
  if (c === "TGG") {
    aa = {
      name: "tryptophan",
      short: "trp",
      brev: "W",
      prop: "nonpolar",
      prob: .015625
    };
  }

  //arginine
  if (c === "CGT" || c === "CGC" || c === "CGA" || c === "CGG" || c === "AGA" || c === "AGG") {
    aa = {
      name: "arginine",
      short: "arg",
      brev: "R",
      prop: "basic",
      prob: .09375
    };
  }

  //serine
  if (c === "AGT" || c === "AGC") {
    aa = {
      name: "serine",
      short: "ser",
      brev: "S",
      prop: "polar",
      prob: .015625
    };
  }

  //glycine
  if (c === "GGT" || c === "GGC" || c === "GGA" || c === "GGG") {
    aa = {
      name: "glycine",
      short: "gly",
      brev: "G",
      prop: "nonpolar",
      prob: .0625
    };
  }

  //return the Amino Acid
  return aa;
}

/*
Ribosome() class progresses in a step-wise manner, moving from nucleotide to nucleotide,
according the rate of advance(). Ribosome collects nucleotides into the 3-element array
[triplet]. Upon receipt of the third nucleotide, the triplet is 'synthesized' into its
corresponding amino acid via the function makeAA(c).

Amino acids are evaluated in a stepwise manner, as they are created, moving from amino acid
to amino acid, until a initialization site ('M') is found, at which point
Ribosome begins to build an array of amino acids in [currentPeptideChain], continuing until
a termination amino acid ('STOP') is encountered.

The Ribosome() contructor takes 3 arguments, the seqence to process (seq), the direction
to begin reading from (dir), and the frame offset (off) to begin the transcription.
*/
class Ribosome {
  constructor(seq, dir, off) {
    this.seq = seq; //an array of genes in sequence (teh covid)
    this.dir = dir; //reading forward is TRUE, reading backwards is FALSE
    this.off = off; //offset to begin seeking frames (0, 1, 2)
    // this.interval = int;
    // if dir === true, shifts right, if dir === false, shifts left

    this.start; //the starting nucleotide to begin transcription
    this.end; //the end point for nucleotide transcription
    this.complete = false; //is the transcription complete, are we done here

    this.setStartStop(); //utility function to set start and stop nucleotides
    this.triplet = [];
    this.currentFrame = "";
    this.currentProtein = "";
    this.currentPeptideChain = [];
    this.pcRead = false; //peptide chain flag
    this.frameRead = true; //frameRead flash
    ///put in a pcRead (boolean)
    //put in frameRead (boolean)
  }

  //setStartStop sets the start and stop points according to this.dir and this.off
  setStartStop() {
    if (this.dir) { //read from top of this.seq adjusting for this.off
      this.start = 0 + this.off;
      this.end = this.seq.length;
      // this.end = 3000; //for debugging
    } else { //read from tail of this.seq qdjusting for this.off
      this.start = this.seq.length - this.off;
      this.end = 0;
    }
  }

  //advance moves through this.seq in a step by step manner, on nucleotide at a time,
  //until this.complete == true.
  advance() {
    if (this.dir) {
      // print('forward');
      this.start++;
      if (this.start > this.end) {
        this.complete = !this.complete;
      }
    } else {
      // print('backwards');
      this.start--;
      if (this.start < this.end) { //the end is 0, so if less than index, complete
        this.complete = !this.complete;
      }
    }
  }

  //makePepChain collects amino acids in an array after a  M (methionine) is received and
  //ends collection when a corresponding STOP amino acid is received
  makePepChain(aa) {

    //if 'M' -- methionine -- amino acid is received, turn on reading (pcPread = true)
    if (aa === 'M') {
      this.pcRead = true; //begin reading/collecting peptide chain
    }

    //if STOP amino acid is received, and a chain is in progress (length != 0)
    if (aa === 'STOP' && this.currentPeptideChain.length != 0) {
      this.pcRead = false; //turn reading off
      this.currentPeptideChain.push(aa); //push the last amino acid in (STOP)
      let len = this.currentPeptideChain.length; //calculate length

      //when peptide chain complete, strip off M and STOP acids and return chain contents
      this.currentPeptideChain = this.currentPeptideChain.slice(1, len - 1);
      //print(this.start + " : " + join(this.currentPeptideChain, ""));
      return join(this.currentPeptideChain, ""); //if done, return the chain as a string
    }

    //if reading, place subsequent amino acids into chain
    if (this.pcRead) {
      this.currentPeptideChain.push(aa);
    }

    //if not being read, clear currentPeptideChain and return NULL
    if (!this.pcRead) {
      this.currentPeptideChain.length = 0;
      return null; //if no reading in process, no chain in the pipeline, return -1 (flag)
    }
  }

  //frameGrabber() takes in nucleotides and returns triplets/codons
  //this is codon grabber really, but I like the analogy to frame grabbers in video softwarez
  frameGrabber(n) {

    //if frameRead is false (default), clear the triplet array and set frameRead = true
    if (!this.frameRead) {
      this.triplet.length = 0;
      this.frameRead = true;
    }

    //if frameRead true, push (n) -- nculeotide -- into triplet array
    if (this.frameRead) {
      if (this.triplet.length < 3) {
        this.triplet.push(n);
      }
    }

    //if triplet array length is 3 or greater
    if (this.triplet.length >= 3) {
      this.frameRead = false; //turn off frameRead (set false) so no more nucs get pushed in
      this.currentFrame = join(this.triplet, ""); //set currentFrame to a joined string of triplet
      return this.currentFrame; //a 3-member codon/triplet is returned
    }

    return null; //if nothing to report, return NULL
  }

  getNucleotideNow() { //utility
    // print("NucNOW " + this.seq[this.start]);
    return this.seq[this.start];
  }

  //returns triplet, even incomplete ones
  getTripletNow() {
    // print("tripNOW " + join(this.triplet, ""));
    return join(this.triplet, "");
  }

  update() {
    if (!this.complete) { //if we have NOT completed the sequence, go ahead and process
      let n = this.getNucleotideNow();
      // print(this.start + ":" + n);
      let frame = this.frameGrabber(n); //feed nucleotides into frame grabber
      if (frame) { //frame must be complete, if so, we have a complete codon/tiplet
        this.currentProtein = makeAA(frame).brev; //transcribe protein from codon
        // print(">>" + this.start + ":" + this.currentProtein);
        let chain = this.makePepChain(this.currentProtein); //get the returned chain
        if (this.currentPeptideChain.length > 1 && !chain) {
          // print(join(this.currentPeptideChain.slice(1), ""));
        }
        // let chain = this.makePepChain(this.currentProtein); //get the returned chain
        if (chain) { //if chain returned is complete
          // print(this.start + ":" + chain);
        }
      }
      this.advance(); //move to next nucleotide . . .
    }
  }
} ////////close of class Ribosome///////////////////////////////////////////////

class Text {
  constructor() {
    this.text = '';
    this.xPos = width / 2;
    this.yPos = height / 2;
    this.size = 20;
    this.fill = 255;
    this.opa = 255;
    this.liner = new Line();
  }

  setText(t) {
    this.text = t;
  }

  setSize(s) {
    this.size = s;
  }

  setPos(x, y) {
    this.xPos = x;
    this.yPos = y;
  }

  setFades() {
    for (let i = 0; i < arguments.length; i++) {
      this.liner.lineArray.push(arguments[i]);
    }
  }

  display() {
    this.opa = 255 * this.liner.update();
    textSize(this.size);
    fill(this.fill, this.opa);
    text(this.text, this.xPos, this.yPos);
  }

  trigger(){
    this.liner.trigger();
  }

  running(){
    return this.liner.running;
  }

}

class Textual {
  constructor(i) {
    this.interval = i; //the interva
    this.text = "";
    this.xPos = 0;
    this.yPos = 0;
    this.size = 0;
    this.startFadeIn; //when to start the fadeIn within this.interval
    this.startFadeOut; //when to start the fadeOut within this.interval
    this.fadeInTime; //at what point is the fadeIn complet within this.interval
    this.fadeOutTime; //at what point is the fadeOut complete within this.interval
    this.fill = 255;
    this.opa = 0;
    this.currentMillis = millis();
    this.pastMillis = 0;
  }

  setText(t) {
    this.text = t;
  }

  setSize(s) {
    this.size = s;
  }

  setPos(x, y) {
    this.xPos = x;
    this.yPos = y;
  }

  setFade(fadeInT, fadeIn, fadeOutT, fadeOut) {
    this.startFadeIn = this.interval * fadeInT;
    this.fadeInTime = this.interval * fadeIn;
    this.startFadeIn = this.interval * fadeOutT;
    this.fadeOutTime = this.interval * fadeOut;
    // print("fade in is " + this.fadeInTime);
    // print("fade out is " + this.fadeOutTime);
  }

  fadeIn() {
    this.opa = map(this.runTime(), 0, this.fadeInTime, 0, 255);
    if (this.opa > 255) {
      this.opa = 255;
    }
    // print(this.opa)
  }

  fadeOut() {
    this.opa = map(this.runTime(), this.fadeInTime, this.interval, 255, 0);
    if (this.opa < 0) {
      this.opa = 0;
    }
  }

  display() {
    if (this.runTime() < this.fadeInTime) {
      this.fadeIn();
      // print("fading in")
    }
    if (this.runTime() > this.fadeInTime) {
      this.fadeOut();
      // print("fading out")

    }
    textSize(this.size);
    fill(this.fill, this.opa);
    text(this.text, this.xPos, this.yPos);
  }

  //return where we are in the timeline of THIS textual eleement (ms)
  runTime() {
    this.currentMillis = millis()
    if (this.currentMillis - this.pastMillis > this.interval) {
      this.pastMillis = millis();
      // print('RESET');
    }
    return this.currentMillis - this.pastMillis;
  }

  setOpa(o) {
    this.opa = o;
  }

  // fade() {
  //   this.opa = map(millis() - pastMillis, 0, interval, 0, interval/2);
  //   print(this.opa)
  // }

}

//Interval provides enveloping functions to time-based events. A construction of
//destination, time duples
//fade1.setFades(0, 500, 1, 100, 0, 3000)
class Fader {
  constructor() {
    this.currentMillis;
    this.startMillis;
    this.pastMillis;
    this.fadeArray = [];
    this.fadeNum = 0;
    this.fadeCount = 0;
    this.fading = false;
    this.value = 0;
    this.fadeTime = 0;
    this.fadeValue;
    this.destValue;
    this.startValue = 0;
  }

  setFade() {
    for (let i = 0; i < arguments.length; i++) {
      this.fadeArray.push(arguments[i]);
    }
    if (this.fadeArray.length % 2 !== 0) {
      console.log(".setFade() values must come in pairs, something is odd.")
    }
    this.fadeNum = this.fadeArray.length / 2;
  }

  update() {
    if (this.fading) {
      this.fade();
      // console.log(this.fadeTime, this.startValue, this.destValue);
    }
    if (!this.fading) {
      this.startMillis = millis();
      // this.fading = true;
    }
  }

  trigger() {
    this.fading = true;
    this.fadeCount = 0;
    this.startMillis = millis();
    // this.destValue = this.fadeArray[this.fadeCount];
    // this.fadeTime = this.fadeArray[this.fadeCount + 1];
    // console.log("new fade count is: " + this.fadeCount);
  }

  fade() {
    // console.log(millis() - this.startMillis);
    if (millis() - this.startMillis > this.fadeArray[this.fadeCount + 1]) {
      this.fadeCount++;
      this.destValue = this.fadeArray[this.fadeCount];
      this.fadeTime = this.fadeArray[this.fadeCount + 1];
      console.log("at the fade: " + (millis() - this.startMillis));
      this.startMillis = millis();
    }
    if (this.fadeCount > this.fadeNum) {
      this.fading = false;
      console.log("in the stop: " + (millis() - this.startMillis));

    }

    // this.value = map(this.runTime(), 0, this.fadeTime, this.startValue, this.destValue);
    // this.value = map(this.runTime(), 0, 5000, 0, 1000);
  }

  //return where we are in the timeline of THIS fader object (ms)
  runTime() {
    // this.currentMillis = millis()
    if (millis() - this.startMillis > this.fadeTime) {
      console.log('end of segment');
      console.log("old fade count is: " + this.fadeCount);

      this.fadeCount++;
      this.destValue = this.fadeArray[this.fadeCount];
      this.fadeTime = this.fadeArray[this.fadeCount + 1];
      this.startMillis = millis();
      console.log("new fade count is: " + this.fadeCount);
    }
    if (this.fadeCount > this.fadeNum) {
      console.log('end of the array');
      this.fading = false;
    }
    return millis() - this.startMillis;
  }

} ///////////////////////
