/*
TESTS - PRÉPA 4 : Ristourne
Un magasin fait 10% de réduction pour des achats dont le montant est supérieur à 50€
s’il y a au moins 3 enfants dans la famille ou si le montant des achats est supérieur à 125€.
Sinon, il fait 5% de réduction.
Attention, les ristournes ne sont pas cumulables.
Ecrire un programme JS qui affiche le montant de la réduction accordée
sur base de la situation de l’acheteur et du montant de ses achats.
*/

const iPrice = 126;
let iNbKids = 2;
let iDiscountA = (iPrice/100)*10;
let iDiscountB = (iPrice/100)*5;
console.log(iPrice);


if ((iPrice >= 50 && iNbKids >= 3) || iPrice > 125){
    console.log(`La facture est de ${iPrice - iDiscountA}€ (remise de ${iDiscountA}€).`);
} else if ((iPrice <= 50 && iNbKids >= 3) || iPrice <= 125){
    console.log(`La facture est de ${iPrice - iDiscountB}€ (remise de ${iDiscountB}€).`);
} else if ((iPrice <= 50 && iNbKids < 3) || iPrice <= 125){
    console.log(`La facture est de ${iPrice - iDiscountB}€ (remise de ${iDiscountB}€).`);
} else {
    console.log(`La facture est de ${iPrice - iDiscountB}€ (remise de ${iDiscountB}€).`);
}

/* Valeurs de test :
- achat de 50 euros et moins de 3 enfants : 5% = 2.5€
- achat de 50 euros et 3 enfants : 5% = 2.5€
- achat de 60 euros et moins de 3 enfants : 5 % = 3€
- achat de 60 euros et 3 enfants : 10% = 6€
- achat de 125€ et moins de 3 enfants : 5 % = 6.25€
- achat de 125€ et 3 enfants : 10 % = 12.5€
- achat de 126€ et moins de 3 enfants : 10 % = 12.6€
- achat de 126€ et 3 enfants : 10 % = 12.6€
*/
