N = prompt("Entrer un nombre N : ");
var facto = 0;
for (var i = 1; i <= N-1; i++) {
    facto = Addition(facto, i);
}
alert("La facto est égal à : " + facto);

function Addition(param1, param2) {
    return param1 + param2;
}


// ancienne version de l'exo6 facto = facto + i;