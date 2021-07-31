class Base
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:true
    };
    
    this.Body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.Body);
  }

  show() {
    let pos = this.Body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill("brown");
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }

}
