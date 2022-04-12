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
    fill("#FF0000");
    text("cat", 310, 85);
    noFill();
    stroke("#FF0000");
    rect(290, 70, 300, 400 );
}
