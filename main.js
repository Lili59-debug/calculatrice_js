let input = "";

function affichage(bouton) {
    input = input + bouton.value;
    document.getElementById("resultat").innerHTML = input;
}

function calcule() {
    document.getElementById("resultat").innerHTML = eval(input);
    input = "";
}

function efface(bouton) {
    document.getElementById("resultat").innerHTML = "0";
    input = "";
}