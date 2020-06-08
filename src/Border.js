export default class Border {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx

        this.color = "#fff"; 
        this.a = this.canvas.height/3;
        this.b = 0
        this.c = this.canvas.width; 

        // Propriétées des bordures 


    }

    draw(){
        this.ctx.beginPath(); 
        this.ctx.strokeStyle = this.color
        ctx.moveTo(b, a);
        ctx.lineTo(a, a);
        ctx.lineTo(c, a);
        ctx.lineTo(c, b);

    }


    update(){
        this.draw(); 
    }

}