var w = 1920;
var h = 300;

function setup() {

  //Random words, Random images
  let words = ['able'];
  let pix = ['able.png'];
  let site = [
    '<iframe src="able.html" width="100%" height="100"' +
      'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    ];

  let refresh = [0]; //increase the more options you have

  //Random choice: Draw random words, random images
  let choice = random(refresh);
  let pixR = pix[choice];
  let word = words[choice];
  let chosenWeb = site[choice];

  //Load words, images
  p = createP(word);
  img = loadImage(pixR);

  noCanvas();
    this.embedded = createDiv('').size(w, h);
        this.embedded.html(chosenWeb);

  createCanvas(windowWidth, windowHeight);
  frameRate(24);
}

function draw() {

  //Mouse position
  let posX = 0;
  let posY = -7.4;
  let fts = 300;
  let pfat = constrain(map(mouseX,0,width,0,200),0,200);

  //Mouse position > Variable font
  p.style('margin-top', 61+'px');
  p.style('font-size' ,fts*2+'px');
  p.style('font-weight' ,pfat);
  //p.style('font-variation-settings' ,pfat);
  p.style('align', 'center');
  p.style('text-align', 'center');
  p.position(posX,posY);

  image(img, posY, 1200+(-pfat*12));
}
