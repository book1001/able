let wiwi;
function preload() {
  wiwi = loadFont('assets/wiwiVF.ttf');
}

let monoSynth;
function setup() {
  let cnv = createCanvas(1000, 1000);
  cnv.mouseMoved(playSynth);
  background(255);
  //textAlign(CENTER);
  //textFont(wiwi);
  //text('Font Style Normal', 10, 30);
 
  monoSynth = new p5.MonoSynth();
}

function playSynth() {
  userStartAudio();

  let note = random(['Fb4', 'G4']);
  // note velocity (volume, from 0 to 1)
  let velocity = random();
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;

  monoSynth.play(note, velocity, time, dur);
}



function draw() {
  //textSize(value);
  //textStyle(value);
  textFont(wiwi);
  fill(100);
  textSize(12 + (mouseX / width)*72);
  text('Helvetica', 60, 300);
  rect(25, 25, 50, 50);

}
