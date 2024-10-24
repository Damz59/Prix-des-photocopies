const nbrCopie = document.querySelector('#nbr-copie');
const button = document.getElementById('button');
const resultat = document.getElementById('resultat');
button.addEventListener('click', calculerPrix);

function calculerPrix(){
    let somme = 0
    if (nbrCopie.value <= 10 ){
        somme = (nbrCopie.value*0.1)
    } 
    else if (nbrCopie.value > 10 && nbrCopie.value <= 30){
        somme = ((nbrCopie.value-10)*0.09)+1
    }
    else { 
        somme = ((nbrCopie.value-30)*0.08)+2.8 
    }
   resultat.innerText = somme 
}
