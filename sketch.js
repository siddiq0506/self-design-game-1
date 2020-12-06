var rocket,rocketImg
var fire,pipe
var sky,backgroundImg


function preload(){
backgroundImg = loadImage("images/sky.png");
 rocketImg = loadImage("images/rocket.png");
 fire = loadImage("images/fire.png");
 pipe = loadImage("images/pipe.png");
 rocket = loadImage("images/rocket.png");

}

function setup(){
createCanvas(displayWidth,displayHeight)
}

function draw(){
background(backgroundImg)

  rocket = createSprite(150,350,20,50);
  rocket.scale = 0.55
  rocket.addImage(rocketImg);

  rocket.positionX = 5;

 drawSprites();
}