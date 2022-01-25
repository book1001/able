var w = 1920;
var h = 300;

function setup() {

  //Random words, Random images
  let words = ['able', 'apple', 'dog', 'ball', 'clip', 'gun', 'plane'];
  let pix = ['able.png', 'apple.png', 'dog.png', 'ball.png', 'clip.png', 'gun.png', 'plane.png'];
  let site = [
    '<iframe src="able.html" width="100%" height="100"' +
      'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    '<iframe src="apple.html" width="100%" height="100"' +
        'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    '<iframe src="dog.html" width="100%" height="100"' +
        'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    '<iframe src="ball.html" width="100%" height="100"' +
        'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    '<iframe src="clip.html" width="100%" height="100"' +
        'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    '<iframe src="gun.html" width="100%" height="100"' +
        'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    '<iframe src="plane.html" width="100%" height="100"' +
        'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    ];

  let refresh = [0, 1, 2, 3, 4, 5, 6]; //increase the more options you have

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
  let pfat = constrain(map(mouseX,0,width,0,999),0,999);


  //Mouse position > Variable font
  p.style('font-size' ,fts*2+'px');
  p.style('font-weight' ,pfat);
  //p.style('font-variation-settings' ,pfat);
  p.style('align', 'center');
  p.style('text-align', 'center');
  p.position(posX,posY);

  image(img, posY, 1200+(-pfat*12));



}
