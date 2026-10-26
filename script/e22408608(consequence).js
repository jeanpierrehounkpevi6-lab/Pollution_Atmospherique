

function Valide()
{

    let usern,motdepass,nom,prenom,adress,numero;
    usern=document.getElementById("txtUsername").value
    motdepass=document.getElementById("Pass").value
    nom=document.getElementById("Fname").value
    prenom=document.getElementById("Lname").value
    adress=document.getElementById("Adress").value
    numero=document.getElementById("num").value
    let test=true
    


    if(usern==""||motdepass==""||nom==""||prenom=="" ||adress==""||numero==""){
        alert("S'il vous plait tous les champs sont obligatoires.")
        test=false
    }
    else{

      if(usern.length<10){
          alert("Votre nom d'utilisateur doit comporter au moins 10 caractères.")
          test=false
      }
     let exp=/^[A-Za-z0-9]{10,}$/ //expression reguliere verifiant la presence d'au moins 10 caractéres et uniquement des lettres (A-Z, a-z) et des chiffres (0-9)
     if(!exp.test(motdepass)){
         alert("Votre mot de pass doit contenir au moins 10 caractères dont des lettres et chiffres uniqument.")
         test=false
     }


     let regexp=/^[A-Za-z]+$/;
     if(!regexp.test(nom)||(!regexp.test(prenom))){
      alert("Votre nom ainsi que votre prenom ne doit contenir que des lettres.")
      test=false
      }
     let exp1=/^[0-9a-zA-Z]+$/
      if(!exp1.test(adress)){
        alert("Votre adress doit contenir des chiffres et lettres ou supprimer les espaces entre les mots.")
        test=false
     }

     if(numero.length!=10){
       alert("Votre numero doit excatement contenir 10 chiffres.")
       test=false
      }
    }
    if(test){
        alert("Félicitation vos valeurs sont valides!!")
    }
}
/** cette fonction permet d'afficher les différents valeurs saisies par l'utilisateur */

function recapitulatif(){
    let usernrcp,motdepassrcp,nomrcp,prenomrcp,adressrcp,numerorcp;
  usernrcp=document.getElementById("txtUsername").value
  motdepassrcp=document.getElementById("Pass").value
  nomrcp=document.getElementById("Fname").value
  prenomrcp=document.getElementById("Lname").value
   adressrcp=document.getElementById("Adress").value
  numerorcp=document.getElementById("num").value


alert( "Nom d'utilisateur :" +usernrcp +"\nMot de passe :" +motdepassrcp
    +"\nNOM :"+ nomrcp+ "\nPrenom :" +prenomrcp 
    +"\nADRESSE :" +adressrcp +"\nNuméro: " + numerorcp
)
   
}


