img = "";

function preload(){
    img = loadImage('Minecraft hmm.jpg')
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 500);
    fill("#fF0000");
    text("Coal", 600, 365);
    text("Coal", 455, 365);
    noFill();
    stroke("#FF0000");
    rect(590, 1, 50, 505);
    rect(450, 1, 50, 505);
}
