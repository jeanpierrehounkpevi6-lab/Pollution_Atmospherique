/*
 Cette fonction permet de faire bouger une image dès que la souris passe au dessus
  Pour ce faire on prend la position actuelle de l'objet q'on incremente de 100px
 */



function Voiturebouge(){
    let voiture=document.getElementById("imgvoiture");
    let marginL=parseInt(window.getComputedStyle(voiture).marginLeft);
    marginL=marginL+100;
    voiture.style.marginLeft=marginL+"px";
}