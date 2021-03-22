<?php

$nome = $_POST['requirednome']; ### nom de l'expériteur
$exp = $_POST['requiredemail']; ### adresse de l'expéditeur 
$objet = stripslashes($_POST['requiredassunto']); ### sujet du mail 
$msg = stripslashes(nl2br(htmlspecialchars($_POST["requiredmensagem"]))); ### message du mail!

if($exp != "" && $objet != "" && $msg != "") 
{ 
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 
$headers .= "From: $exp <$exp>\r"; 
$body = "<html><header>De: $nome<p></p></header><body><br />$msg</body></html>"; 
mail("antoine.bollinger@gmail.com", "$objet", "$body", "$headers"); 
echo 	"<html><body style='font-family:calibry;color:black;'>
			<p><img src='images/yes2.png' alt='Yes!' style='float:left;'/>Votre message a bien été envoyé.</p>
			<p>Je vous répondrai dans les plus brefs délais.</p>
			<p><a href='index.html'>Cliquez ici</a> pour revenir au site.</p>
		</body></html>";
exit; 
}else{ 
echo 	"<html><body style='font-family:calibry;color:black;'>	
			<p><img src='images/no.png' alt='No!' style='float:left;'/>Il n'a pas été possible d'envoyer votre message.</p>
			<p>Verifiez que vous avez bien rempli toutes les cases, et que votre adresse email est correcte.</p>
			<p>Si vous avez le moindre doute, veuillez me contater par <a href='mailto:antoine.bollinger@gmail.com'>email</a>.</p>
			<p>Pour revenir au formulaire, <a href='contact.html'>cliquez ici</a>.</p>
		</body></html>"; 
exit; 
} 
?>