img = "";

function preload(){
    img = loadImage('Minecraft hmm.jpg')
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#fF0000");
    text("Diamond", 310, 365);
    noFill();
    stroke("#FF0000");
    rect(310, 1, 50, 1000);
    text("Diamond", 2, 365);
    rect(2, 1, 50, 1000);
    
}
