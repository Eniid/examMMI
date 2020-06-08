export default class Border {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx

        this.color = "#fff"; 
        this.a = this.canvas.height/3;
        this.b = 10;
        this.c = this.canvas.width; 

        // Propriétées des bordures 


    }

    draw(){
        this.ctx.beginPath(); 
        this.ctx.strokeStyle = this.color
        this.ctx.moveTo(this.b, this.a);
        this.ctx.lineTo(this.a, this.a);
        this.ctx.lineTo(this.c, this.a);
        this.ctx.lineTo(this.c, this.b);
        this.ctx.stroke; 

    }


    update(){
        this.draw(); 
    }

}