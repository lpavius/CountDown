// let	jours = document.getElementById("days");
// let	heures = document.getElementById("hours");
// let	minutes = document.getElementById("minutes");
// let	secondes = document.getElementById("seconds");
let intervalId;
function valeurTemps() {

let	heures = parseInt(document.getElementById("hours").value);
let	minutes = parseInt(document.getElementById("minutes").value);
let	secondes = parseInt(document.getElementById("seconds").value);



let totalSecondes = (heures * 3600) + (minutes * 60) + secondes;
return totalSecondes
}

function countDown() {

	// let now = new Date();

	/*calcul du nb de second entre toReach et now divisé par
	 1000 miliseconde pour avoir le resultat en seconde */ 
	// let diff_en_second = Math.floor((toReach.getTime() - now.getTime()) / 1000);

	// if (diff_en_second > 1) {
	/* calcul nb jour en seconde 24h*60min*60s */
	// let jour = Math.floor(diff_en_second / (60 * 60 * 24));
	/* 60m/60s */
	let tempsSeconde = valeurTemps();
	// tempsSeconde--;
	console.log(tempsSeconde);
	let heure = Math.floor((tempsSeconde % 86400) / 3600);
	console.log(heure);
	/* diff/60s */
	let minute = Math.floor((tempsSeconde % 3600) / 60);
	console.log(heure);

	/*  */
	let seconde = tempsSeconde % 60;
	console.log(seconde);
	// jours.innerHTML = jour;
	document.getElementById("hours").innerHTML = heure;
	// console.log(heure);
	document.getElementById("hours").value.innerHTML = minute;
	document.getElementById("seconds").value.innerHTML = seconde;
	
	if (tempsSeconde < 0) {
    clearInterval(intervalId);
    document.getElementById("fin").innerHTML = "FIN";
  	}
}

function play() {
	intervalId = setInterval(countDown, 1000);
	// countDown();
	// setInterval(countDown, 1000);
}

function stop() {
	clearInterval(intervalId);
}

function reset() {
	clearInterval(intervalId);
	jours = "00";
	heures = "00";
	minutes = "00";
	secondes = "00";
}