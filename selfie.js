let img;

function setup(){
    
   var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent ('content');
    img = loadImage('assets/img/forest.JPG');
    

 
}



function draw(){
    
//    background(119,119,119);
    image(img,0,0,width,height);
//    translate(width/3,height/3); /* changes the placement of the circle */
//    fill(255,200,160);
//    ellipse(0,0,100,140); /* changes the size of the circles */
//    fill(255);
//    push();
//    translate(-20,-15);
//    ellipse(0,0,15,10);
//    pop();
//    push();
//    translate(-20,-15);
//    ellipse(0,0,15,10);
//    pop();
//    push();
//    translate(-60,-57);
//    ellipse(0,0,75,40);
//    pop();
//    push();
    
    
//    head
 
push();
    translate(width/3, height/3);
    rotate(frameCount / 1000);


    
    
//      translate(width/8,height/8);
//    fill(255,200,160);
//    ellipse(0,0,100,140);
//    fill(255);
//    push();
//    translate(-20,-15);
//    ellipse(0,0,15,10);
//    pop();
//    push();
//    translate(-20,-15);
//    ellipse(0,0,15,10);
//    pop();
//    push();
//    translate(-60,-57);
//    ellipse(0,0,75,40);
//    pop();
//    push();
    
    
//     translate(width/8,height/8);
//    fill(255,200,160);
//    ellipse(0,0,100,140);
//    fill(255);
//    push();
//    translate(-20,-15);
//    ellipse(0,0,15,10);
//    pop();
//    push();
//    translate(-20,-15);
//    ellipse(0,0,15,10);
//    pop();
//    push();
//    translate(-60,-57);
//    ellipse(0,0,75,40);
//    pop();
//    push();
//    
 
 
    
    
    // hair
//fill(r,g,b );
    fill(10, 10, 9);
rect(86, 18, 223, 200, 145);

// face
fill(240, 212, 183);
ellipse(200, 144, 200, 200);

    
//glasses
fill(235, 212, 183);
ellipse(157, 131, 70, 70);
ellipse(241, 132, 70, 70);
fill(235, 212, 183);
line(102, 122, 122, 128);
line(298, 119, 276, 133);
 
   
    
    
    
    
//scar
stroke(153, 130, 87);
line(256, 96, 262, 86);
line(261, 86, 251, 81);
line(267, 70, 251, 81);

//bangs
strokeWeight(0);
stroke(10, 10, 10);
fill(8, 8, 8);
triangle(185, 41, 237, 91, 278, 54);
triangle(249, 29, 274, 118, 297, 111);


//eyes
fill(5, 5, 5);
ellipse(160, 131, 30, 30);
fill(245, 245, 245);
ellipse(map(mouseX,0,width, 156, 165), 125, 10, 10);
fill(5, 5, 5);
ellipse(246, 130, 30, 30);
fill(245, 245, 245);
ellipse(map(mouseX,0,width,242,251 ), 125, 10, 10);
    
    
    
    
//nose
fill(224, 194, 162);
rect(179, 133, 38, 61, 74);

//eye brows
strokeWeight(5);
line(145, 112, 176, 114);
strokeWeight(5);
line(257, 111, 225, 115);

//mouth
stroke(255, 0, 0);
line(218, 205, 185, 208);


 
 // mouseX and mouseY
 pop();
strokeWeight(3);
stroke(57, 0, 214);
fill(0, 210, 247);
   
 ellipse(mouseX, mouseY, 30, 30);

    
    
    
    


    
    
    
//    let img;
//let r, g, b;
//
//function setup() {
//    r = random(255);
//    g = random(255);
//    b = random(255);
//    var cnv = createCanvas(720, 400);
//    cnv.style('display', 'block');
//    cnv.parent('content');
//  img = loadImage'bckgrnd.JPG');
//}
    
    
    
    
    
    
   
    
   
    
    
    
    
    
    
    
    
    
    
    
//    console.log("X:"+ mouseX);
//    console.log("Y:"+ mouseY);
////    
////    
    
    
}




