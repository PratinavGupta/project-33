class Particle {
    constructor(x, y) {

        var options ={ restitution:0.4 }
        this.body = Matter.Bodies.circle(x, y, 10,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        Matter.World.add(world, this.body);

    }
    display() {

        // var angle = this.body.angle;

        // push();
        // translate(this.body.positions.x, this.body.position.y);
        // rotate(angle);
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 10);
        // pop();
    }

}