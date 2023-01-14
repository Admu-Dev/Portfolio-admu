<?php
/* Récupération des informations du formulaire*/
  $name = stripslashes(trim($_POST['name']));
  $email = stripslashes(trim($_POST['mail']));
  $subject = stripslashes(trim($_POST['subject']));
  $message = stripslashes(trim($_POST['message']));

  /*Vérifie si l'adresse mail est au bon format */
  $regex_mail = "#[a-z0-9]{1,}[\-\_\.a-z0-9]{0,}@[a-z]{2,}[\-\_\.a-z0-9]{0,}\.[a-z]{2,6}$#";

  /*Vérifie qu il n y est pas d erreur dans adresse mail*/
  if (!preg_match($regex_mail, $_POST['mail'])){
    echo $email;
    $courriel = 0; 
  }else{
    $courriel = 1;
  }   

  if ($courriel == 1){
    /*Envoi du mail*/

    /*Le destinataire*/
    $to="adrien.muzeaux@gmail.com";

    /*Le sujet du message qui apparaitra*/
    $sujet="Message depuis le site";
    $msg = '';
    /*Le message en lui même*/
    /*$msg = 'Mail envoye depuis le site' "rnrn";*/
    $msg .= 'Nom : '.$name."rnrn";
    $msg .= 'Mail : '.$email."rnrn";
    $msg .= 'Motif : '.$subject."rnrn";
    $msg .= 'Message : '.$message."rnrn";
    /*Les en-têtes du mail*/
    $headers = 'From: MESSAGE DU SITE FAFA<adrien.muzeaux@gmail.com>'."rn";
    $headers .= "rn";
    /*L'envoi du mail - Et page de redirection*/
    mail($to, $sujet, $msg, $headers);
    header('Location: ../index.html#contact');
    echo '<script type="text/javascript">' . 
    'document.getElementById("sent-message").innerHTML = "Votre message a été envoyé. Merci !";
    
    document.getElementById("sent-message").classList.add("alert-success")' .
    '</script>';
  }else{
    header('Location: ../index.html#contact');
    echo '<script type="text/javascript">' . 
    'document.getElementById("error-message").innerHTML = "Il y a eu un erreur lors de l\'envoie du mail. Si cela perciste, merci de m\'envoyer un mail directement sans passer par le site web";
    
    document.getElementById("error-message").classList.add("alert-danger")' .
    '</script>';
  }
?>