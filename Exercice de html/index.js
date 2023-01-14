function validateForm(){
    let iD = document.getElementById("iD");
    if(iD.value == ""){
        alert("Champ vide !!!");
    }
    let NOM = document.getElementById("nom");
    if(nom.value == ""){
        alert("Veuillez entrer votre nom svp!!");
    }
    let pays = document.getElementById("pays");
    if(pays.value == ""){
        alert("champ vide!!");
    }
    let ville = document.getElementById("ville");
    if(ville.value == ""){
        alert("Champ vide !!!");
    }
    let commune = document.getElementById("commune");
    if(commune.value == ""){
        alert("Champ vide !!!");
    }
}