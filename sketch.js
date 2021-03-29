var plinkos = [];
var divisions = [];
var score = 0;
var turn = 0;
var particle;
var gamestate = "play";

function setup() {

  createCanvas(800, 800);
  engine = Matter.Engine.create();
  world = engine.world;

  ground = new Ground(400, 790, 800, 20);

  for (var k = 0; k <= 800; k = k + 80)
    divisions.push(new Divisions(k, 650));
  for (var j = 75; j <= 725; j = j + 50)
    plinkos.push(new Plinko(j, 75));
  for (var j = 50; j <= 750; j = j + 50)
    plinkos.push(new Plinko(j, 175));
  for (var j = 75; j <= 725; j = j + 50)
    plinkos.push(new Plinko(j, 275));
  for (var j = 50; j <= 750; j = j + 50)
    plinkos.push(new Plinko(j, 375));

  Matter.Engine.run(engine);
}



function draw() {

  background("black");

  Matter.Engine.update(engine);
  textSize(20);
  fill("orange");
  text("Score : " + score, 20, 30);
  text("100", 30, 500);
  text("200", 100, 500);
  text("300", 180, 500);
  text("100", 740, 500);
  text("200", 660, 500);
  text("300", 580, 500);
  text("400", 260, 500);
  text("500", 340, 500);
  text("500", 420, 500);
  text("400", 500, 500);
  ground.display();

  for (var i = 0; i < plinkos.length; i++)
    plinkos[i].display();
  for (var k = 0; k < divisions.length; k++)
    divisions[k].display();


  if (particle) {
    particle.display();

    if (particle.body.position.y > 700) {

      if (particle.body.position.x < 80)
        score = score + 100;
      if (particle.body.position.x > 80 && particle.body.position.x < 160)
        score = score + 200;
      if (particle.body.position.x > 160 && particle.body.position.x < 240)
        score = score + 300;
      if (particle.body.position.x > 240 && particle.body.position.x < 320)
        score = score + 400;
      if (particle.body.position.x > 320 && particle.body.position.x < 480)
        score = score + 500;
      if (particle.body.position.x > 480 && particle.body.position.x < 560)
        score = score + 400;
      if (particle.body.position.x > 560 && particle.body.position.x < 640)
        score = score + 300;
      if (particle.body.position.x > 640 && particle.body.position.x < 720)
        score = score + 200;
      if (particle.body.position.x > 720)
        score = score + 100;

      particle = null;
      turn++;
    }

    if (turn > 5)
      gamestate = "end";
  }

  if (gamestate == "end") {
    push()
    textSize(40);
    strokeWeight(5)
    stroke("orange");
    fill("black");
    text("GAMEOVER", 300, 300);
    Pop()
  }

}

function mousePressed() {
  if (gamestate == "play")
    particle = new Particle(mouseX, 10);
}