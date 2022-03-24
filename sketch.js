var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var counts = 0;
var gameState = "play";
var restartButton, restartButtonImg
var square,square1,square2,square3,square4, square5;
var star1, star1Img, star2, star2Img, star3, star3Img, star4, star4Img;
 function preload(){
   restartButtonImg = loadImage("restartButton.png");
   star1Img = loadImage("star.jpg");
   star2Img = loadImage("star.jpg");
   star3Img = loadImage("star.jpg");
 }
 function setup(){
   createCanvas(400,400);
 wall1 = createSprite(190,120,250,3);
 wall2 = createSprite(190,260,250,3);
  wall3 = createSprite(67,145,3,50);
 wall4 = createSprite(67,235,3,50);
wall5 = createSprite(313,145,3,50);
wall6 = createSprite(313,235,3,50);
 wall7 = createSprite(41,170,50,3);
wall8 = createSprite(41,210,50,3); 
wall9 = createSprite(337,210,50,3);
 wall10 = createSprite(337,170,50,3);
wall11 = createSprite(18,190,3,40);
wall12 = createSprite(361,190,3,40);
square = createSprite(40,190,15,15);
square.shapeColor = "red";
square1 = createSprite(104,135,15,15);
square1.shapeColor = "blue";
square2 = createSprite(140,230,15,15);
square2.shapeColor = "blue";
square3 = createSprite(200,135,15,15);
square3.shapeColor = "blue";
square4 = createSprite(245,230,15,15);
square4.shapeColor = "blue";
square5 = createSprite(284,141,15,15)
square5.shapeColor = "blue";
restartButton = createSprite(188,325,15,15);
restartButton.addImage(restartButtonImg);
restartButton.visible = false;
restartButton.scale = 0.05;
star1 = createSprite(17,19,5,5);
star1.addImage(star1Img);
star1.scale = 0.07;
rotateSprite(star1);
star2 = createSprite(377,20,5,5);
star2.addImage(star2Img);
star2.scale = 0.07;
rotateSprite2(star2);
star3 = createSprite(374,373,5,5);
star3.addImage(star3Img);
star3.scale = 0.07;
rotateSprite(star3);
star4 = createSprite(21,376,5,5);
star4.addImage(star2Img);
star4.scale = 0.07;
rotateSprite2(star4);
square1.velocityY = 5;
square2.velocityY = -5;
 square3.velocityY = 5;
 square4.velocityY = -5;
 square5.velocityY = 5;
 }
function draw(){
 if(mousePressedOver(restartButton)){
 buttonCollision();
 }
 if(gameState == "play"){
   wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible =true;
    wall5.visible = true;
    wall6.visible = true;
    wall7.visible = true;
    wall8.visible = true;
    wall9.visible = true;
    wall10.visible = true;
    wall11.visible = true;
    wall12.visible = true;
    square.visible = true;
    square1.visible = true;
    square2.visible = true;
    square3.visible = true;
    square4.visible = true;
    square5.visible = true;
    star1.visible = true;
    star2.visible = true;
    star3.visible = true;
    star4.visible = true;
    restartButton.visible = true;
 background("lightblue");
  textSize(25);
    fill("black");
    text("Deaths:" + " " + counts,150,100);
  //  fill("black");
  //noStroke();
  //  textSize(12);
  //  textAlign(CENTER);
  //text("You can only Press the Restart Button 3 times.",185,379);
 square1.bounceOff(wall1);
square1.bounceOff(wall2);
 square2.bounceOff(wall2);
 square2.bounceOff(wall1);
 square3.bounceOff(wall1);
 square3.bounceOff(wall2);
 square4.bounceOff(wall2);
  square4.bounceOff(wall1);
  square5.bounceOff(wall2);
  square5.bounceOff(wall1);
  if(keyDown("right")){
   square.x += 10;
 
  }
   if(keyDown("left")){
     square.x = square.x -10;
   }
 }
   if(square.isTouching (square1) ||
   square.isTouching (square2) ||
   square.isTouching (square3) ||
   square.isTouching (square4) ||
   square.isTouching (square5) ||
   square.isTouching (wall11)) 
   {
   square.x = 40;
   square.y = 190;
   counts +=1;
   }
 
   if(square.collide(wall12)){
    gameState = "end";
   }
  if(counts==5){
    fill("yellow");
    noStroke();
    textSize(30);
    textFont("Georgia");
    textAlign(CENTER);
    text("Game Over! Try Again",200,200);
    restartButton.visible = true;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    square.visible = false;
    square1.visible = false;
    square2.visible = false;
    square3.visible = false;
    square4.visible = false;
    square5.visible = false;
    star1.visible = false;
    star2.visible = false;
    star3.visible = false;
    star4.visible = false;
    /*wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    square.destroy();
    square1.destroy();
    square2.destroy();
    square3.destroy();
    square4.destroy();
    square5.destroy();*
    /*restartButton.visible = true;
      wall1.visible = true;
      wall2.visible = true;
      wall3.visible = true;
      wall4.visible =true;
      wall5.visible = true;
      wall6.visible = true;
      wall7.visible = true;
      wall8.visible = true;
      wall9.visible = true;
      wall10.visible = true;
      wall11.visible = true;
      wall12.visible = true;
      square.visible = true;
      square1.visible = true;
      square2.visible = true;
      square3.visible = true;
      square4.visible = true;
      square5.visible = true;
      star1.visible = true;
      star2.visible = true;
      star3.visible = true;
      star4.visible = true;
      square5.visible = true;
      restartButton.visible = true;*/
  }

    
  
  
  if(gameState == "end"){
    fill("green");
    noStroke();
    textSize(30);
    textFont("Pacifico");
    textAlign(CENTER);
    text("Congratulations!",185,142);
    textSize(21);
    textAlign(CENTER);
    text("You have successfully reached the other side.",208,186);
    restartButton.visible = true;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    square.visible = false;
    square1.visible = false;
    square2.visible = false;
    square3.visible = false;
    square4.visible = false;
    square5.visible = false;
    star1.visible = false;
    star2.visible = false;
    star3.visible = false;
    star4.visible = false;
  /*  wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    square.destroy();
    square1.destroy();
    square2.destroy();
    square3.destroy();
    square4.destroy();
    restartButton.visible = true;*/
  }
 drawSprites();
}
function buttonCollision(){
   gameState = "play";
restartButton.visible = false;
 wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible =true;
    wall5.visible = true;
    wall6.visible = true;
    wall7.visible = true;
    wall8.visible = true;
    wall9.visible = true;
    wall10.visible = true;
    wall11.visible = true;
    wall12.visible = true;
    square.visible = true;
    square.x  = 40;
    square.y = 190;
    square1.visible = true;
    square1.x = 104;
    square1.y = 135;
    square2.visible = true;
    square2.x = 140;
    square2.y = 230;
    square3.visible = true;
    square3.x = 200;
    square3.y = 135;
    square4.visible = true;
    square4.x = 245;
    square4.y = 230;
    square5.visible = true;
    square5.x = 284;
    square5.y = 141;
    counts = 0;
    star1.visible = true;
    star2.visible = true;
    star3.visible = true;
    star4.visible = true;
  }
function rotateSprite(sprite){
sprite.rotation -= 10;
}
function rotateSprite2(sprite){
  sprite.rotation += 10;
  }