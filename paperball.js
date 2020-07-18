class Paperball {
    constructor(x, y, radius) {
      var options = {
      restitution:0.5,
      friction:0.5,   
      density:1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //translate(pos.x,pos.y);
      //rotate(this.body.angle);
      ellipseMode(CENTER);
      fill("red");
      ellipse(pos.x,pos.y,this.radius*2,this.radius*2)
      pop();
    }
  };
