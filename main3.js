img = "";

function preload(){
    img = loadImage('dog_cat.jpg')
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#fF0000");
    text("Bowl", 320, 365);
    noFill();
    stroke("#FF0000");
    rect(285, 330, 100, 75);
}
