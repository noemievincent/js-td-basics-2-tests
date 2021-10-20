/*
TESTS - PRÉPA 3 : kw
Ecrire un programme JS qui calcule le coût d’une consommation électrique.
L’utilisateur entre le nombre de KW consommés.
Les 30 premiers KW sont à 25 centimes le KW
Les 31 à 50èmes KW sont à 20 centimes le KW
Les 51 à 70èmes KW sont à 15 centimes le KW
Les KW suivants sont à 10 centimes le KW
*/

let iUsedKW = parseInt(prompt("Combien de KiloWatt avez-vous consommé ?"));
let iPriceOne = 25;
let iPriceTwo = 20;
let iPriceThree = 15;
let iPriceFour = 10;
let iFirst = 30*iPriceOne;
let iTwo = 20*iPriceTwo;
let iThree = 20*iPriceThree;

//cas 1 : si le nombre de KW est entre 0 et 30, on multiplie par iPriceOne
if (iUsedKW >= 0 && iUsedKW <= 30){
    console.log((iUsedKW*iPriceOne)/100 + "€");
}

//cas 2 : si le nombre de KW est entre 31 et 50, on soustrait les 30 premiers KW à iUsedKW et on le multiplie par iPriceTwo, puis on ajouter iFirst (le prix des 30 premiers KW)
else if (iUsedKW > 30 && iUsedKW <= 50) {
    console.log((((iUsedKW-30)*iPriceTwo)+iFirst)/100 + "€");
}

//cas 3 : si le nombre de KW est entre 51 et 70, on soustrait les 50 premiers KW à iUsedKW et on le multiplie par iPriceThree, puis on ajouter iFirst (le prix des 30 premiers KW) et iTwo (le prix des 20 suivants KW)
else if (iUsedKW > 50 && iUsedKW <= 70) {
    console.log((((iUsedKW-50)*iPriceThree)+iFirst+iTwo)/100 + "€");
}

//cas 4 : si le nombre de KW est supérieur à 70, on soustrait les 70 premiers KW à iUsedKW et on le multiplie par iPriceFour, puis on ajouter iFirst (le prix des 30 premiers KW) et iTwo (le prix des 20 suivants KW) et iThree (le prix des 20 suivants KW)
else {
    console.log((((iUsedKW-70)*iPriceFour)+iFirst+iTwo+iThree)/100 + "€");
}


/*
Valeurs de test :
- 30 KW => 750 centimes = 7.5 €
- 31 KW => 30 * 25 + 1 * 20 = 770 centimes = 7.7 €
- 40 KW => 30 * 25 + 10 * 20 = 750 + 200 = 950 centimes = 9.5 €
- 50 KW => 30 * 25 + 20 * 20 = 750 + 400 = 1150 centimes = 11.5 €
- 51 KW => 30 * 25 + 20 * 20 + 1 * 15 = 750 + 400 + 15 = 1165 centimes = 11.65 €
- 60 KW => 30 * 25 + 20 * 20 + 10 * 15 = 750 + 400 + 150 = 1300 centimes = 13 €
- 70 KW => 30 * 25 + 20 * 20 + 20 * 15 = 750 + 400 + 300 = 1450 centimes = 14.5 €
- 71 KW => 30 * 25 + 20 * 20 + 20 * 15 + 1 * 10 = 750 + 400 + 300 + 10 = 1460 centimes = 14.6 €
- 80 KW => 30 * 25 + 20 * 20 + 20 * 15 + 10 * 10 = 750 + 400 + 300 + 100 = 1550 centimes = 15.5 €
*/
