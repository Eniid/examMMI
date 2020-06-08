import Vector from './Vector';

export default class Pallet {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;
        this.ball = this.animation.ball;
        this.controller = this.animation.controller; 

        this.color = "#fff";
        this.widht = 10;
        this.height = 100;
        this.speed = 3; 
        this.point = 0; 
        this.locationPoint = this.canvas.widht -10; 

        const x = 20; 
        const y = (this.canvas.height/2)-(this.height/2); 
        this.location = new Vector(x, y)

    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.location.x, this.location.y, this.widht, this.height);
        this.ctx.fill();

        this.ctx.font = '48px serif';
        this.ctx.textAlign = "center"; 
        this.ctx.fillText(this.point, this.canvas.widht -10, this.canvas.height -20)
    }; 




    update(){
        if(this.controller.isKeyDown("p")){
            if(this.location.y > 0) this.location.y = this.location.y - this.speed
            
        }
        if(this.controller.isKeyDown("l")){
            if(this.location.y < this.canvas.height - this.height) this.location.y = this.location.y + this.speed
        }


        this.draw();
    }
}