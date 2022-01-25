let monoSynth;

function setup() {
  var myTextArea = createElement('textarea');
    myTextArea.attribute("rows","2");
    myTextArea.attribute("cols","500");

  createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
  frameRate(24);

  //Random words, Random images
  let able = ['able'];
  let words = ['apple apple', 'going going', 'dog dog'];
  let pix = ['apple.png', 'apple.png', 'apple.png'];
  //let pix2 = ['apple.png', 'apple.png', 'apple.png'];
  let refresh = [0, 1, 2]; //increase the more options you have

  //Random choice: Draw random words, random images
  let choice = random(refresh);
  let pixR = pix[choice];
  //let pixR2 = pix2[choice];
  let word = words[choice];

  //Load words, images
  title = createP(able);
  p = createP(word);
  img = loadImage(pixR);
  //img2 = loadImage(pixR2);

  let cnv = createCanvas(5000, 550);
  cnv.mouseMoved(playSynth);
  monoSynth = new p5.MonoSynth();
}

function draw() {
  background("#000000");

  //Mouse position
  let posX = 10;
  let posY = height/8;
  let fts = 300;
  let pfat = constrain(map(mouseX,0,width,0,999),0,999);
  //let wiwi = wiwi_reverse;
  //let pfat2 = constrain(map(mouseX-1500,0,width,0,999),0,200);

  //Mouse position for images (test)
  //let r1 = map(mouseX, 0, width, 0, height);
  //let r3 = map(mouseX, 0, width, height, 0);
  //let r2 = height - r1;

  //Mouse position > Variable font
  title.style('font-size' ,fts*2.1+'px');
  title.style('font-weight' ,pfat);
  //title.style('font-variation-settings' ,pfat);
  title.style('align', 'center');
  title.position(posX,posY);

  //Mouse position > Variable font
  p.style('font-size' ,fts+'px');
  p.style('font-weight' ,pfat);
  //p.style('font-variation-settings' ,pfat);
  p.style('align', 'center');
  p.position(posX,posY*8);

  //Background Gradation
  //col = color_slider.value();
  //colorMode(HSB);
  // background(col, 82, 100);
  //background(pfat, 82, 100);

  // Displays the image at point (0, height/2) at half size
  //image(img, 0, height / 2, img.width / 2, img.height / 2);
  image(img, posY, 600+(-pfat*12));
  //image(img2, 500, pfat2);

  //image(img, 0, 0, r1, r1);
  //image(img2, 100, 0, r3, r3);
  //image(img, 0, 0, r2, r2);

  //rect(width / 2 + r1 / 2, height / 2, r1, r1);

  //rect(width / 2 - r2 / 2, height / 2, r2, r2);

  // Displays the image at its actual size at point (0,0)
  //image(img, 0, 0);
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
