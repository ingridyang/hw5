function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (var i = 10; i <= width/2; i +=10) {
  	var startX = 200 - i;
  	var startY = i;
    var stopX = 200 + i;
    var stopY = i;
    line(startX, startY, stopX, stopY);

  }
  
  for (var i = 10; i < height; i += 10) {
  	line(i, height/2+i, 400-i, height/2+i);
  }
}
