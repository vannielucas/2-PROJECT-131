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
    fill("#f0000");
    text("Redstone", 370, 200);
    noFill();
    stroke("#F0000");
    rect(350, 2, 100, 450);
}
