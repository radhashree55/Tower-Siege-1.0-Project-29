class Polygon {
    constructor(x,y,radius) {
      var options ={
        'restitution':0,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius;
      this.image = loadImage("aimimage.png");
      World.add(world, this.body);
    }  
    display() {
      var pos =this.body.position;
      fill(0,255,178);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
  }