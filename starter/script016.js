/*****************************
 * 16 - L'opérateur ternaire et l'instruction Switch
 */

/*
Initalisez la variable firstName à John et la variable age à 14
*/

let sFirstName = 'John';
// let iAge = 14;
// let iAge = 24;
let iAge = 56;

// 16 - 1. L'opérateur ternaire

//alert(condition ? 'si vrai' : 'si faux')

/*
1. Écrivez une expression ternaire pour afficher "John boit des bières" ou "John boit des jus" selon qu'il est majeur ou pas.
2. Testez en changeant l'âge de John (14 ans, 24 ans)
*/

alert(iAge > 18 ? 'John boit des bières' : 'John boit des jus');

/*
MEILLEURE PRATIQUE : utiliser l'expression ternaire pour affecter une valeur ou une autre valeur à une variable selon qu'une condition est remplie ou pas
1. Affecter, selon qu'on est majeur ou pas, la valeur "bières" ou la valeur "jus" à la variable drink
2. Afficher "John boit des …" (l'affichage s'adapte à l'âge de John, tester différents cas)
*/

let sDrink = (iAge > 18 ? 'bières' : 'jus')
alert(`John boit des ${sDrink}`);

/* Faites la même chose en utilisant un if / else */

if (iAge > 18){
    alert("John boit des bières.");
}
else {
    alert("John boit des jus.");
}


// 16 - 2. L'instruction Switch

// a) Switch avec des break

/*
1. Initialisez la variable job à la valeur "instituteur"
2. Utilisez un switch pour affciher :
	- si la profession est professeur ou instituteur, "John enseigne la programmation aux enfants",
	- si c'est chauffeur, "John conduit un taxi à Lisbonne",
	- si c'est designer, "John conçoit de beaux sites web" et,
	- dans tous les autres cas, "John fait autre chose"
3. Testez les différents cas de figure en changeant la profession de John
*/

let sJob = "professeur";

switch (sJob) {
    case "instituteur":
    case "professeur":
        alert("John enseigne la programmation aux enfants.");
        break;
    case "chauffeur":
        alert("John conduit un taxi à Lisbonne.");
        break;
    case "designer":
        alert("John conçoit de beaux sites web.");
        break;
    default:
        alert("John fait autre chose.");
}

/*
1. John a vielli : il a à présent 56 ans…
2. Utilisez un switch pour affciher :
  - si l'âge est inférieur à 13, "John est un garçon",
  - entre 13 et 20 ans, "John est un adolescent",
  - entre 20 et 30 ans, "John est un jeune homme"
  - et sinon "John est un homme".
3. Testez les différents cas de figure en changeant l'âge de John
4. Testez avec un âge de 7 ans en enlevant la 2e instruction break pour voir ce que cela a comme impact
*/

switch (iAge) {
    case iAge<13:
        console.log(`${sFirstName} est un garçon`);
        break;
    case (iAge>=13 && iAge<=20):
        console.log(`${sFirstName} est un adolescent`);
        break;
    case (iAge>=20 && iAge<=30):
        console.log(`${sFirstName} est un jeune homme`);
        break;
    default:
        console.log(`${sFirstName} est un homme`);
}


// Autre application de l'instruction switch

/*
1. Demandez à l'utilisateur d'entrer l'information
  "Quel temps fait-il dehors ? Répondez par un des quatre mots suivants :
  soleil, vent, pluie ou neige."
2. Stockez cette information dans une variable meteo
3.	a) s'il fait soleil, affichez le message "Sortez en t-shirt."
	b) s'il y a du vent, affichez "Sortez en pull."
	c) s'il pleut, affichez "Sortez en blouson."
	d) s'il neige, affichez "Restez au chaud à la maison."
	e) dans tous les autres cas (si la personne n'a rien répondu de tout ça
  	— c.-à-d. qu'elle n'a entré aucun de ces qautre mots-là),
 	 affichez "Je n'ai pas compris !"
*/


let sWeather = prompt("Quel temps fait-il dehors ? Répondez par un des quatre mots suivants : soleil, vent, pluie ou neige.");

switch (sWeather) {
    case "soleil":
        console.log("Sortez en t-shirt.");
        break;
    case "vent":
        console.log("Sortez en pull.");
        break;
    case "pluie":
        console.log("Sortez en blouson.");
        break;
    case "neige":
        console.log("Restez au chaud à la maison.");
        break;
    default:
        console.log("Je n'ai pas compris !");
}

// b) Switch sans break

// L'instruction `break` fait sortir du bloc du switch.  On ne souhaite pas toujours sortir, dans ce cas, on peut ne pas mettre de `break`

/*
1. Demandez à l'utilisateur d'entrer le numéro du jour de la semaine
2. Affichez ensuite dans la console le message suivant : "Les jours suivants se sont déjà écoulés depuis le début de la semaine : …, …, …"
*/

const iDay = parseInt(prompt("Quel est le jour de la semaine ?"));
let sDay = "";

switch (iDay) {
    case 7 :
        sDay += "Dimanche ";
    // break;
    case 6 :
        sDay += "Samedi ";
    // break;
    case 5 :
        sDay += "Vendredi ";
    // break;
    case 4 :
        sDay += "Jeudi ";
    // break;
    case 3 :
        sDay += "Mercredi ";
    // break;
    case 2 :
        sDay += "Mardi ";
    // break;
    case 1 :
        sDay += "Lundi ";
        break;
    default:
        sDay = "?";
}
console.log(`Les jours suivants se sont déjà écoulés depuis le début de la semaine : : ${sDay}`);

/* Ici, toutes les instructions "console.log" entre la ligne case:… et l'instruction break seront exécutées, et on obtient donc une liste de jours. Notez bien qu'il faut quand même un breas avant le default, sans quoi ce message d'erreur apparaîtra toujours à la fin de notre liste de jours… Notez qu'on aurait pu aussi écrire le default en premier, suivi d'un break puis la liste de tous les case. */


// Un cas d'utilisation concret très utile pour un switch

/* Switch peut sembler curieux, mais dans certaines situations, il est particulièrement utile. Par exemple, imaginez un script qui accepte la saisie au clavier et l'utilise pour déplacer un sprite – beaucoup de jeux vous demanderont d''utiliser les touches fléchées ou les touches A et D pour vous déplcaer de gauche à droite. En JavaScript, les pressions de touches sont représentées par un objet d'événement (que nous aborderons un peu plus loin dans le cours) avec une propriété contenant une valeur numérique qui correspond à la touche pressée. Par exemple, la lettre A est représentée par le code 65, la flèche gauche par le code 37, etc.
Voici un canevas de code qui permettrait de gérer les déplacements grâce aux touches */
