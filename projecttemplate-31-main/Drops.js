class Drops {
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.r=radius;
        this.body=Bodies.ellipse(x,y,r,options);
        World.add(world,this.body);
        

    }
    drops(){
        for(var i=0;i=400;i=i++){
            new Drops(random(0,400),random(0,400), 5,5)
            //push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(0,0,255);
        ellipseMode(CENTER);
        ellipse(x,y,r)
       // pop();
     }
         

    }
    reposition(){
        if (this.body.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})

        }
    

    }
}