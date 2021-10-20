/*****************************
 * 14 - Les instructions If / Else
 */

// TEST = STRUCTURE DE CONTRÔLE N° 1 = MOYEN DE CONTRÔLER L'EXÉCUTION DES INSTRUCTIONS :
// L'instruction ne s'exécutera que si une certaine condition est remplie (c.-à-d. vraie)

// 1. Exprimer une condition : IF

/* Écrivez votre première instruction conditionnelle, la plus simple qui soit :
1. Ecrivez un test dont la condition est true
2. Dans le bloc, affichez "Je suis dans un bloc d'instructions soumis à une condition qui est toujours vraie, je vais donc toujours m'afficher"
*/
if(true){
    alert("Je suis dans un bloc d'instructions soumis à une condition qui est toujours vraie, je vais donc toujours m'afficher");
}


/* Et l'inverse :
1. Ecrivez un test dont la condition est false
2. Dans le bloc, affichez "Bon, je cause toujours, mais vu que je suis dans un bloc d'instructions soumis à une condition qui est toujours fausse, ce que je dis ne va jamais s'afficher"
*/
if(false){
    alert("Bon, je cause toujours, mais vu que je suis dans un bloc d'instructions soumis à une condition qui est toujours fausse, ce que je dis ne va jamais s'afficher");
}


/*
1. Demandez à l'utilisateur d'entrer un nombre et enregistrez ce nombre (ATTENTION, prenez bien soin qu'il s'agisse bien d'un nombre et pas d'une chaîne de caractères !) dans une constante nombre
2. Si ce nombre est positif (et seulement dans ce cas), affichez "… est positif"
*/
// const sNumber = prompt("Écrivez un nombre");
// const iNumber = Number(sNumber);
const iNumber = parseInt(prompt("Écrivez un nombre"));
if (typeof iNumber === "number"){
    if (iNumber > 0){
        console.log(iNumber + " est positif");
    }
}
// else {
//   console.log("pas un nombre");
// }

/*
Ecrivez un programme qui dit "Bonjour" à l'utilisateur et n'accepte de lui répondre que si celui-ci lui dit "Bonjour" à son tour. Dans ce cas, le programme lui répond "Toi, tu es poli, tu me dis bonjour, je veux bien te parler… Comment t'appelles-tu ?". Il enregistre alors l'entrée dans une variable nom et, seulement si l'utilisateur a bien entré quelque chose dans le champ (il prend la peine de vérifier avant), il lui répond (dans la console), "Je t'aime bien, …".
*/
let sHello = prompt("Bonjour !");
if (sHello === "Bonjour"){
    let sName = prompt("Toi, tu es poli, tu me dis bonjour, je veux bien te parler… Comment t'appelles-tu ?");
    if (sName){
        console.log("Je t'aime bien, " + sName);
    }
    // else {
    //   console.log("chaine de caractère vide");
    // }
}


// 2. Exprimer une alternative : if / else

/*
1. Demandez à l'utilisateur d'entrer un nombre et enregistrez ce nombre dans une constante nombre
2. Si ce nombre est positif, affichez "… est positif", sinon, affichez "… est négatif ou nul"
*/
const iNum = prompt("Écrivez un nombre");
if (iNum > 0){
    console.log(iNum + " est positif");
}
else {
    console.log(iNum + " est négatif ou nul");
}


/*
1. Initialisez la variable firstName à  John et enregistrez son état civil ('single') dans une variable civilStatus
2. Si l'état civil est 'married', affichez "John est marié !", sinon affichez "John va, on l\'espère, bientôt se marier :)"
3. Changez l'état civil de John à ('married') et retestez
*/
let sFirstName = "John";
// let sCivilStatus = "single";
let sCivilStatus = "married";

if (sCivilStatus === "married"){
    console.log("John est marié !");
}
else {
    console.log("John va, on l'espère, bientôt se marier :)");
}


/*
1. Créez à présent une variable isMarried pour enregistrer l'état civil de John et, en imaginant qu'il est marié, initialisez-la à true
2. Servez-vous à présent de cette variable pour afficher "John est marié !" ou "John va, on l\'espère, bientôt se marier :)" selon qu'il est marié ou pas
3. Retestez votre code après avoir changé la valeur de isMarried à false
*/
let bIsMarried = false;

if (bIsMarried === true){
    console.log("John est marié !");
}
else {
    console.log("John va, on l'espère, bientôt se marier :)");
}

/*
1. Enregristrez la taille et le poids de John (78 kg, 1.69 m) et de Mark (92 kg, 1.95 m) dans 4 variables
2. Calculez leur BMI et affichez, selon le cas, "Le BMI de Mark est plus élevé que celui de John" ou "Le BMI de John est plus élevé que celui de Mark"
*/
let iWeightJ = 78;
let iHeightJ = 1.69;
let iWeightM = 92;
let iHeightM = 1.95;

let iBMIJohn = ((iWeightJ) / (iHeightJ * iHeightJ));
let iBMIMark = ((iWeightM) / (iHeightM * iHeightM));
console.log(iBMIJohn);
console.log(iBMIMark);

if (iBMIMark > iBMIJohn){
    console.log("Le BMI de Mark est plus élevé que celui de John");
}
else {
    console.log("Le BMI de John est plus élevé que celui de Mark");
}

/*
Ecrire un programme qui teste si un nombre entré par l’utilisateur est pair ou impair.
*/
/* % = récupérer le reste de la division (one way function : aller dans un sens mais pas dans l'autre)*/

let iNumb = prompt("Entrez un nombre :");
if(iNumb % 2 === 0){
    console.log("pair");
}
else {
    console.log("impair");
}
