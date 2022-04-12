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
    text("Quartz", 90, 365);
    noFill();
    stroke("#FF0000");
    rect(45, 1, 125, 1000);
}
