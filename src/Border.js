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
        this.ctx.strokeStyle = "#fff"
        this.ctx.moveTo(this.a, this.b);
        this.ctx.lineTo(this.b, this.b);
        this.ctx.lineTo(this.b, this.c);
        this.ctx.lineTo(a, c);
        this.ctx.stroke(); 

    }


    update(){
        this.draw(); 
        
        
    }

}