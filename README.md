# Examen de MMI - Juin 2020


## Énoncé

L’examen consiste en la réalisation du jeu classique Pong.

Une vidéo le présente ici : https://www.youtube.com/watch?v=CuugV_yuGXw

Dans ce jeu destiné à un seul joueur, celui-ci représente en même temps le paddle gauche et le paddle droit. Ces paddles sont controlés par deux touches L & P. 

La balle est lancée depuis le centre par une pression sur la barre d’espace. Celle-ci est inactive tant que la balle est en jeu. 

Avant de commencer à jouer, et donc avant d‘avoir un élément `canvas` dans la page, le joueur choisis son niveau de difficulté à l’aide d’un `select` dans un formulaire HTML. 

Le niveau de difficulté détermine la vitesse de la balle et la taille des paddle. Attention, lors de chaque mise en jeu, la balle démarre d’une hauteur inconnue comprise entre 1/7 de la hauteur du terrain et 6/7 de la hauteur du terrain. Lors de la première mise en jeu, les paddle sont toujours au centre, quelle que soit leur taille.

Le `canvas` est inséré dynamiquement par Javascript. Vous n’êtes pas autorisé à toucher aux codes HTML et CSS.

Différents objets sont à créer :

- l’application principale, qui organise tout et règle la boucle d’animation ;
- la balle ;
- un contrôleur chargé des mettre en place la délégation des événements de clavier ;
- le cadre, qui affiche les limites visuelles du jeu ;
- le panneau de scores, qui affiche les scores ;
- un objet pour contenir tous les réglages de l’application (les touches utilisables, la taille des lignes, la taille du canvas, et typiquement, la plupart des valeurs en dur qui se répètent dans n’importe quelle application).

Deux classes sont aussi à créer :

- Paddle, qui permet de générer deux raquettes ;
- Vector, qui permet de créer des vecteurs, structures de données à deux valeurs comme la vitesse, la position. Si vous ne savez pas comment utiliser cette classe, vous pouvez essayer de gérer le mouvement avec une autre méthode.

## Problèmes logiques

Il peut s’avérer compliqué de penser la manière avec laquelle la balle démarre et rebondit. Je vais donc expliquer celles-ci afin que vous puissiez éviter de perdre du temps sur des problèmes logiques un peu plus compliqués.

Déterminer le cap initial de la balle peut se faire de la manière suivante : vous déterminez un angle aléatoire dans un double intervalle compris entre `1 * Pi/4` et `3 * Pi/4` ou  entre `5 * Pi/4` et `7 * Pi/4`. 

Si vous décortiquez ceci, vous verrez que le deuxième intervalle (de 5 à 7) est identique au premier plus 4 et que chaque intervalle est de `2 * Pi/4`. 

Formellement, l’équation pour déterminer l’angle de départ est donc, `x * Pi/4 + aleatoire(2 * Pi/4)`, où `x` vaut soit 1, soit 5.

Quand la balle heurte un mur ou un paddle qui croise son axe de déplacement horizontal (donc typiquement, un bord vertical), son cap est modifié pour devenir l’opposé de (son cap actuel - 2 Pi). Donc le nouveau cap est `- (cap actuel - 2 * Pi)`

Quand la balle heurte un mur horizontal, deux cas sont possibles :

- l'objet vient de la droite et va vers la gauche, son cap sera `Pi + ((2 *Pi) - cap actuel)` ;
- l’objet se déplace vers la droite, son cap sera `Pi - cap actuel`

Ces changements de direction sont les seuls aspects un peu difficiles à réaliser d’un point de vue logique, c’est pourquoi je vous les donne. Le reste est une exploitation de ce qui a été illustré dans le cours. L’affichage de texte (les scores) est documenté sur le MDN et ne requiert pas d’explication particulière.


## Consignes

Téléchargez les fichiers de ce repo, initialisez un nouveau repo et faites le pointer vers le remote *privé* sur GitHub auquel vous avez pris soin de m’ajouter comme collaborateur.

Faites un `npm install` pour installer les dépendances nécessaires.

Lisez attentivement le code HTML de la page index pour comprendre comment celle-ci fonctionne :

- sans JS, le `h1` et le `p` sont affichés, pas la section `#step-1` ;
- avec JS, la section `#step-1` est affichée, pas le `h1`, ni le `p`.

Commitez toutes les quinzes, vingts minutes. L’examen dure quatre heures en tout. J’évaluerai le code au dernier commit compris dans cet intervalle de quatre heures. Ne poussez rien vers le remote pendant l’examen. Ne poussez qu’une fois celui-ci terminé.

__N’oubliez pas de commiter (mettez une minuterie en place)__

Pendant toute la durée de l’examen, enregistrez votre écran et incrustez l’image votre webcam en bas à droite de cette capture. Soit vous streamez cette capture vers Twitch (attention, ce stream doit être aussi peu trouvable que possible… si je rencontre un autre utilisateur sur votre stream, ça peut annuler votre examen), soit vous faites une capture sur votre disque et la postez ensuite sur Youtube par exemple.

À la fin de l’examen, envoyez-moi le lien de la vidéo (soit sur Twitch, soit sur Youtube) et de votre repo (en tant que collaborateur, je l’ai, mais ça marquera officiellement la remise de votre travail) par Slack.
