class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            length : 10
        }
        this.sling = Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA){
        
        var pA = this.sling.bodyA.position;
        var pB = this.pointB;

        push();

        strokeWeight(3);
        stroke("black");
        line(pA.x , pA.y , pB.x , pB.y);

        pop();
        }
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
}