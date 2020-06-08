const animation = {
    canvasElt : undefined, 
    ctx:  undefined, 


    init(){
        document.body.classList.add("js"); 
        document.body.classList.remove("no-js"); 

        const boutton = document.getElementById("to-step-2"); 
        boutton.addEventListener('click', () => {
            this.canvasElt = document.createElement("canvas"); 

        })

        // Inisitaliser les classes

        // initialiser le contrôleur 

        this.animate();
    }, 

    draw(){

    }, 

    animate(){
        his.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        this.draw()
        window.requestAnimationFrame( ()=> {
            this.animate(); 
        });

    }, 


}

animation.init() 