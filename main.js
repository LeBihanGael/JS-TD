//N = prompt("Entrer un nombre N : ");
//var facto = 0;
//for (var i = 1; i <= N-1; i++) {
    //facto = Addition(facto, i);
//}
//alert("La facto est égal à : " + facto);

//function Addition(param1, param2) {
//    return param1 + param2;
//}


// ancienne version de l'exo6 facto = facto + i;

//Ajout de la fonction pour l'exo 8
function ModifTexte(texte) {
    var div1 = document.getElementById("MaDiv1");
    div1.innerHTML = texte;
    alert("Le texte va etre modifié");
}
ModifTexte("Hello");

//Ajout de la fonction pour l'exo 9
function ModifTexteByName(texte) {
    var divs = document.getElementsByName("lesdivs");
    for (var i = 0; i < divs.length; i++) {
        divs[i].innerHTML = texte;
    }
    alert("le texte des divs va etre modifie");
}
ModifTexteByName("Ceci est le texte apres exécuton de la function");