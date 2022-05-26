img = "";

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

function preload() {
    img = loadImage("bottle.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#00FF00");
    text("Bottle", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 450, 350);
}