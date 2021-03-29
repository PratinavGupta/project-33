class Plinko {
    constructor(x, y) {
        var options = { restitution: 1, friction: 0, isStatic: true }
        this.r = 10;
        this.body = Matter.Bodies.circle(x, y, this.r, options);
        Matter.World.add(world, this.body);
    }
    display() {

        var angle = this.body.angle;

      //  push();
       // translate(this.body.position.x, this.body.position.y);
       /// rotate(angle);
       // imageMode(CENTER);
        //noStroke();
       fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
       // pop();
    }

}