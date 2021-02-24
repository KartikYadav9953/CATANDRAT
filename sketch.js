function preload() {
    //load the images here

    groundImg = loadImage("garden.png");

    catImg = loadImage("cat1.png");

    ratImg = loadImage("mouse1.png")

    cat2Img = loadAnimation("cat2.png", "cat3.png")

    rat2Img = loadAnimation("mouse2.png", "mouse3.png");

    cat3Img = loadAnimation("cat4.png");

    rat3Img = loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here

    ground = createSprite(400, 250, 20, 20);
    ground.addImage("ground", groundImg);

    cat = createSprite(600, 480, 20, 20);
    cat.addImage("cat", catImg);
    cat.scale = 0.2 
    cat.setCollider("rectangle", 0, 0, 1200, 1000);
    cat.debug = false

    rat = createSprite(80, 480, 20, 20);
    rat.addImage("rat", ratImg);
    rat.scale = 0.1
    rat.setCollider("circle", 0, 0, 500);
    rat.debug = false

    

}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    touch();

     //cat.x - rat.x
     //console.log("hello");
     //console.log(cat.width/2 + rat.width/2);
     //console.log(cat.x - rat.x);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

   

   if( keyCode === LEFT_ARROW ) {

   cat.velocityX = -5;
   cat.addAnimation("running", cat2Img);
   cat.changeAnimation("running"); 
   rat.addAnimation("dance", rat2Img); 
   rat.changeAnimation("dance");

   }


}

function touch() {

    if(cat.x - rat.x < (cat.width/1 - rat.width)/1)
    {
     cat.addAnimation("stand", cat3Img, 200, 480);
     cat.changeAnimation("stand", cat3Img);
     cat.velocityX = 0     
     rat.addAnimation("mouse", rat3Img);
     rat.changeAnimation("mouse", rat3Img);   
    }



}
