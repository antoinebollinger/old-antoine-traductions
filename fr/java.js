/* Facebook, linkedin, twitter */

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/fr_FR/all.js#xfbml=1";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/fr_FR/all.js#xfbml=1";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-34592459-1']);
	_gaq.push(['_trackPageview']);

	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();

/* Google Analytics */

var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-34592459-1']);
	_gaq.push(['_trackPageview']);

	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
	
/* Image pop-up */
		
	function pop_img(url)
	{
	var newfen=window.open(url,'agrandir','directories=no,status=no,scrollbars=0,resizable=1,menubar=no,WIDTH=320,HEIGHT=450');
	}
		
/* formulaire */

function checkrequired(which){
	var pass=true
	if (document.images){
	for (i=0;i<which.length;i++){
	var tempobj=which.elements[i]
	if (tempobj.name.substring(0,8)=="required"){
	if (((tempobj.type=="text"||tempobj.type=="textarea")&&tempobj.value=='')||(tempobj.type.toString().charAt(0)=="s"&&tempobj.selectedIndex==-1)){
	pass=false
	break
	}
	}
	}
	}
	if (!pass){
	alert("Merci de bien vouloir renseigner tous les champs de ce formulaire.")
	return false
	}
	else
	return true
	}
		
/* défilement texte dans Actualité */
					
texte = new Array;
texte[0] = 
"<p>22/11/2012</p><p>Lancement du livre de mon grand ami Andrei Netto, qui relate son expérience en Lybie. Andrei était présent lors de la chute de Kadhafi, et même avant, et nous rapporte son expérience, ses sentiments, et plus encore. A découvrir absolument !";
texte[1] = 
"<p>19/11/2012</p><p>Félicitations à Rober, qui a soutenu sa thèse avec succès ! Un travail très intéressant sur l'influence du design dans l'industrie automobile confrontée aux nouveaux défis actuels.Retrouvez Rober dans mes références</p>";
texte[2] = 
"<p>19/10/2012</p><p>Enfin parait l'excellent livre de Denise Alvarez, tiré de ses nombreuses expériences dans le monde académique. Elle nous livre les dessous de la production académique dans un monde de plus en plus homogénéisé.</p>";
texte[3] = 
"<p>01/09/2012</p><p>Le nouveau site d'Antoine Bollinger, traducteur portugais-français, vient d'arriver ! Je suis heureux de vous le livrer, alors profitez et visitez !";
actual_texte = 0;
function changeMessage()
	{
	document.getElementById("bloc").innerHTML = texte[actual_texte];
	actual_texte++;
	if(actual_texte >= texte.length)
		actual_texte = 0; 
	}
if(document.getElementById)
	setInterval("changeMessage()",4000)
