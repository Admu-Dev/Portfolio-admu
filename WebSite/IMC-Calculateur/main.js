
function Valider(ideal)
{
    
    let taille = document.ideal.taille.value
    let poids = document.ideal.poids.value

        if ((taille == "Entrez votre taille (en cm)")|| (taille == "")|| (poids == "Entrez votre poids")|| (poids == ""))   //alert si un champ n'esp pas renseigné
            {
                document.getElementById("alert-erreur").innerHTML = "Si vous voulez que je calcule votre indice de masse corporel ainsi que votre poids idéal il faut que vous entrez vos mensuration</div>";
                document.getElementById('alert-erreur').classList.add('alert-danger');

                
            }
            else
            {
            //Fonction calcul de l'imc
        let nombre1 = (taille*0.01)          //convertion de la taille des centimètres en mètres
        let nombre2 = (nombre1*nombre1)      //taille au carré
        let nombre3 = (poids/nombre2) 
        nombre3 = Math.round(nombre3)       //poids divisé par la taille
        document.getElementById("alert-IMC").innerHTML = "Votre indice de masse corporel est de: " + nombre3 + " !";
        document.getElementById('alert-IMC').classList.add('alert-info');
        
        // Message d'alerte en fonction de l'imc
        
        if (nombre3 <= 16)
        {
        document.getElementById("info-IMC").innerHTML = "Votre indice est un très faible, c'est à dire que vous êtes très maigre. Il faut faire très attention, je vous recomande de voir un nutrioniste !"
        document.getElementById('info-IMC').classList.add('alert-danger');
        }
        if (nombre3 <=18 && nombre3 >16)
        {
        document.getElementById("info-IMC").innerHTML = "Votre indice est faible, vous êtes maigre, il faut surveiller votre ligne !"
        document.getElementById('info-IMC').classList.add('alert-warning');
        }
        if (nombre3 <=20 && nombre3 >18)
        {
        document.getElementById("info-IMC").innerHTML = "Vous êtes en leger + sous-poids + , il faut manger !!!"
        document.getElementById('info-IMC').classList.add('alert-warning');
        }
        if (nombre3 <=24 && nombre3 >20)
        {
        document.getElementById("info-IMC").innerHTML = "Vous êtes dans la moyenne, ne vous inquietez pas !"
        document.getElementById('info-IMC').classList.add('alert-success');
        }
        if (nombre3 <=26 && nombre3 >24)
        {
        document.getElementById("info-IMC").innerHTML = "Vous êtes en très leger sur-poids, ce n'est pas bien grave"
        document.getElementById('info-IMC').classList.add('alert-success');
        }
        if (nombre3 <=28 && nombre3 >26)
        {
        document.getElementById("info-IMC").innerHTML = "Vous êtes en sur-poids mais ce n'est pas iratrappable !"
        document.getElementById('info-IMC').classList.add('alert-warning');
        }
        if (nombre3 <=32 && nombre3 >28)
        {
        document.getElementById("info-IMC").innerHTML = "Vous êtes en sur-poids !"
        document.getElementById('info-IMC').classList.add('alert-warning');
        }
        if (nombre3 >32)
        {
        document.getElementById("info-IMC").innerHTML = "Vous êtes vraiment en sur-poids, je vous conseil de voir un nutritioniste pour qu'il vous adapte un regime personnalisé."
        document.getElementById('info-IMC').classList.add('alert-danger');
        }
        
        
        //Fonction calcul du poid parfait
        
        let nombre4 = (22*nombre2)         //22 est l'indice parfait
        nombre4 = Math.round(nombre4)
        document.getElementById("IMC_ideal").innerHTML = "Votre poids idéal est d'environ: " + nombre4 + "kg !";
        document.getElementById('IMC_ideal').classList.add('alert-success');
            
            }
}