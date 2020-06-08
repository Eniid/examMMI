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
        this.speed = 1;
        this.angle = Math.random; 

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
        const x = this.speed * Math.cos(this.angle * (Math.PI/180)); 
        const y = this.speed * Math.sin(this.angle * (Math.PI/180)); 
        const newCoo = new Vector(x, y); 
        this.location.add(newCoo); 

        
        this.draw(); 
    }


}