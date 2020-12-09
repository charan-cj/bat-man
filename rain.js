class Rain{
    constructor(x,y){
        var options = {
            'firction':0.1,
            'density':1.0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,10,10);
        this.width = width;
        this.height = height;
        this.image = loadImage("rain.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 10,10);
        pop();
    }
}