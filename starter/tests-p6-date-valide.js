/*
TESTS - PRÉPA 6 : Date valide
Ecrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas
*/

let iDay = parseInt(prompt("Entrez un jour (en nombre):"));
let iMonth = prompt("Entrez un mois (en lettre):");
let iYear = parseInt(prompt("Entrez une année (en nombre):"));
let bIsBissextile;

if (iYear % 4 === 0){
    if (iYear % 100 === 0){
        if (iYear % 400 === 0){
            bIsBissextile = true; //divisible par 100 et 400
        } else {
            bIsBissextile = false; // divisible par 100 mais pas 400
        }
    } else {
        bIsBissextile = true; //divisible par 4 mais pas par 100
    }
} else {
    bIsBissextile = false;
}


if (iMonth === "janvier"){
    if (iDay >= 1 && iDay <= 31){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else if (iMonth === "février") {

    if (bIsBissextile === true){
        if (iDay >= 1 && iDay <= 29){
            console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
        }
    }
    else if (bIsBissextile === false) {
        if (iDay >= 1 && iDay <= 28){
            console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
        }
    }
    else {
        console.log("erreur");
    }
}

else if (iMonth === "mars") {
    if (iDay >= 1 && iDay <= 31){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else if (iMonth === "avril") {
    if (iDay >= 1 && iDay <= 30){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else if (iMonth === "mai") {
    if (iDay >= 1 && iDay <= 31){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else if (iMonth === "juin") {
    if (iDay >= 1 && iDay <= 30){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else if (iMonth === "juillet") {
    if (iDay >= 1 && iDay <= 31){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else if (iMonth === "août") {
    if (iDay >= 1 && iDay <= 31){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else if (iMonth === "septembre") {
    if (iDay >= 1 && iDay <= 30){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else if (iMonth === "octobre") {
    if (iDay >= 1 && iDay <= 31){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else if (iMonth === "novembre") {
    if (iDay >= 1 && iDay <= 30){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else if (iMonth === "décembre") {
    if (iDay >= 1 && iDay <= 31){
        console.log(`La date est ${iDay} ${iMonth} ${iYear}.`);
    } else {
        console.log("erreur");
    }
}

else {
    console.log("erreur");
}




/*
AIDE (en français) :
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/

/* Aide supplémentaire
 - Vous pouvez stocker dans une varaible maxJours le nombre de jours autorisés pour chaque mois :
	 - traiter le cas du mois de février où ce sera 28 ou 29 selon que l'année est bissextile ou pas ;
	 - puis traiter les cas où ce sera 30 ;
	 - dans les autres cas, c'est 31 ;
 - Il ne reste plus ensuite qu'à comparer le jour entré par l'utilisateur avec maxJour pour retourner true ou fasle
  selon que la date est valide ou pas.
  */
