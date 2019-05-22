//let img;
//
////let input, button, greeting;
//
//function setup(){
//    
//   var cnv = createCanvas(windowWidth,windowHeight);
//    cnv.parent ('content');
//    img = loadImage('assets/img/woodyfall.jpg');
//}
//
// 
//
//
//
//function draw(){
//    
//
//    image(img,0,0,width,height);
//
//
//}
//
//var rectWidth;
//var numLetters= 0;
//
//  let img;
//
//function setup(){
//
//   var cnv = createCanvas(windowWidth,windowHeight);
//    cnv.parent ('content');
//    img = loadImage('assets/img/woodyfall.jpg'); 
////function setup() {
////  createCanvas(720, 400);
////  noStroke();
////  background(230);
//  rectWidth = width/4;
//
//
//  rectWidth = width/4;
//
//}

//function draw() {
//  // keep draw() here to continue looping while waiting for keys 
//     image(img,0,0,width,height);
//     text(numLetters, 10,100);
//
//
//}
//
//function keyPressed() {
//  var keyIndex = -1;
//  if (key >= 'a' && key <= 'z') {
//    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
//    numLetters++;
//      //console.log(numLetters);
//  }
//  if (keyIndex == -1) {
//    // If it's not a letter key, clear the screen
//    numLetters = 0;
//    background(230);
//  } else { 
//    // It's a letter key, fill a rectangle
//     randFill_r = Math.floor(Math.random() * 255 + 1);
//     randFill_g = Math.floor(Math.random() * 255 + 1);
//     randFill_b = Math.floor(Math.random() * 255 + 1);
//     fill(randFill_r,randFill_g,randFill_b);
//    fill(0);
//    textSize(20);
//    var x = map(keyIndex, 0, 25, 0, width - rectWidth);
//    var spacing = 10;
////    rect(x, 0, rectWidth, height);
//    text(key, numLetters * spacing, height - 20);
//  }
// 
//}
    
//   let input, button, greeting;
//
////function setup() {
//////  // create canvas
//////  createCanvas(710, 400);
//
//  
//    input = createInput();
//  input.position(20, 65);
//
//  button = createButton('submit');
//  button.position(input.x + input.width, 65);
//  button.mousePressed(greet);
//
//  greeting = createElement('h2', 'what is your name?');
//  greeting.position(20, 5);
//
//  textAlign(CENTER);
//  textSize(50);
//}
//
//function greet() {
//  const name = input.value();
//  greeting.html('hello ' + name + '!');
//  input.value('');
//
//  for (let i = 0; i < 200; i++) {
//    push();
//    fill(random(255), 255, 255);
//    translate(random(width), random(height));
//    rotate(random(2 * PI));
//    text(name, 0, 0);
//    pop();
//  }
//} 
//    
//    
//    
//

let input, button, greeting, label, butterfly, img;
let value = 0;

function setup() {
    
  img = loadImage('assets/img/woodyfall.jpg');
  createCanvas(910, 500);

  input = createInput();
  input.position(250, 370);

  button = createButton('submit');
  button.position(input.x + input.width, 370);
  button.mousePressed(greet);
    
  greeting = createElement('h2', 'I Dont Want To ______?');
  greeting.position(285, 320);

    
  label = 'Toxic People';
    
  butterfly= 'You';
    

  textAlign(CENTER);
  textStyle(BOLD);
  textSize(25);
  
  textFont('Times New Roman')
}

function draw() {
  background(img);
  fill(value);
  text(label, 170,220);
  text(butterfly, 560,65)
  }


function greet() {
  const name = input.value();
  greeting.html('I dont want to ' + name + '?');
  input.value('');
}

function keyPressed() {
   if (event.keyCode === 13) {
       greet();
    }
  
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
