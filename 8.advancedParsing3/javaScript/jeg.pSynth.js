class PSynth {

  constructor(mv) {
    this.maxVoices = mv;
    this.currentVoice = 0
    this.voices = [];
    // this.rev = new p5.Reverb
    // this.rev.drywet(.5);
    this.init();
  }

  init() {
    for (let i = 0; i < this.maxVoices; i++) {
      this.voices.push(new p5.MonoSynth());
      this.voices[i].oscillator.pan(random(-1, 1));
      this.voices[i].oscillator.setType('sine');
      this.voices[i].oscillator.start();
      this.voices[i].env.set(0.01, 0.2, 0.15, 0.5, 4, 0);
      // this.rev.process(this.voices[i], 5, 50);

    }
  }

  trigger(n) {
    this.currentVoice++;
    if (this.currentVoice >= this.maxVoices) {
      this.currentVoice = 0;
    }
    this.voices[this.currentVoice].oscillator.pan(random(-1, 1), 4);
    this.voices[this.currentVoice].env.play(this.voices[this.currentVoice].oscillator.freq(n));
  }

  setEnv(at, al, dt, dl, rt, rl ){
      for (let i = 0; i < this.maxVoices; i++) {
        this.voices[i].env.set(at, al, dt, dl, rt, rl);
      }
  }

  setType(t){
    for (let i = 0; i < this.maxVoices; i++) {
      this.voices[i].oscillator.setType(t);
    }
  }

}
