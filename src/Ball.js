import Vector from './Vector';

export default class Ball {
    constructor(animation){
        this.animation = animation; 
        this.ctx = animation.ctx;
        this.canvas = animation.canvasElt;  
        this.palet = animation.palet; 
        this.palet2 = animation.pallet2; 

        // Props de la ball
        this.color = "red";
        this.widht = 10;
        this.height = 10;
        //this.acceleration = 0.2;
        this.speed = 4;
        this.angle = Math.random() * 70 - 30; 

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

    collision(){
        //Pallets
        if(this.location.x + this.widht > this.animation.pallet2.location.x) {
            
            if(this.location.y > this.animation.pallet2.location.y && this.location.y < this.animation.pallet2.location.y + this.animation.pallet2.height) {
                console.log("ça touche");
                this.angle = this.angle - Math.random() * 40 - 160; 
            }
        }

        if(this.location.x < this.animation.pallet.location.x + this.animation.pallet.widht) {
            
            console.log("ça touche");
            if(this.location.y > this.animation.pallet.location.y && this.location.y < this.animation.pallet.location.y + this.animation.pallet.height) {
                this.angle = this.angle - 180; 
                
            }
        }
    }

    update(){
        const x = this.speed * Math.cos(this.angle * (Math.PI/180)); 
        const y = this.speed * Math.sin(this.angle * (Math.PI/180)); 
        const newCoo = new Vector(x, y); 
        this.location.add(newCoo); 
        
 
        
        this.collision(); 
        this.draw(); 
    }


}