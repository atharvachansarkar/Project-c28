class Tree{
    constructor(x,y){
        super(x,y,50,50)
        var options ={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
    this.image = loadImage("pic/Plucking mangoes/tree.png")
    World.add(world, this.body);
    }
 display(){

    image(this.image,200,200)
    super.display()

 }
}