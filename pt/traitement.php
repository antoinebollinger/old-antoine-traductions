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
			<p><img src='images/yes2.png' alt='Yes!' style='float:left;'/>Sua mensagem foi enviada com sucesso.</p>
			<p>Estarei retornando em breve.</p>
			<p><a href='index.html'>Clique aqui</a> para voltar para o site.</p>
		</body></html>";
exit; 
}else{ 
echo 	"<html><body style='font-family:calibry;color:black;'>	
			<p><img src='images/no.png' alt='No!' style='float:left;'/>Foi impossivel enviar sua mensagem.</p>
			<p>Verifique que você preencheu todos os brancos, e que seu email esta correto.</p>
			<p>Qualquer duvida, favor entrar em contato comigo atraves do meu <a href='mailto:antoine.bollinger@gmail.com'>email</a>.</p>
			<p>Para voltar ao formulário, <a href='contato.html'>clique aqui</a>.</p>
		</body></html>"; 
exit; 
} 
?>