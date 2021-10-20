/*
TESTS - PRÉPA 1
Ecrire un programme JS qui calcule la facture d’un client qui achète N articles vendus au prix x
sachant qu’on accorde 10% de ristourne si le client achète au moins 20 articles.
*/

let iNbArticle = parseInt(prompt("Combien d'articles achetez-vous ?"));
const iPrice = 15;
let iBill = iNbArticle*iPrice;
let iDiscount = (iBill/100)*10;
console.log(iBill);

if (iNbArticle >= 20){
    console.log(`Votre prix sera de ${iBill - iDiscount}€.`);
} else {
    console.log(`Votre prix sera de ${iBill}€.`);
}
