class CannonBall {
    constructor(x,y){
        //Opciones del motor físico
        var options = {
            isStatic: true
        }
        //Radio para la bala
        this.r = 30;
        //Asignación de cuerpo circular
        this.body = Bodies.circle(x,y,this.r,options);
        //Cargar imagen de la bala 
        this.image = loadImage("assets/cannonball.png");
        //Agregar cuerpo de la bala al mundo
        World.add(world,this.body);
    }
    //Función para mostrar bala en Sketch
    display(){
        //Almacena la posición X y Y de la bala
        var pos = this.body.position;
        push();//Push captura la nueva posición
            imageMode(CENTER);
            this.image(this.image,pos.x,pos.y,this.r,this.r);
        pop();//Vuelve a la posición original 
        
    }

}
