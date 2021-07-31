class Stone {
    constructor(x, y) {
      var options = {
        isStatic: true,
        restitution:0.8,
        friction:1.0,
        density:1.0,
      };
      this.body = Bodies.circle(x, y, options);
      World.add(world, this.body);
    }

    display(){
        fill("red");
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.Body.position.y, this.radius, this.radius);
       }
}