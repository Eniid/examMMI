import Border from "./Border";
import Ball from "./Ball";
import Pallet from "./Pallet";
import { controller } from "./controller";



const animation = {
    canvasElt : undefined, 
    ctx:  undefined, 
    controller, 



    init(){
        document.body.classList.add("js"); 
        document.body.classList.remove("no-js"); 

        const boutton = document.getElementById("to-step-2"); 
        this.canvasElt = document.createElement("canvas");
        this.canvasElt.height = 480;
        this.canvasElt.width = 640; 

        this.ctx = this.canvasElt.getContext('2d'); 
        document.body.insertAdjacentElement("beforeend", this.canvasElt);
        boutton.addEventListener('click', () => {
            console.log("coucou");
            
        })

        // Inisitaliser les classes
        this.border = new Border(this); 
        this.ball = new Ball(this); 
        this.pallet = new Pallet(this); 

        this.pallet2 = new Pallet(this)
        this.pallet2.location.x = this.canvasElt.width - 40; // Valleur à changer pour qu'elle soit relative à des truc
        

        // initialiser le contrôleur 
        this.controller.init(this);

        this.animate();
    }, 

    draw(){
        this.border.update(); 
        this.ball.update(); 
        this.pallet.update();
        this.pallet2.update(); 

        
    }, 

    animate(){
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        this.draw()
        window.requestAnimationFrame( ()=> {
            this.animate(); 
        });
        //console.log(this.controller.pressedKeys);
    }, 


}

animation.init() 