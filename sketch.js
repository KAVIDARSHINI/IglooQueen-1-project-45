var bgImg,bg;
var playImg,playButton;
var snowFlakeImg;
var gameState = "start";
var levelOneBg,levelOneImg,levelTwoBg,levelTwoImg;
var iglooImg,igloo;
var penguinImg,penguin;
var land1,land2,land3,land4,land5,land6;
var land1Img,land2Img;
var seal,sealImg;



function preload(){
 bgImg = loadImage("images/backtitle.png");
 playImg = loadImage("images/playbutton.png");
 snowFlakeImg = loadImage("images/snowflakes.png");
 levelOneImg = loadImage("images/iceland3.jpg");
 levelTwoImg = loadImage("images/iceland4.jpg");
 iglooImg = loadImage("images/igloos.png");
 penguinImg = loadImage("images/penqueens.png");
 land1Img = loadImage("images/land1.png");
 land2Img = loadImage("images/land2.png");
 sealImg = loadImage("images/angryseal.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  edges = createEdgeSprites();

  setStart();
  setLevelOne();
  setLevelTwo();
}

function draw() {
  background("#0019A6");  
  drawSprites();
  if( gameState === "start"){
    levelStart();
  }else if(gameState === "levelOne"){
    levelOne();
  }else if(gameState === "levelTwo"){
    levelTwo();
  }
  
}

function setStart(){
  bg = createSprite(windowWidth/2,windowHeight/2,width,height);
  bg.addImage("background",bgImg);
  bg.scale = 1.163;
  bg.visible = false;

  playButton = createSprite(windowWidth/2,windowHeight/2);
  playButton.addImage(playImg);
  playButton.scale = 0.2;
  playButton.visible = false;
}

function setLevelOne(){
     
     levelOneBg = createSprite(windowWidth/2,windowHeight/2,width,height);
     levelOneBg.addImage(levelOneImg);
     levelOneBg.scale = 2.6;
     levelOneBg.visible = false;

     igloo = createSprite(windowWidth-230,windowHeight-70);
     igloo.addImage(iglooImg);
     igloo.visible = false;
     igloo.debug = true;

     
     land1 = createSprite(windowWidth/2+550,windowHeight/2-200,400,30);
     land1.addImage(land1Img);
     land1.visible = false;
     land1.debug = true;
     land1.setCollider("rectangle",0,10,550,40);

     land2 = createSprite(windowWidth/2+20,windowHeight/2-190);
     land2.addImage(land2Img);
     land2.visible = false;
     //land2.debug = true;
     land2.setCollider("rectangle",0,0,250,40);

     land3 = createSprite(windowWidth/2-450,windowHeight/2 +150);
     land3.addImage(land1Img);
     land3.visible = false;
     land3.debug = true;
     land3.setCollider("rectangle",0,10,550,40);

     land4 = createSprite(windowWidth/2 - 250,windowHeight/2-20);
     land4.addImage(land2Img);
     land4.visible = false;
     //land4.debug = true;
     land4.setCollider("rectangle",0,0,250,40);

     land5 = createSprite(windowWidth/2-70,windowHeight/2 + 370);
     land5.addImage(land1Img);
     land5.visible = false;
     //land5.debug = true;
     land5.setCollider("rectangle",0,10,550,40);

     land6 = createSprite(windowWidth/2+330,windowHeight/2+380);
     land6.addImage(land2Img);
     land6.visible = false;
     //land6.debug = true;
     land6.setCollider("rectangle",0,0,250,40);

     penguin = createSprite(windowWidth/2+550,windowHeight/2-200);
     penguin.addImage(penguinImg);
     penguin.scale = 0.1;
     penguin.visible = false;

     seal = createSprite(windowWidth/2 -400,windowHeight/2 + 100);
     seal.addImage(sealImg);
     seal.scale = 0.5;
     seal.visible = false;

}

function levelStart(){

  bg.visible = true;
  playButton.visible = true;
   if(mousePressedOver(playButton) ){
     gameState = "levelOne";
   }
}

function levelOne(){

  levelOneBg.visible = true;
  bg.visible = false;
  playButton.visible = false;
  igloo.visible = true;
  penguin.visible = true;
  seal.visible = true;
  land1.visible = true;
  penguin.collide(land1);
  land2.visible = true;
  penguin.collide(land2);
  land3.visible = true;
  penguin.collide(land3);
  land4.visible = true;
  penguin.collide(land4);
  land5.visible = true;
  penguin.collide(land5);
  land6.visible = true;
  penguin.collide(land6);

 if(keyDown(RIGHT_ARROW)){
   penguin.x = penguin.x + 5;
   penguin.mirrorX(-1);
 }

 if(keyDown(LEFT_ARROW)){
   penguin.x = penguin.x - 5;
   penguin.mirrorX (1);
 }

 if(keyDown(DOWN_ARROW)){
   penguin.y  = penguin.y + 5;
 }

 if(keyDown(UP_ARROW)){
  penguin.velocityY = -13;
 }

  penguin.velocityY = penguin.velocityY + 0.8;

  if(penguin.isTouching(igloo)){
     gameState = "levelTwo";
  }
  
}

function setLevelTwo(){
    levelTwoBg = createSprite(windowWidth/2,windowHeight/2,width,height);
    levelTwoBg.addImage(levelTwoImg);
    levelTwoBg.scale = 1.6;
    levelTwoBg.visible = false;
}

function levelTwo(){
  levelTwoBg.visible = true;
  levelOneBg.visible = false;
  bg.visible = false;
  playButton.visible = false;
  igloo.visible = false;
  penguin.visible = false;
  seal.visible = false;
  land1.visible = false;
  land2.visible = false;
  land3.visible = false; 
  land4.visible = false; 
  land5.visible = false;
  land6.visible = false;
 
}
