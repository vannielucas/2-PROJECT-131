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
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );
}
function myfunction1(){
    window.open("index.html");
}
function myfunction2(){
    window.open("Page2.html");
}
function myfunction3(){
    window.open("Page3.html");
}
function myfunction4(){
    window.open("Page4.html");
}
function myfunction5(){
    window.open("Page5.html");
}
function myfunction6(){
    window.open("Page6.html");
}
function myfunction7(){
    window.open("Page7.html");
}
function myfunction8(){
    window.open("Page8.html");
}
function myfunction9(){
    window.open("Page9.html");
}
function myfunction10(){
    window.open("Page10.html");
}