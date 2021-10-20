/*
TESTS - PRÉPA 2 : Les restos du cœur
Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.
Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.
*/

const iPrice = 60;
let iDiscount = (iPrice/100)*10;
let iDonated = (iDiscount/100)*10;
console.log(iPrice);

// if (iPrice >= 25){
//   console.log(`Votre prix sera de ${iPrice - iDiscount}€.`);
//   if (iDiscount >= 5 && iDonated < 2){
//     console.log(`Votre prix sera de ${iPrice - iDiscount}€ et ${iDonated}€ seront versés aux Restos du Coeur.`);
//   } else if (iPrice >= 25 && iDiscount >= 5 && iDonated > 2){
//     console.log(`Votre prix sera de ${iPrice - iDiscount}€ et 2€ seront versés aux Restos du Coeur.`);
//   }
// } else {
//   console.log(`Votre prix sera de ${iPrice}€.`);
// }

if (iPrice >= 25 && iDiscount < 5){
    console.log(`Votre prix sera de ${iPrice - iDiscount}€ (remise de ${iDiscount}€).`);
} else if (iPrice >= 25 && iDiscount >= 5 && iDonated < 2){
    console.log(`Votre prix sera de ${iPrice - iDiscount}€ (remise de ${iDiscount}€) et ${iDonated}€ seront versés aux Restos du Coeur.`);
} else if (iPrice >= 25 && iDiscount >= 5 && iDonated > 2){
    console.log(`Votre prix sera de ${iPrice - iDiscount}€ (remise de ${iDiscount}€) et 2€ seront versés aux Restos du Coeur.`);
} else {
    console.log(`Votre prix sera de ${iPrice}€.`);
}

/* Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/
