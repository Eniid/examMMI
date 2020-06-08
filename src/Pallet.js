import Vector from './Vector';

export default class Blocr {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;
        this.bal = this.animation.bal;

        this.color = "#fff";
        this.widht = 10;
        this.height = 100;
        this.speed = 3; 
        this.point = 0; 

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
        this.ctx.fillText(this.point, this.canvas.width - 20, this.canvas.height -20)
    }; 




    update(){
        
        this.draw();
    }
}