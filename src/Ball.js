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
        this.speed = 4;
        this.angle = Math.random() * 70 - 30; //! A inverser (une fois sur deux ? Rendom? )

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
        //* Pallets
        if(this.location.x + this.widht > this.animation.pallet2.location.x) {
            if(this.location.y > this.animation.pallet2.location.y && this.location.y < this.animation.pallet2.location.y + this.animation.pallet2.height) {
                this.angle = this.angle - Math.random() * 40 - 160; 
            }
        }

        if(this.location.x < this.animation.pallet.location.x + this.animation.pallet.widht) {
            if(this.location.y > this.animation.pallet.location.y && this.location.y < this.animation.pallet.location.y + this.animation.pallet.height) {
                this.angle = this.angle - 180; 
                
            }
        }

        //* Bords 
        if(this.location.y < 10){
            this.angle = this.angle - 90; 
        }
        if(this.location.y > this.canvas.height - 10){
            this.angle = this.angle - 90; 
        }
        if(this.location.x > this.canvas.width ){
            if(this.location.y > this.canvas.height/3 && this.location.y < this.canvas.height/3 + this.canvas.height/3){
                this.location.x = this.canvas.width/2 - this.widht/2; 
                this.location.y = Math.random() * this.canvas.width/2 - 40 + 80;
                // AJouter un point à l'équipe adversse
                this.animation.pallet2.point ++ 
            } else {
                this.angle = this.angle - 90; 
            }
        }
        if(this.location.x < 0 ){
            if(this.location.y > this.canvas.height/3 && this.location.y < this.canvas.height/3 + this.canvas.height/3){
                this.location.x = this.canvas.width/2 - this.widht/2; 
                this.location.y = Math.random() * this.canvas.width/2 - 40 + 80;
                // AJouter un point à l'équipe adversse
                this.animation.pallet.point ++ 
            } else {
                this.angle = this.angle - 90; 
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