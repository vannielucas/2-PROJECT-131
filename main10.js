img = "";

function preload(){
    img = loadImage('Apple.png')
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#fF0000");
    text("FAT APPLE", 300, 20);
    noFill();
    stroke("#FF0000");
    rect(5, 5, 650, 410);
}
