class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,pointB:pointB,
            stiffness:1.2,
            length:400

        }
        this.pointB=pointB
        this.chain=Constraint.create(options)
        World.add(world,this.chain)

    }
    attach(body) 
	{ this.rope.bodyA = body; } 
	fly() 
	{ this.rope.bodyA = null; }
    display(){
        stroke("teal")
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)

        
    }
}