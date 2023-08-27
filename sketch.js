var bg,bgImg;
var shooter1;
var shooter2;
var shooter3;
var heart1img,heart2img,heart3img;
var heart1,heart2,heart3;
var zombie,zombieimg


function preload(){
  shooter1= loadImage("assets/shooter_1.png")
  shooter2 = loadImage("assets/shooter_2.png")
  shooter3 = loadAnimation("assets/shooter_3.png")
  zombieimg = loadImage("assets/zombie.png")
  heart1img = loadImage("assets/heart_1.png")
  heart2img = loadImage("assets/heart_2.png")
  heart3img = loadImage("assets/heart_3.png")
  bgImg = loadImage("assets/background_image.jpg")
 shooteranimation = loadAnimation("assets/shooter_1.png","assets/shooter_2.png",)
}

function setup() {

  
  createCanvas(1000,500);

  //adding the background image
 // bg = createSprite(700,100,10,10);
 //bg.addImage(bgImg);

  shooter = createSprite(240,400,20,20);
  shooter.addAnimation("shooter", shooteranimation);
  shooter.addAnimation("shooting",shooter3)
  shooter.scale=0.2;

  heart1=createSprite(800,100,10,10);
 heart1.addImage(heart1img);
 heart1.scale=0.2;

 heart2=createSprite(820,100,10,10);
 heart2.addImage(heart2img);
 heart2.scale=0.2;

 heart3=createSprite(840,100,10,10);
 heart3.addImage(heart3img);
 heart3.scale=0.2;


}

function draw() {
  background(bgImg); 
 

if(keyDown("space")){
  shooter.changeAnimation("shooting",shooter3);
}

  



//release bullets and change the image of shooter to shooting position when space is pressed
spawnzombies()
 drawSprites();
}

function spawnzombies(){
  if(frameCount%100==0){
    zombie=createSprite(1000,450,20,20);
    zombie.addImage(zombieimg);
    zombie.scale=0.1;
    zombie.velocityX=-10;
  }
}

//player goes back to original standing image once we stop pressing the space bar

  //player.addImage( shooter_shooting )
 // player.addImage()
 // player.addImage(shooterImg)
 //player.addImage(shooter_1.png)






