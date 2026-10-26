let Id=0;
function diapporama(n)
/*
Cette fonction permet tout simplement d'afficher le diapo
en fonction de boutton appuiyé
Declaration d'une fonction avec parametre n representant
de combien de diapositive qu'on veut avancer
Id c'est l'index (numero) de la diapo actuellement afficher
*/
{
  Id=Id+n;
  displayDiapo()
}
function displayDiapo()
/*Cette fonction permet de choisir 
la bonne diapo a presenter et surtout de chacher les autres
diapo pendant que une est affichée */
{
    let i,diapo;
    diapo=document.getElementsByClassName("diapos")//Recuperation de l'objet diapos
    
    if(Id>=diapo.length){
        Id=0
        /*
        Mise a zero de l'indice du diapo que l'on souhaite afficher
        */
    }

    if(Id<0){
        Id=diapo.length-1
        //affiche du dernier diapo si Id<0
    }

    for(i=0;i<diapo.length;i++){
        diapo[i].style.display="none"
        //Non affichage des diapos
    }
   diapo[Id].style.display="block" 
   //Affichage de la diapo d'indice i
}

function showImage(n)
/* cette fonction va permettre d'afficher 
la diapo selectionner
n est utiliser pour choisir la diapo a afficher
*/
{
    Id=n;
    displayDiapo();
}

setInterval(diapporama,2000,1)
//cette methode permet de changer les diapo toutes les 2 secondes
//en appelant le fonction diapporama avec comme parametre 1 


function Conference()
/*
Le prix normale est de 16euro .Mais ceertaines reductions
s'applique comme suit enfants de moins de 12 ans bénéficient d'une réduction de 50%.
Les adultes entre 12 ans et 64 ans inclus paient le prix normal du billet.
Les personnes âgées de 65 ans et plus bénéficient d'une réduction de 25%.
*/
{
let age;
age=Number(document.getElementById("Age").value);

if(age==""){
    document.getElementById("cout").value="veuillez entrer votre age";
}
else{
 if(age<12){
    document.getElementById("cout").value="8€";
 }

 if(age>=12 && age<=64){
    document.getElementById("cout").value="16 €"
 }

 if(age>=65){
    document.getElementById("cout").value="12 €"
 }

}

}