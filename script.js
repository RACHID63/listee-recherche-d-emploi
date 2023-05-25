function ajouterCellule() {
    var tableau = document.getElementById("tableau");
    var ligne = tableau.insertRow(-1);
    var cellule1 = ligne.insertCell(0);
    var cellule2 = ligne.insertCell(1);
    var cellule3 = ligne.insertCell(2);
    cellule1.innerHTML = "essai";
    cellule2.innerHTML = "Nouvelle entreprise";
    cellule3.innerHTML = "Nouvelle candidature";
  }