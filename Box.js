class Box{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1.0,
            density:0.04
        }
    this.body = Bodies.rectangle(x,y,70,70,options)
        this.width=70 
        this.height=70
        World.add(world,this.body)
        }
    
        display(){
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(this.body.angle)
            rectMode(CENTER)
            fill("yellow")
            rect(0,0,this.width,this.height);
            pop()
            
        }
        

}
