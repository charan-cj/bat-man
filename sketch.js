
// setting up Physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// creating variables
var maxDrops = 100;
var batman, thunder, thunder1;
var rain = [];
var batmanImg, rainImg, thunderImg, thinder1Img;

function preload() {
    batmanImg = loadImage("batman.png");
    rainImg = loadImage("rain.png");
    thunderImg = loadImage("thunder.png");
    thunder1Img = loadImage("thunder2.png");
}

function setup() {
    // creating Engine
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(500, 540);

    batman = createSprite(250, 380, 50, 70);
    batman.addImage(batmanImg);
    batman.scale = 0.3;

}

function draw() {
    background("black");
   
    // updating Engine
    Engine.update(engine);
    for(var i=0; i<100;i++){
        rain.push(new Rain(random(0,400),random(0,400)));
        rain[i].display();
    }
    

    drawSprites();
}

