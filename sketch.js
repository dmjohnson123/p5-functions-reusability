function setup(){
    createCanvas(600,400);
    background(50);
}

function draw(){
    flower(100,300);  
    flower(200,300);
    flower(300,300);
    flower(400,300);
    flower(500,300);
    
    if(mouseIsPressed){
        flower(mouseX,mouseY);
    }
    
}

function flower(x,y){
    //stem
    fill(0, 153, 0);
    rect(x-5,y,10,100);
    
    //petals
    noStroke();
    fill(255, 153, 153);
    ellipse(x+10,y-10,40,40);
    ellipse(x+10,y+10,40,40);
    ellipse(x-10,y-10,40,40);
    ellipse(x-10,y+10,40,40);
    
    //bulb
    fill(230, 0, 115);
    ellipse(x,y,25,25);
}