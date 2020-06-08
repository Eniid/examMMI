export default class Border {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx

        this.color = "#fff"; 
        this.width = 10; 
        this.a = this.canvas.height/3;
        this.aTow = this.canvas.height/3 + this.canvas.height/3;
        this.b = 0;
        this.bTow = this.canvas.height; 
        this.c = this.canvas.width; 
        this.cTow = 0; 


        // Propriétées des bordures 


    }

    draw(){
        this.ctx.beginPath(); 
        this.ctx.strokeStyle = this.color; 
        this.ctx.lineWidth = this.width;
        this.ctx.moveTo(this.b, this.a);
        this.ctx.lineTo(this.b, this.b);
        this.ctx.lineTo(this.c, this.b);
        this.ctx.lineTo(this.c, this.a);
        this.ctx.stroke(); 

        this.ctx.beginPath(); 
        this.ctx.strokeStyle = this.color; 
        this.ctx.lineWidth = this.width;
        this.ctx.moveTo(this.b, this.aTow);
        this.ctx.lineTo(this.b, this.bTow);
        this.ctx.lineTo(this.c, this.bTow);
        this.ctx.lineTo(this.c, this.aTow);
        this.ctx.stroke(); 

        this.ctx.beginPath(); 
        this.ctx.strokeStyle = this.color; 
        this.ctx.lineWidth = this.width;
        this.ctx.moveTo( this.canvas.width/2, 0);
        this.ctx.lineTo( this.canvas.width/2, this.canvas.height);
        this.ctx.stroke(); 
    }


    update(){
        this.draw(); 
        
        
    }

}