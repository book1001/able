let myFont;
let variable;
function preload() {
  myFont = loadFont("assets/wiwiVF.ttf");
}
function setup() {
  createCanvas(1000, 1000);
  frameRate(24);
  variable = select('.variable');
  p = createP('The Flexible Future of Typography');
}
function draw() {
  background(50);
  strokeWeight(0);
  fill(255);
  textFont(myFont);
  textSize(12 + (mouseX / width)*72);
  variable.style('font-variation-settings', 100+mouseX);
  text("Attention, please.", 50, 200);


  let posX = 0;
  let posY = height/8;

  let fts = 160;


  let pfat = constrain(map(mouseX,0,width,0,999),0,999);

  p.style('font-size' ,fts+'px');
  p.style('font-weight' ,pfat);
  p.style('align', 'center');
  p.position(posX,posY);
}
