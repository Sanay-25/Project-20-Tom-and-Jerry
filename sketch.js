var  bgi;
var m,mi;
var c,ca,catSitting,catStanding;
function preload() {
bgi=loadImage("images/garden.png");
mi=loadAnimation("images/mouse1.png");
m23=loadAnimation("images/mouse2.png","images/mouse3.png");
ca=loadAnimation("images/cat2.png","images/cat3.png");
catStanding=loadAnimation("images/cat4.png");
catSitting=loadAnimation("images/cat1.png");
m4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    m=createSprite(100,600,20,20);
    m.addAnimation("mouseCheese",mi);
    m.scale=0.2;
    
    c=createSprite(850,600,20,20)
    c.addAnimation("catSit",catSitting);
    c.scale=0.2;
    
    

}

function draw() {

    background(bgi);
    console.log(m.width/2+c.width/2);
    //Write condition here to evalute if tom and jerry collide

    

    if(c.x-m.x<(c.width-m.width)/2){
        c.velocityX=0;
        c.addAnimation("catStand",catStanding);
        c.changeAnimation("catStand",catStanding);
        c.x=200;
        m.addAnimation("mouseCheck",m4);
        m.changeAnimation("mouseCheck",m4);
    }

    drawSprites();
}
function keyPressed(){
    if(keyCode===LEFT_ARROW){
        c.velocityX=-5;
        c.addAnimation("catWalking",ca);
        c.changeAnimation("catWalking",ca);
        m.addAnimation("mouseA",m23);
        m.changeAnimation("mouseA",m23);
    }
}

