import Vector from './Vector';

export default class Ball {
    constructor(animation){
        this.animation = animation; 
        this.ctx = animation.ctx;
        this.canvas = animation.canvasElt;  

        // Props de la ball
        this.color = "red";
        this.widht = 10;
        this.height = 10;
        //this.acceleration = 0.2;
        this.speed = 4;
        //this.dy = Math.random() * 2 + -1;
        //this.dx = 1;
        //this.direction = new Vector(this.dx, this.dy );

        const x = this.canvas.width/2 - this.widht/2; 
        const y = (this.canvas.height/2)-(this.height/2); 
        this.location = new Vector(x, y); 

    }

    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.location.x, this.location.y, this.widht, this.height);
        this.ctx.fill();
    }

    update(){
        this.draw(); 
    }


}