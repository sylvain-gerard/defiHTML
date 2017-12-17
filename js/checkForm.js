function checkForm() {

    // VERIFICATION DU REMPLISSAGE DES CHAMPS
    if (document.forms[0].nom.value == "") {
        window.alert("Entrez votre nom !");
    } else if (document.forms[0].prenom.value == "") {
        window.alert("Entrez votre prénom !");
    } else if (document.forms[0].mail.value == "") {
        window.alert("Entrez votre email !");
    } else if (document.forms[0].phone.value == "") {
        window.alert("Entrez votre téléphone !");
    } else if (!document.forms[0].radio[0].checked && !document.forms[0].radio[1].checked) {
        window.alert("Sélectionnez un type de séjour !");
    } else if (document.forms[0].nPerson.value == "") {
        window.alert("Choisissez le Nombre de personnes !");
    } else if (document.forms[0].nSemaine.value == "") {
        window.alert("Choisissez la Durée du séjour");
    } else {
        // SI CHAMPS REMPLIS => CALCUL DU PRIX
        var msg1 = "Estimation du prix de votre location : ";
        var msg2 = " euros";

        for (i = 0; i < document.forms[0].radio.length; i++) {
            if (document.forms[0].radio[i].checked) {
                typeSejour = parseInt(document.forms[0].radio[i].value);
            }
        }

        if (document.forms[0].parking.checked) {
            var option1 = 100;
        } else {
            option1 = 0;
        }

        if (document.forms[0].animal.checked) {
            var option2 = 100;
        } else {
            option2 = 0;
        }

        if (document.forms[0].fumeur.checked) {
            var option3 = 50;
        } else {
            option3 = 0;
        }

        var nombrePersonne = parseInt(document.forms[0].nPerson.options[document.forms[0].nPerson.selectedIndex].value);
        var duree = parseInt(document.forms[0].nSemaine.options[document.forms[0].nSemaine.selectedIndex].value);
        var total = duree * (nombrePersonne * (typeSejour + option1 + option2 + option3));
        var msg = msg1 + total + msg2;
        window.alert(msg);
    }
}
