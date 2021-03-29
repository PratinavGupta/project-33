class Divisions {
    constructor(x, y) {
        var options = { isStatic: true }
        this.body = Matter.Bodies.rectangle(x, y,  15, 300, options);
        Matter.World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x,this.body.position.y, 15, 300);
    }
}