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

//renders codons into Amino Acids, returning an object containing
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




//ribosome class eats codons and shits out amino acids and peptide chains
class Ribosome {
  constructor(seq, dir, off) {
    this.seq = seq; //an array of genes in sequence (teh covid)
    this.dir = dir; //reading forward is TRUE, reading backwards is FALSE
    //offset to begin seeking frames (0, 1, 2)
    // if dir === true, shifts right, if dir === false, shifts left
    this.off = off;
    this.start;
    this.end;
    this.complete = false;
    this.setStartStop();
    this.triplet = [];
    this.currentFrame = "";
    this.currentProtein = "";
    this.currentPeptideChain = [];
  }

  setStartStop() {
    if (this.dir) { //read from head
      this.start = 0 + this.off;
      this.end = this.seq.length;
      // this.end = 1000;
    } else { //read from tail
      this.start = this.seq.length - this.off;
      this.end = 0;
    }
  }

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

  //make a peptide chain given  position of M (methionine) and corresponding STOP
  makePepChain(aa) { //methionine triplet position, stop triplet position
    this.currentPeptideChain = [];
    let reading = false;
    if (aa === 'M' && reading === false) {
      reading = true;
    }

  }

  frameGrabber(m) {
    if (this.triplet.length < 3) {
      this.triplet.push(m);
      this.currentFrame = join(this.triplet, "");
    }
    if (this.triplet.length >= 3) {
      this.triplet.length = [];
    }
    return this.currentFrame;
  }

  printIndex() {
    console.log(this.start + " : " + this.seq[this.start]);
  }

  update() {
    if (!this.complete) {
      // this.printIndex();
      let frame = this.frameGrabber(this.seq[this.start]);
      if (frame.length === 3) { //frame must be complete
        this.currentProtein = makeAA(frame).brev;
        print(this.currentProtein);
        this.makePepChain(this.currentProtein);
        // if (this.currentProtein === 'M') {
        //   let head = this.currentProtein;
        //   let proteinPostion = this.start;
        // }
        // if (this.currentProtein === "STOP") {
        //   let tail = this.currentProtein;
        //   let tailPosition = this.start + 2;
        // }
      }
      this.advance(); //move to next element . . .
    }
  }

  ////////close of class Ribosome
}
