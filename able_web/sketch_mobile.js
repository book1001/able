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
  let fts = 200;
  let pfat = constrain(map(mouseX,0,width,0,200),0,200);

  //Mouse position > Variable font
  p.style('margin-top', 61+'px');
  p.style('font-size' ,fts*2+'px');
  p.style('font-weight' ,pfat);
  //p.style('font-variation-settings' ,pfat);
  p.style('align', 'center');
  p.style('text-align', 'center');
  p.position(posX,posY+100);

  image(img, posY, 1200+(-pfat*12));
}




var px = 50; // Position x and y
var py = 50;
var vx = 0.0; // Velocity x and y
var vy = 0.0;
var updateRate = 1/60; // Sensor refresh rate

function getAccel(){
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
       // Add a listener to get smartphone orientation
           // in the alpha-beta-gamma axes (units in degrees)
            window.addEventListener('deviceorientation',(event) => {
                // Expose each orientation angle in a more readable way
                rotation_degrees = event.alpha;
                frontToBack_degrees = event.beta;
                leftToRight_degrees = event.gamma;

                // Update velocity according to how tilted the phone is
                // Since phones are narrower than they are long, double the increase to the x velocity
                vx = vx + leftToRight_degrees * updateRate*2;
                vy = vy + frontToBack_degrees * updateRate;

                // Update position and clip it to bounds
                px = px + vx*.5;
                if (px > 98 || px < 0){
                    px = Math.max(0, Math.min(98, px)) // Clip px between 0-98
                    vx = 0;
                }

                py = py + vy*.5;
                if (py > 98 || py < 0){
                    py = Math.max(0, Math.min(98, py)) // Clip py between 0-98
                    vy = 0;
                }



                dot = document.getElementsByClassName("indicatorDot")[0]
                dot.setAttribute('style', "left:" + (px) + "%;" +
                                              "top:" + (py) + "%;");

            });
        }
    });
}
