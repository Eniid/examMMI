import Border from "./Border";



const animation = {
    canvasElt : undefined, 
    ctx:  undefined, 


    init(){
        document.body.classList.add("js"); 
        document.body.classList.remove("no-js"); 

        const boutton = document.getElementById("to-step-2"); 
        this.canvasElt = document.createElement("canvas");
        this.canvasElt.height = 480;
        this.canvasElt.width = 640; 

        this.ctx = this.canvasElt.getContext('2d'); 
        boutton.addEventListener('click', () => {
            console.log("coucou");
            document.body.insertAdjacentElement("beforeend", this.canvasElt);
        })

        // Inisitaliser les classes
        this.border = new Border(this); 

        // initialiser le contrôleur 

        this.animate();
    }, 

    draw(){
        this.border.update(); 
    }, 

    animate(){
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        this.draw()
        window.requestAnimationFrame( ()=> {
            this.animate(); 
        });

    }, 


}

animation.init() 