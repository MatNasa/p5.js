function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(330, 50, 80);

  circle(50, 250, 80);

  circle(590, 250, 80);

  circle(330, 430, 80);
}

function take_snapshot(){    
  save('student_name.png');
}