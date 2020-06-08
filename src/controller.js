export const controller = {
    pressedKeys : [],
    allowedKeys : ["p", "l", " "],

    init(animation){
        window.addEventListener("keydown", e => {

            const key = e.key; // Recupére le nom de la touche appuiller
            if(this.allowedKeys.indexOf(key) != -1){ // index of renvoi -1 si l'élément n'est pas dans le tableau. Si la touche qu'on vient de presse est dans le tableau des touches autorisées/ 
                if(this.pressedKeys.indexOf(key) == -1){ // vétifie si la touche n'est pas déjà appuiller (pour que ça se fasse qu'une fois)
                    this.pressedKeys.push(key); // Alors on rajoute la touche dans touche appuillée 
                }
            }
        }, false )

        window.addEventListener("keyup", e => {

            const key = e.key; // voir plus haut
            if(this.pressedKeys.indexOf(key) != -1){ // On vérifie sur la touche est bien enfoncé, par sécuritée. 
                this.pressedKeys.splice(this.pressedKeys.indexOf(key), 1); // Splice à besoin d'un indice de départ (qu'on récup avec indexOf) et d'un nombre de truc à suprimer, ici un seul. 
            }

        }, false )
    },

    isKeyDown(key){
        if(this.pressedKeys.indexOf(key) != -1){
            return true; // si la touche est appuiller, on envoie true, on s'en servira plus tard =) 
        }else{
            return false;
        }
    },
}