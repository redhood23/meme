let angle1 = 1000; /* changes the motion of the circles on the sides*/
let angle2 = 1000; /* changes the motion of the circles on the sides */
let scalar = 80;  /* changes the size of the circles */     

function setup() {
  var cnv = createCanvas(710, 400);
    cnv.parent = ('content');
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(20); /* changes the size of the background */ 

  let ang1 = radians(angle1);
  let ang2 = radians(angle2);

  let x1 = width / 4 + scalar * cos(ang1);/* changes the sides of the circles */ 
  let x2 = width / 6 + scalar * cos(ang2);/* changes the sides of the circles */ 
  
  let y1 = height / 3 + scalar * sin(ang1);/* changes the sides of the circles */
  let y2 = height / 8 + scalar * sin(ang2);/* changes the sides of the circles */

  fill(255);
  rect(width * 0.5, height * 0.5, 140, 140);

  fill(0, 102, 153);
  ellipse(x1, height * 0.5 - 120, scalar, scalar);
  ellipse(x2, height * 0.5 + 120, scalar, scalar);

  fill(255, 204, 0);
  ellipse(width * 0.5 - 120, y1, scalar, scalar);
  ellipse(width * 0.5 + 120, y2, scalar, scalar);

  angle1 += 2;
  angle2 += 3;
}
